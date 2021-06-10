
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
   mode: 'development',
   entry: path.resolve(__dirname, 'src', 'main.js'),
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.s[ac]ss/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
         },
         {
            test: /.jpg$/,
            loader: 'file-loader'
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'index.html')
      }),
      new MiniCssExtractPlugin({
         filename: '[name].bundle.css'
      }),

   ]

};