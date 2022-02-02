const MiniCssExtractplugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js",
  mode: "development",
  plugins: [
    new MiniCssExtractplugin({
      filename: "css/style.css",
    }),
  ],
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "assets"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractplugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
