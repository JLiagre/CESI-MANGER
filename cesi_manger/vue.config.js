module.exports = {
  transpileDependencies: ['vuetify'],
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://[::1]:40253/',
        secure: false,
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        logLevel: 'debug',
      },
    },
  },
}
