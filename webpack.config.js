module.exports = {
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^pg-native$|^cloudfare:sockets$/
    })
  ]
};
