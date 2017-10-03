var jwt = require('jsonwebtoken');
var User = require('../models/user')

module.exports = function(app){


    app.get('/sign-up', function(req, res, next) {
      res.render('sign-up');
    });

    // SIGN UP POST
    app.post('/sign-up', function(req, res, next) {
          // Create User and JWT
          var user = new User(req.body);
          user.save(function (err) {
              if (err) { return res.status(400).send({ err: err }) }
              var token = jwt.sign({ _id: user._id, username: user.username, password:user.password }, process.env.SECRET, { expiresIn: "60 days" });
              res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
              res.user = user;
              res.redirect('/');
          });
    });

    //LogOut
    app.get('/logout', function(req, res, next) {
      res.clearCookie('nToken');
      res.redirect('/');
    });

    // LOGIN FORM
    app.get('/login', function(req, res, next) {
      res.render('login');
    });

        // LOGIN
    app.post('/login', function(req, res, next) {
      User.findOne({ username: req.body.username }, "+password", function (err, user) {
        if (!user) { return res.status(401).send({ message: 'Wrong username or password' }) };
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (!isMatch) {
            return res.status(401).send({ message: 'Wrong username or password' });
          }

          var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
          res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });

          res.redirect('/');
        });
      })
    });

}
