const path = require('path');

module.exports = {
  entry: path.join(__dirname, './index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
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
    filename: 'App.js',
    path: path.join(__dirname, './'),
  },
  watchOptions: {
    ignored: ['./node_modules', './App.js'],
  }
}
