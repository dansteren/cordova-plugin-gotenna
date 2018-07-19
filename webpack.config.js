var path = require('path');

module.exports = {
  mode: 'production',
  entry: './www/goTenna.ts',
  output: {
    path: path.resolve(__dirname, 'www/'),
    filename: 'goTenna.bundle.js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          typeCheck: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};
