const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  devServer: {
    proxy: {
      '/': {
        target: 'https://localhost:7027/',
        ws: false,
        changeOrigin: true,
        // "pathRewrite":{'^/':''},
        // "secure":false
      }
    }
  }
});
