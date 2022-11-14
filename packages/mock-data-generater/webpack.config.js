const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    libraryTarget: "commonjs2",
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["babel-loader"],
      },
    ],
  },
};
