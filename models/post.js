import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  html: {
    required: true,
    type: String
  },
  tags: {
    type: [ Schema.Types.ObjectId ],
    default: []
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const Post = mongoose.model('Post', PostSchema)
export default Post
