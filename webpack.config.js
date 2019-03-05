const { join } = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: join(__dirname, 'src/main.jsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': join(__dirname, 'src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  module: {
    rules: [
      { test: /\.(jsx?)$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    port: 8888,
    contentBase: './dist',
    historyApiFallback: true
  }
}
