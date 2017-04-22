const camelCase = require('camelcase');
const path = require('path');
const webpack = require('webpack');
const pkg = require(path.join(process.cwd(), 'package.json'));
const shouldMininimize = process.argv.indexOf('--min') !== -1;
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const standardConfig = {
  devtool: 'source-map',
  entry: [
      'webpack/hot/only-dev-server',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './index.js'
  ],
  output: {
      filename: '[name].bundle.js',
      // 输出的打包文件

      path: path.resolve(__dirname, '../dist'),

      publicPath: '/'
  },
  context: path.resolve(__dirname, '../src'),
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
      }, {
          test: /\.html$/,
          loader: 'html-loader'
      }],
  },
  resolve:{
      extensions: [".js", ".json"],
      alias: {
          $: path.resolve(__dirname, './node_modules/jquery/dist/jquery.js')

      }
  },
    devServer: {
        hot: true, // 开启服务器的模块热替换(HMR)

        contentBase: path.resolve(__dirname, '../dist'),

        publicPath: '/' // 和上文 output 的“publicPath”值保持一致
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: 'index.html',
      // hash:true,
      // inject: true
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
