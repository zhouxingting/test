const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const theme = require('./theme.json');
const CleanWebpackPlugin = require('clean-webpack-plugin')

console.log(process.env.NODE_ENV)

module.exports = {
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    'promise-polyfill',
    './js/reactTest.js',
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
            presets: ['@babel/preset-env', "@babel/preset-react"],
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
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'dist/images/[name].[hash:8].[ext]',
        },
      },
      {
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
        loader: require.resolve('file-loader'),
        options: {
          name: '[path][name].[hash:8].[ext]',
          outputPath: 'dist/media/'
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          }
        }, 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          }, 'postcss-loader', {
            loader: 'less-loader', options: {
              sourceMap: true,
              modifyVars:theme,
              javascriptEnabled: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }, // compiles Less to CSS
          }
        ]
      }
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
    // new CleanWebpackPlugin('dist/*.*', {
    //   root: __dirname,
    //   verbose: true,
    //   dry: false
    // }),
    // 暴露出去的全局变量，自动加载，而不必模块import或require它们无处不在。
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      filename: 'index.html', 
      template: './test.html', //本地自定义模板
      inject: true | 'body',
      hash: true//清除缓存
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 安装库后自动重新构建打包文件
    new WatchMissingNodeModulesPlugin(path.resolve(__dirname, 'node_modules')),
  ],
};