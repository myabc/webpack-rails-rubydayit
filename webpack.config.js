const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');
const path    = require('path');

module.exports = {
  entry:  './app/assets/javascripts/application.js',
  output: {
    filename: 'application.js',
    path:     path.join(__dirname, 'public', 'javascripts')
  },
  module: {
    loaders: [
      {
        test:     /\.js$/,
        exclude:  /node_modules/,
        loader:   'babel-loader',
        query:    {
          presets: ['es2015']
        }
      },
      {
        test:     /\.scss$/,
        loader:   ExtractTextPlugin.extract({loader: "css-loader!sass-loader"})
      },
      {
        test:     require.resolve("jquery"),
        loader:   "expose-loader?$!expose-loader?jQuery"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../stylesheets/application.css"),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: [ path.resolve(__dirname, "./node_modules/materialize-css/sass") ]
        }
      }
    })
  ]
}
