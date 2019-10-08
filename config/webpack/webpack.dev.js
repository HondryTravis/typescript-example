const config = require('./webpack.config')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const options = {
  mode: 'development',
  entry: './src/index.ts',
}
const dev = config(options)()
const extend = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
     // chunks:['index']
    }),
  ]
}
module.exports = merge(dev, extend)

