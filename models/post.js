var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Comment = require('./comment');


var PostSchema = new Schema({
  title             : { type: String, required: true },
  summary         : { type: String, required: true },
  subreddit  : {type: String, required: true },
  url : String,
  comments  : [Comment.schema],
  author  :  String,
  upVotes : [Schema.Types.ObjectId],
  downVotes : [Schema.Types.ObjectId],
  voteScore : {type : Number , default : 0}
});

module.exports = mongoose.model('Post', PostSchema);
