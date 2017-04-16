require('dotenv').config()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const { start } = require('../prod')

start()
