const path = require('path');

module.exports = {
  devtool:'inline-source-map',
  entry: path.join(__dirname, '../src/index.ts'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts','.tsx','js']
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, '../dist'),
    host: 'localhost',
    compress: true,
    port: 1717
  }
}