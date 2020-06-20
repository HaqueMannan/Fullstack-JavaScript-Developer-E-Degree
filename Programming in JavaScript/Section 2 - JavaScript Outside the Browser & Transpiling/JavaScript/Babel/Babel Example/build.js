var webpack = require('webpack');
var path = require('path');

webpack(
   {
      entry: './index.js',
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         ]
      },
      output: {
         path: path.resolve('./'),
         filename: 'bundle.js'
      }
   }, function (error, stats) {
      if (error) {
         console.error(error);
      } else {
         console.log(stats.toString());
      }
   }
);