const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rimraf = require("rimraf");

rimraf('./dist/', function (err) { // 删除当前目录下的dist
  console.log(err);
});

module.exports = {
  entry: {
    index: './js/alert.js',
    vendor: ['jquery']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].chunk.js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
    devtoolModuleFilenameTemplate: (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
  },
  devtool: 'false',
  mode: 'production',
  resolve: {
    // 模块引入时不用带扩展
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    // 创建别名
    alias: {
      'react-native': 'react-native-web',
      js: path.resolve(__dirname, 'js'), // 模块绝对路径
    },
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    }
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limite: 8192
          }
        }]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        vendor: [
          "jquery"
        ],
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html', 
      template: './test.html', //本地自定义模板
      inject: true | 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    })
  ],
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  // Turn off performance processing because we utilize
  // our own hints via the FileSizeReporter
  performance: false,
};