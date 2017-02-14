require('babel-register')
const Mocha = require('mocha')
const glob = require('glob-fs')({ gitignore: true })
const watch = require('watch')
const path = require('path')

const chokidar = require('chokidar')

const mocha = new Mocha({
  ui: 'bdd',
  reporter: 'list',
  fullTrace: true
})

const watchFiles = '../**/_tests/*.js'

console.log('Searching projects for files to test...')
const tests = glob.readdirSync(watchFiles)
tests.forEach(file => { mocha.addFile(file) })

console.log('Compiling files...')
console.log('Running tests...')
mocha.run()

const watcher = chokidar.watch(path.resolve(__dirname, '../**/*.js'), {
  ignored: /node_modules|tasks/
})
watcher.on('change', path => {
  purge()
  mocha.run()
})

function purge () {
  console.log('here')
  mocha.suite.suites = []
  mocha.files.forEach(file => {
    const filePath = path.resolve(file)
    delete require.cache[require.resolve(filePath)]
  })
}
