var path = require('path');

module.exports = {
   entry: './index.js',
   // mode: 'development',
   output: {
      path: path.resolve('./'),
      filename: 'bundle.js'
   }
};