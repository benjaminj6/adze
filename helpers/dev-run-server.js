require('babel-register')
const { start } = require('../src/server')

// import webpackMiddleware from 'koa-webpack'
// import Webpack from 'webpack'
// import config from '~/../webpack.config'
const webpackMiddleware = require('koa-webpack')
const Webpack = require('webpack')
const config = require('../webpack.config.js')

const compiler = Webpack(config)

start(
  webpackMiddleware({
    compiler,
    dev: {
      publicPath: '/statics'
    }
  })
)
