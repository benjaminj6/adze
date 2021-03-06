const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const jsonImporter = require('node-sass-json-importer')
const DotEnvPlugin = require('webpack-dotenv-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.css'
})

module.exports = {
  entry: './src/client',
  output: {
    path: path.resolve(__dirname, 'dist/statics'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          loader: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                importer: jsonImporter
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new DotEnvPlugin({
      sample: './.env',
      path: './.env'
    })
  ]
}
