const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//	.BundleAnalyzerPlugin
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");

const common = require("./webpack.common");

module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    main: path.join(__dirname, "../src", "index.js"),
  },
  module: {
    rules: [...common.module.rules],
  },
  resolve: common.resolve,
  plugins: [
    new CleanWebpackPlugin(),
    ...common.plugins,
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: {
        level: 9,
      },
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
        level: 10,
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
    /*	new BundleAnalyzerPlugin({
			analyzerMode: 'disabled',
			generateStatsFile: true,
			statsOptions: { source: false },
		}),
*/
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
          compress: {
            drop_console: true,
          },
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
    runtimeChunk: "single",
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[contenthash].js",
    publicPath: "/",
    pathinfo: false,
  },
  cache: true,
};
