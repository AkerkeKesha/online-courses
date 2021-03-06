const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.html$/,
        use: [{
                loader: 'html-loader',
                options: { minimize: true }
            }]
      },{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }]
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins:[
    new HtmlWebPackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        filename: 'index.html'
    }),
    new HtmlWebPackPlugin({
        template: path.join(__dirname, 'src/schedule.html'),
        filename: './schedule.html'
    }),
    new HtmlWebPackPlugin({
        template: path.join(__dirname, 'src/login.html'),
        filename: './login.html'
    }),
    new HtmlWebPackPlugin({
        template: path.join(__dirname, 'src/register.html'),
        filename: './register.html'
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
    })
  ]
};
