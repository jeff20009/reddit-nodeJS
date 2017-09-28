var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')
var methodOverride = require('method-override')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var jwt = require('jsonwebtoken')
var app = express()
var Post = require('./models/post')
var User = require('./models/user')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
mongoose.connect('mongodb://localhost/reddit-clone', { useMongoClient: true })
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(cookieParser())

require('./controllers/posts.js')(app)
require('./controllers/comments.js')(app)
require('./controllers/auth.js')(app)

var checkAuth = function(req, res, next) {
    console.log("Checking authentication")

    if (typeof req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
        req.user = null
    } else {
        var token = req.cookies.nToken
        var decodedToken = jwt.decode(token, { complete: true }) || {}
        req.user = decodedToken.payload
    }
    next()
}

app.use(checkAuth)

//GET reddit index
app.get ('/', function (req, res) {
    var currentUser = req.user

    Post.find().exec(function (err, posts) {
        res.render('posts-index', {posts: posts, currentUser: currentUser})
    })
})

app.get('/n/:subreddit', function (req, res) {
    Post.find({ subreddit: req.params.subreddit }).exec(function (err, posts) {
        res.render('posts-index', {posts: posts, currentUser: currentUser})
    })
})

//logout
app.get('/logout', function(req, res, next) {
    res.clearCookie('nToken')
    res.redirect('/')
})

//login form
app.get('/login', function(req, res, next) {
    res.render('login')
})

//login post
app.post('/login', function(req, res, next) {
    User.findOne({ email: req.body.email }, "+password", function (err, user) {
        if ( !user ) { return res.status(401).send({ message: 'Wrong email or password' }) }
        user.comparePassword(req.body.password, function (err, isMatch) {
            if ( !isMatch ) {
                return res.status(401).send({ message: 'Wrong email or password'})
            }

            var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" })
            res.cookie('nToken', token, { maxAge: 900000, httpOnly: true })

            res.redirect('/')
        })
    })
})

app.listen(3000, function() {
    console.log('Reddit clone listening on port 3000!')
})
