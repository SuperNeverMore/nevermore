const camelCase = require('camelcase');
const path = require('path');
const webpack = require('webpack');
const pkg = require(path.join(process.cwd(), 'package.json'));
const shouldMininimize = process.argv.indexOf('--min') !== -1;
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const standardConfig = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
      filename: '[name].bundle.js',
      // 输出的打包文件

      path: path.resolve(__dirname, 'dist'),

      publicPath: '/'
  },
  module: {
      noParse: /node_modules\/knockout\/build\/output\/*.js/,
      rules: [{
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
      }, {
          test: /\.css$/,
          use: ExtractTextPlugin.extract(['css-loader'])
      }, {
          test: /\.less$/i,
          use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader', 'less-loader']
          })
      }, {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader: 'file-loader'
      }],
  },
  devServer: {
    port: 8000,
    contentBase: 'src/',
    inline: true
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash:true,
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};

if (shouldMininimize) {
  Object.assign(standardConfig.entry, {
    'dist/index.min.js': './src/index.js'
  });
}

module.exports = standardConfig;
