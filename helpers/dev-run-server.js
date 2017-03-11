const webpackMiddleware = require('koa-webpack')
const Webpack = require('webpack')
const config = require('../webpack.config.js')

require('babel-register')
const { start } = require('../src/server')

const compiler = Webpack(config)

start(
  webpackMiddleware({
    compiler,
    dev: {
      publicPath: '/statics'
    }
  })
)

start()
