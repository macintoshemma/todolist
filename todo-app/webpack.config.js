const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/todo.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple todo',
      filename: 'index.html',
      template: 'src/html/base.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'}, 
          { loader: 'css-loader'}
        ],
      },
    ],
  },
  devServer: {
    hot: true,
  },
};
