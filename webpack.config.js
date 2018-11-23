const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
  mode: "development",
  target: 'electron-renderer',
  entry: {
    'main':'./main/main.js',
    'renderer/bundle': './renderer/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: "./renderer/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css",
      chunkFilename: "css/[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            presets: [
              "@babel/preset-react"
            ]
        },
        
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../dist"
            }
          },
          "css-loader"
        ]
      },
      // iconv-lite の webpack 併用時エラーに伴う workaround
      // https://github.com/ashtuchkin/iconv-lite/issues/204
      {
        test: /node_modules[\/\\](iconv-lite)[\/\\].+/,
        resolve: {
          aliasFields: ['main']
        }
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  devtool: 'inline-source-map'
};

if ( process.env.NODE_ENV === "production") {
  config.mode = "production";
}

module.exports = config;