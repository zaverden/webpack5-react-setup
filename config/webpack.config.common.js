// @ts-check
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

function _a(...args) {
  return args;
}

/** @type {import('webpack').Configuration} */
const commonConfig = {
  entry: {
    app: "./src/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[contenthash].bundle.js",
    publicPath: "/clicker/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              _a("@babel/preset-react", { runtime: "automatic" }),
            ],
            plugins: ["react-refresh/babel"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        loader: require.resolve("file-loader"),
        options: {
          limit: 10000,
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      template: "public/index.html",
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = commonConfig;
