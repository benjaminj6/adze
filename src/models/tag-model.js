import { isHexColor } from 'validator'
import mongoose, { Schema } from 'mongoose'
mongoose.Promise = global.Promise

const TagSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  color: {
    type: String,
    validate: {
      validator: isHexColor,
      message: 'Color must be a valid hexadecimal color'
    }
  }
})

const Tag = mongoose.model('Tag', TagSchema)
export default Tag
