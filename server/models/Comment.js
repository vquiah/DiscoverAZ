const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
      comment: {
        type: String
      },
      likes: {
          type: Number
      },
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      postID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
}, {timestamps: true})

module.exports = mongoose.model('Comment', CommentSchema )