const path = require("path");
const src = './src';

module.exports = {
  publicPath: process.env.VUE_APP_CDN || '/',
  runtimeCompiler: true,
  transpileDependencies: [],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, src),
        "@app": path.resolve(__dirname, `${src}/app`),
        "@modules": path.resolve(__dirname, `${src}/modules`),
        "@assets": path.resolve(__dirname, `${src}/assets`),
        "@components": path.resolve(__dirname, `${src}/components`),
        "@services": path.resolve(__dirname, `${src}/services`),
        "@mixin": path.resolve(__dirname, `${src}/mixin`),
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
}
