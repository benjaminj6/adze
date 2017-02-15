
const Mocha = require('mocha')
const chokidar = require('chokidar')
const glob = require('glob-fs')({ gitignore: true })
const path = require('path')

const mocha = new Mocha({
  ui: 'bdd',
  reporter: 'list',
  fullTrace: true
})

const watchFiles = '../**/_tests/*.js'

console.log('Searching projects for files to test...')
setupTests()

// Transpile
console.log('Compiling files...')
require('babel-register')
console.log('Files compiled! Running tests now...')
runTests()

if (process.argv.find(arg => /-w|--watch/.test(arg))) {
  const watcher = chokidar.watch(path.resolve(__dirname, '../**/*.js'), {
    ignored: /node_modules|tasks/
  })

  watcher.on('change', path => {
    console.log('Preparing to run tests again...')
    purge()
    console.log('Running tests...')
    runTests()
  })
}

function setupTests () {
  const tests = glob.readdirSync(watchFiles)
  tests.forEach(file => { mocha.addFile(file) })
}

function runTests () {
  mocha.run()
}

function purge () {
  mocha.suite.suites = []
  mocha.files.forEach(file => {
    const filePath = path.resolve(file)
    delete require.cache[require.resolve(filePath)]
  })
}

module.exports = {
  watchFiles,
  setupTests,
  runTests
}
