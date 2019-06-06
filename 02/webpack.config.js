const path = require('path');

module.exports = {
  entry: path.join(__dirname, './index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/Users/aku2nnya/Desktop/Coding/GitHub/hamburger_menu/02/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './'),
  },
}