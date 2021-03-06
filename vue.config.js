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
  publicPath: '/nav/',
  pwa: {
    name: '书签',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  }
}