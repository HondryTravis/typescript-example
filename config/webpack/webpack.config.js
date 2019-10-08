const path = require('path')
/**
 * configuration
 * @param { options.entry }
 * @param { options.mode }
 * @param { options.outdir }
 * @param {*} options
 *
 */
const config = function (options) {
  const { mode, entry } = options;
  const context = path.resolve(__dirname, '../../');
  const devtool = 'inline-source-map';
  const output = {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js'
  }
  const module = {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, "../../src")
        ]
      }
    ]
  }
  const resolve = {
    extensions: ['.tsx', '.ts', '.js']
  }
  return function (service = false) {
    const devServer = {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
    }
    return {
      context,
      mode,
      devtool,
      entry,
      output,
      module,
      resolve,
      devServer: service === true ?  devServer: {}
    }
  }
}
module.exports = config