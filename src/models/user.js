import mongoose, { Schema } from 'mongoose'
mongoose.Promise = global.Promise

import { isEmail } from 'validator'

const UserSchema = new Schema({
  email: {
    required: true,
    unique: true,
    type: String,
    validate: {
      validator: isEmail,
      message: 'Email is not a valid email address'
    }
  },
  password: {
    required: true,
    type: String
  }
})

const User = mongoose.model('User', UserSchema)
export default User
