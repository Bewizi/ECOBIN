const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  webpack.chainWebpack((config) => {
    config.devServer.hotOnly(true).hot(true);
  });

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  return webpack.resolveConfig();
};
