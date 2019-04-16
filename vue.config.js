
module.exports = {
  lintOnSave: false, // 保存时检查格式，使用eslint
    // crossorigin: 'anonymous', // htmlWebpackPlugin
    publicPath: process.env.NODE_ENV === 'production'? './': './',
    outputDir:'dist',
    indexPath:'index.html',
    filenameHashing: false, //打包后文件名哈希
    css: { // 对组件中css的配置
      modules: true
    },
    devServer: { // 对开发服务的设置
      // Various Dev Server settings
      hotOnly: false,
      port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
      open: true, // 自动调用默认浏览器打开
      https: false // 是否使用https, https使用node的一个内部默认的ca证书
    }
}
