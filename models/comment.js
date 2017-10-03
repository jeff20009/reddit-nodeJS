var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  var CommentSchema = new Schema({
    content : { type: String, required: true },
    author  : String,
    replies : [this]  
  });

  module.exports = mongoose.model('Comment', CommentSchema);
