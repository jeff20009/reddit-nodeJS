var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var PostSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    title: { type: String, required: true },
    body: { type: String, required: false },
    url: { type: String, required: true },
    subreddit: { type: String, required: true },
    comments: [{ type : Schema.Types.ObjectId, ref : 'Comment'}]
})

PostSchema.pre('save', function(next) {
    var now = new Date()
    this.updatedAt = now
    if ( !this.createdAt ) {
        this.createdAt = now
    }

    next()
})

module.exports = mongoose.model('Post', PostSchema)
