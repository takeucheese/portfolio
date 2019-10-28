module.exports = {
  devServer: {
    port: 8888,
    disableHostCheck: true,
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/',
  outputDir: 'docs',
};