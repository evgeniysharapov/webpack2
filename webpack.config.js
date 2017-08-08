const webpack = require('webpack'),
      path = require('path');

let config = {
  context: path.join(__dirname,'src'), // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'), // `dist` is the destination
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'), // `__dirname` is root of the project
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      }
    ]
  },
//  resolve: {
//    root: [ __dirname ]
//  },
  devtool: 'eval-source-map'

};

module.exports = config;
