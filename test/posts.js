var chai = require('chai')
var chaiHttp = require('chai-http')
var should = chai.should()
var Post = require('../models/post')

var agent = chai.request.agent(server)

chai.use(chaiHttp)

before(function (done) {
    agent
        .post('/login')
        .send({ username: 'testone', password: 'password'})
        .end(function (err, res) {
            done()
        })
})

var post = {title: 'post title', url: 'https://www.google.com', summary: 'post summary', subreddit: 'post subreddit'}

describe('Posts', function() {
    it('should create with valid attributes at POST /photos', function(done) {
        Post.findOneAndRemove(post, function() {
            //how many tours are there now?
            Post.find(function(err, posts) {
                var postCount = posts.length
                chai.request('localhost:3000')
                .post('/posts', post)
                .end(function (err, res) {
                    //check database for one more tour
                    Post.find(function(err, posts) {
                        postCount.should.be.equal(posts.length)

                        //check response is successful
                        res.should.have.status(200)
                        done()
                    })
                })
            })
        })
    })
})
