import bcrypt from 'bcryptjs'
import mongoose, { Schema } from 'mongoose'
mongoose.Promise = global.Promise

import { isEmail } from 'validator'
import { createError } from '~/utils'

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

UserSchema.statics.hashPassword = async password => {
  try {
    const hash = await bcrypt.hash(password, 10)
    return hash
  } catch (err) {
    throw createError(500, 'Encryption failed')
  }
}

UserSchema.methods.validatePassword = async function (password) {
  const correct = this.password

  try {
    const isSame = await bcrypt.compare(password, correct)

    if (!isSame) {
      throw createError(401, 'Passwords do not match')
    }

    return isSame
  } catch (err) {
    err.status = err.status || 500
    throw err
  }
}

const User = mongoose.model('User', UserSchema)
export default User

