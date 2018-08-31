const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[hash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-object-rest-spread',
            ],
          },
        },
      },
      {
        test: /.(png|jpg|jp(e)?g|svg|ico)(\?[a-z0-9]+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        },
      },
      {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/img/logo.ico',
      to: 'images/',
    }]),
    new WebpackPwaManifest({
      name: 'WebMadeira',
      short_name: 'WebMadeira',
      description: 'A non-profit event built by-the-community, for-the-community.',
      background_color: '#ed4042',
      crossorigin: null,
      icons: [
        {
          src: path.resolve('./src/assets/img/logo.ico'),
          sizes: [96, 128, 192, 256, 384, 512]
        },
      ]
    })
  ],
}
