var Comment = require('../models/comment');
var Post = require('../models/post');

module.exports = function(app) {

// CREATE Comment
    app.post('/posts/:postId/comments', function (req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        var comment = new Comment(req.body);
        comment.author = req.user.username;
        // SAVE INSTANCE OF POST MODEL TO DB
        Post.findById(req.params.postId).exec(function (err, post) {
            post.comments.unshift(comment);
            post.save();
            return res.redirect(`/posts/` + post._id);
        });
    });

        // NEW REPLY
      app.get('/posts/:postId/comments/:commentId/replies/new', function(req, res, next) {
            Post.findById(req.params.postId).exec(function (err, post) {
                var comment = post.comments.id(req.params.commentId);
                res.render('replies-new', { post: post, comment: comment });
            });
      });

      // CREATE REPLY
app.post('/posts/:postId/comments/:commentId/replies', function(req, res, next) {
  // LOOKUP THE PARENT POST
  Post.findById(req.params.postId).exec(function (err, post) {
    // FIND THE CHILD COMMENT
    var comment = post.comments.id(req.params.commentId);
    // ADD THE REPLY
    comment.replies.unshift(req.body);
    // SAVE THE CHANGE TO THE PARENT DOCUMENT
    post.save();

    // REDIRECT TO THE PARENT POST#SHOW ROUTE
    res.redirect('/posts/' + post._id);
  });
});

};
