require('dotenv').config({ path: '.env-test' })
require('babel-register')
require('babel-polyfill')

const { User } = require('../src/server/models')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect(process.env.DB_URL)
  .then(() => {
    return User.findOne({ email: 'test@test.com' })
      .then(user => user)
  })
  .then(user => {
    if (!user) {
      console.log('no user! adding one now...')
      return User.hashPassword('test')
        .then(password => {
          return User.create({
            email: 'test@test.com',
            password: password
          })
        })
    } else {
      console.log('using the existing user')
    }
  })
  .then(() => {
    return mongoose.disconnect()
  })
  .catch(err => {
    console.log(err)
    mongoose.disconnect()
  })
