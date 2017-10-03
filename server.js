var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var Post = require('./models/post.js');
var jwt = require('jsonwebtoken');
var User = require('./models/user.js');

require('dotenv').config();


app.set('view engine', 'jade');
app.use(express.static('./views/styles'))
app.use(express.static('./views/js'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

require('./controllers/auth.js')(app);


var checkAuth = function (req, res, next) {
    if (typeof req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
        req.user = null;
    }else{
        var token = req.cookies.nToken;
        var decodedToken = jwt.decode(token, { complete: true }) || {};
        req.user = decodedToken.payload;
    }
    next();
}

app.use(checkAuth);

mongoose.connect('mongodb://localhost/my_database', { useMongoClient: true });

app.get('/', function(req,res){
    Post.find().exec(function (err, posts) {
    res.render('index', { posts: posts, currentUser: req.user });
  });
});

app.get('/posts/new', function(req,res){
    res.render('newPost' , {currentUser : req.user});
});

//Controllers
require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);




app.listen(3000);
