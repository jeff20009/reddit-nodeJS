var Post = require('../models/post')

module.exports = function(app) {

    //POST(create) new post
    app.post('/posts', function (req, res) {
        //create instance of Post model
        var post = new Post(req.body)

        //save instance of post model to DB
        post.save(function (err, post) {
            console.log(post)
            return res.redirect('/posts/' + post._id)
        })
    })

    //GET new post form
    app.get('/posts/new', function (req, res) {
        res.render('posts-new', {currentUser: currentUser})
    })

    app.get('/posts/id, function (req, res) {
        var currentUser = req.user
    })
    //GET specific post
    Post.findById(req.params.id)
      .populate({
        path: 'comments',
        model: 'comment',
        populate: {
          path: 'author',
          model: 'user'
        }
      })
      // .populate('comments.author')
      // .populate({path:"comment.author", model: 'user'})
      .populate('author')

}
