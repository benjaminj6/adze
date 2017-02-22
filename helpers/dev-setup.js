require('babel-register')
require('dotenv').config()

const nodemon = require('nodemon')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const path = require('path')
const chalk = require('chalk')

const { User } = require(path.resolve(__dirname, '../src/models'))

chalk.enabled = true

mongoose.connect(process.env.DB_URL)
  .then(() => {
    return User.findOne({
      email: process.env.ADMIN_EMAIL
    }).then(user => user)
  })
  .then(user => {
    if (!user) {
      log('gray', 'db', 'No admin user found. Creating one from your config files...', 'mongoose')

      return User.create({
        email: process.env.ADMIN_EMAIL,
        password: process.env.PASSWORD
      }).then(user => {
        log('gray', 'db', 'Successfully created an admin user based off of your config files!', 'mongoose')
        return
      })
    } else {
      log('gray', 'db', 'Using the admin from your previous configuration...', 'mongoose')
    }
  })
  .then(() => {
    return mongoose.disconnect()
  })
  .then(() => {
    nodemon({
      colours: true,
      verbose: false,
      restartable: 'rs',
      ignore: [
        '.git',
        'node_modules/**'
      ],
      script: path.resolve(__dirname, './dev-startup')
    })

    nodemon
      .on('log', ({ type, message: msg }) => {
        let color = 'gray'
        if (type === 'status') {
          type = 'state'
          color = 'yellow'
        }

        log(color, type, msg)
      })
  })
  .catch(err => {
    mongoose.disconnect().then(() => {
      log('red', 'err', 'There was an error starting up.')
      console.error(err)
      process.exit(1)
    })
  })

process.on('exit', () => {
  log('gray', 'exit', 'shuttind down...')
})

process.on('SIGINT', () => {
  log('gray', 'exit', 'shutting down...')
  process.exit(0)
})

function log (color, type, msg, topic) {
  type = `     ${type.toUpperCase()}`.slice(-5)
  console.log(`${new Date().toISOString().split('T')[1]} ${chalk[color](type)} ${topic || 'nodemon'}: ${chalk[color](msg)}`)
}
