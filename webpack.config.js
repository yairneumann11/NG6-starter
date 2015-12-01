const path              = require('path');

module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/app\/lib/, /node_modules/],
        loader: 'babel'
      },
      {test: /\.html$/, loader: 'raw'},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /\.css$/, loader: 'style!css'},
      {
        test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.woff(2)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|otf|png)$/,
        loader: 'file'
      }
    ]
  }
};
