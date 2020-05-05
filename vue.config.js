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

    // 配置 workbox 插件
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // InjectManifest 模式下 swSrc 是必填的。
      swSrc: 'dev/sw.js',
      // ...其它 Workbox 选项...
    }
  }
}