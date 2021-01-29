const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    one: "./src/one.js",
    two: "./src/two.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name:"common",
    })
  ]
};
