const webpack = require('webpack');

module.exports = {
  entry: [
    './client/app.js'
  ],
  output: {
    path: `${__dirname}/client/public/bundle/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};