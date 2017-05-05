var getConfig = require('hjs-webpack')

var config = getConfig({
  in: './src/index.js',
  out: './dist',
  clearBeforeBuild: true
})

config.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    }
  ]
}

module.exports = config
