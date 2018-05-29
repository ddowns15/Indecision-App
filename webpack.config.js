const path = require('path');

module.exports = {
  entry: './src/app.js',  //where do we start
  output: {
    path: path.join(__dirname, 'public'), //cant use shortcut; must do full path
    filename: 'bundle.js'
  }
};
