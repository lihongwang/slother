const webpack = require("webpack");
const pkg = require("../package.json");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: `${pkg.name}.js`,
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [{ test: /\.js|jsx$/, loaders: ["babel"] }]
  }
};
