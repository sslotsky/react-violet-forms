var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  devtool: "eval-source-map",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /(node_modules|react-violet-forms\/lib)/
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    })
  ]
}

