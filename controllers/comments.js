var Comment = require('../models/comment')
var Post = require('../models/post')

module.exports = function(app) {

    //POST(create) new comment
    app.post('/posts/:postId/comments', function (req, res) {
        //new instance of comment model
        var comment = new Comment(req.body)

        Post.findById(req.params.postId).exec(function (err, post) {
            //save instance to DB
            comment.save(function (err, comment) {
                console.log(post)
                post.comments.unshift(comment)
                post.save()

                console.log(comment)
                return res.redirect('/posts/' + post._id)
            })
        })
    })
}
