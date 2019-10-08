const config = require('./webpack.config')
const options = {
  mode: 'production',
  entry: './src/index.ts',
}
module.exports = config(options)()