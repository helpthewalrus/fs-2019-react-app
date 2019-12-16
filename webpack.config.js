const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        include: path.join(__dirname, "src", "assets"),
        loader: "url-loader"
      }
    ]
  },

  devtool: "cheap-module-eavl-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  }
};
