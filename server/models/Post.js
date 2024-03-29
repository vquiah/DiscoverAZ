const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        require: true,
      },
      cloudinaryId: {
        type: String,
        require: true,
      },
      likes: {
        type: Number,
        default: 0,
      },
      saved: {
        type: Number,
      },
      location: {
        type: String,
        require: true,
      },
      tag: {
        type: [String],
      },
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
}, {timestamps: true})

module.exports = mongoose.model('Post', PostSchema )