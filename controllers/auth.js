var jwt = require('jsonwebtoken')
var User = require('../models/user')
require('dotenv').config()

module.exports = function(app) {

    //GET sign-up page
    app.get('/sign-up', function(req, res, next) {
        res.render('sign-up')
    })

    //POST(create) new user
    app.post('/sign-up', function (req, res, next) {
        //create instance of Post model
        var user = new User(req.body)

        //save instance of post model to DB
        user.save(function (err) {
            if (err) {
                return res.status(400).send({err: err})
            }

            var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '60 days' })
            res.cookie('nToken', token, { maxAge: 900000, httpOnly: true })

            res.redirect('/')
        })
    })
}
