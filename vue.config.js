module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'network': '@/network',
        'components': '@/components',
        'assets': '@/assets'
      }
    }
  },
  publicPath: '/nav/'
}