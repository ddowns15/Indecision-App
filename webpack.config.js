const path = require('path');

module.exports = {
  entry: './src/app.js',  //where do we start
  output: {
    path: path.join(__dirname, 'public'), //cant use shortcut; must do full path
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, //regex check if the file getting loading ends with .js
      exclude: /node_modules/ //when you see a node file (not ours) dont include it
    }, {
      test: /\.s?css$/, //regex for any file ending in .css or .scss
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
