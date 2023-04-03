const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpacked-cjs.js",
    libraryTarget: "commonjs",
  },
  mode: "development",
  devtool: false,
};
