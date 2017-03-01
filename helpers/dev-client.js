require('dotenv').config()

const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

console.clear = () => {
  process.stdout.write('\x1Bc')
}

const devConfig = require('../webpack.config')
const compiler = webpack(devConfig)

compiler.plugin('compile', () => {
  console.clear()
  console.log(chalk.gray('Compiling files into a bundle...'))
})

compiler.plugin('failed', err => {
  console.log(`${chalk.bgRed.black('FAILED:')} ${chalk.red('Failed to compile due to errors')}`)
  console.log(chalk.styles.red.open + err + chalk.styles.red.close)
})

compiler.plugin('done', stats => {
  if (stats.hasErrors()) {
    const info = stats.toJson()
    console.log(`${chalk.bgRed.black('FAILED:')} ${chalk.red('Failed to compile due to errors')}`)
    info.errors.forEach(err => {
      console.log(chalk.styles.red.open + err + chalk.styles.red.close)
    })
  } else {
    console.log()
    console.log(chalk.gray('Starting development server...'))
    startServer(stats)
  }
})

// copy static html file
fs.createReadStream(path.resolve(__dirname, '../src/client/index.html'))
  .pipe(fs.createWriteStream(path.resolve(__dirname, '../dist/index.html')))

// Dev server
const server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, '../dist'),
  historyApiFallback: true,
  hot: true,
  quiet: false,
  noInfo: true,
  clientLogLevel: 'none',
  stats: 'none'
})

// TODO: Find way for better route matching...set up koa server perhaps?
function startServer (stats) {
  const PORT = process.env.CLIENT_PORT
  const HOST = process.env.HOST
  server.listen(PORT, HOST, () => {
    console.clear()

    const msg = `Listening for connections at http://${HOST}:${PORT}`
    console.log(`${chalk.bgGreen.black('SUCCESS:')} ${chalk.green(msg)}`)
    console.log()

    reporter(stats.toJson())
    console.log()
  })
}

function reporter (info) {
  const time = info.time > 1000 ? `${info.time / 1000}s` : `${info.time}ms`
  console.log(`Time: ${chalk.green(time)}`)
  const assets = info.assets.filter(a => !/\.map$/.test(a.name))

  console.log('Bundles:')
  assets.forEach(a => {
    const size = a.size < 1024 ? a.size : (Math.round((a.size * 100) / 1024) / 100)
    const sizeMsg = a.size < 1024 ? `(${size}b)` : `(${size}kb)`
    console.log(`  ${chalk.green(a.name)} ${chalk.gray(sizeMsg)}`)
  })
}
