const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

console.log(process.env.NODE_ENV)

module.exports = {
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    './js/alert.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].chunk.js',
    chunkFilename: 'js/[name].chunk.js',
    devtoolModuleFilenameTemplate: info =>
            path
              .relative('js', info.absoluteResourcePath)
              .replace(/\\/g, '/')
  },
  resolve: {
    // 模块引入时不用带扩展
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    // 创建别名
    alias: {
      'react-native': 'react-native-web',
      js: path.resolve(__dirname, 'js'), // 模块绝对路径
    },
  },
  devtool: 'source-map',
  mode: 'production',
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
        NODE_ENV: JSON.stringify('development')
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
      title: 'Hot Module Replacement',
      filename: 'index.html', 
      template: './test.html', //本地自定义模板
      inject: true | 'body'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 安装库后自动重新构建打包文件
    new WatchMissingNodeModulesPlugin(path.resolve(__dirname, 'node_modules')),
  ],
};