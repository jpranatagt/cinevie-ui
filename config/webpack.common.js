const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const HtmlTemplate = require('./html.template')

module.exports = {
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        exclude: /.*opt_blur\.jpg$/,
        test: /\.(avif|webp|jpg|jpeg|png|mp4|mov|ttf|woff|woff2)$/,
        use: ['file-loader'],
      },
      {
        test: /.*opt_blur\.jpg$/,
        use: ['url-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../src/components/'),
      '@pages': path.resolve(__dirname, '../src/pages/'),
      '@statics': path.resolve(__dirname, '../src/statics/'),
      '@styles': path.resolve(__dirname, '../src/styles/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@contents': path.resolve(__dirname, '../src/contents/'),
    },
    extensions: ['*', '.js', '.jsx', '.mdx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: HtmlTemplate,
    }),
    /* new CopyWebpackPlugin({
      patterns: [
        {
          from: '*',
          context: path.resolve(__dirname, '../src/statics/public'),
        },
      ],
    }), */
  ],
}
