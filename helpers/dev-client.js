const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const devConfig = require('../webpack.config')
const compiler = webpack(devConfig)

console.clear = () => {
  process.stdout.write('\x1Bc')
}

console.clear()
fs.createReadStream(path.resolve(__dirname, '../src/client/index.html'))
  .pipe(fs.createWriteStream(path.resolve(__dirname, '../dist/index.html')))

console.log(chalk.gray('Compiling files into a bundle...'))

compiler.watch({}, (err, stats) => {
  if (err) {
    console.clear()
    console.log(chalk.styles.red.open + err + chalk.styles.red.close)
  }

  if (stats.hasErrors()) {
    console.clear()
    console.log(`${chalk.bgRed.black('Error:')} ${chalk.red('Failed to compile due to errors')}`)
    stats.toJson('errors-only').errors.forEach(err => {
      console.log(chalk.styles.red.open + err + chalk.styles.red.close)
    })
  } else {
    const seconds = (stats.endTime - stats.startTime)
    const time = seconds < 1000 ? `${seconds}ms` : `${seconds / 1000}s`
    console.clear()
    console.log(`${chalk.bgGreen.black('Success:')} ${chalk.green(`Compiled successfully in ${time}`)}`)
  }
})
