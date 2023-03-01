const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storySchema = new Schema({
  _id: String,
  timestamp: Date,
  txt: String,
  postImg: Array,
  by: {
    _id: String,
    fullname: String,
    userImg: String,
  },

  comments: Array,
  likedBy: Array,
  tags: Array,
})

const Story = mongoose.model('story', storySchema)
module.exports = Story
