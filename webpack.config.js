const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');
const path    = require('path');

module.exports = {
  entry:  './app/assets/javascripts/application.js',
  output: {
    filename: 'application.js',
    path:     path.join(__dirname, 'public', 'javascripts'),
    publicPath: '/javascripts/'
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
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.(woff|woff2)$/,            loader: "url-loader?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
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
