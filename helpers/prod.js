require('dotenv').config()
const { start } = require('../prod')
const { User } = require('../prod/models')

mongoose.connect(process.env.DB_URL)
  .then(() => {
    return User.findOne({
      email: process.env.ADMIN_EMAIL
    }).then(user => user)
  })
  .then(user => {
    if (!user) {
      return User.hashPassword(process.env.PASSWORD)
        .then(password => {
          return User.create({
            email: process.env.ADMIN_EMAIL,
            password
          })
        })
    }
    .then(() => {
      return mongoose.disconnect()
    })
    .then(() => {
      start()
    })
  })
