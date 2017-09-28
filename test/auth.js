var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server')
var should = chai.should()
chai.use(chaiHttp)

var agent = chai.request.agent(server)

var User = require('../models/user')

describe('User', function() {
    it('should not be able to login if they have not registered', function(done) {
        agent
            .post('/login', { email: 'wrong@wrong.com', password: 'nope'})
            .end(function (err, res) {
                res.status.should.be.equal(401)
                done()
            })
    })
    it('should be able to signup', function(done) {
        User.findOneAndRemove({ username: "testone" }, function() {
            agent
                .post('/sign-up')
                .send({ username: 'testone', password: 'password'})
                .end(function (err, res) {
                    console.log(res.body)
                    res.should.have.status(200)
                    res.should.have.cookie('nToken')
                    done()
                })
        })
    })
    it('should be able to logout', function(done) {
        agent
            .get('/logout')
            .end(function(err, res) {
                res.should.have.status(200)
                res.should.not.have.cookie('nToken')
                done()
            })
    })
    it('should be able to login', function(done) {
        agent
            .post('/login')
            .send({ email: 'username', password: 'password' })
            .end(function (err, res) {
                res.should.have.status(200)
                res.should.have.cookie('nToken')
                done()
            })
    })
})
