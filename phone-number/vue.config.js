const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  devServer: {
    // historyApiFallback: true,
    // login url 직접 접근 또는 login 화면에서 새로고침하면 404 (프러덕션이나 프록시 쓰면 발생..)
    // node는 connect-history-api-fallback 라이브러리
    // 또는 https://router.vuejs.org/guide/essentials/history-mode.html(version4)
    // 또는 https://v3.router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations(version3)
    // proxy: {
    //   "/": {
    //     target: "https://localhost:7027/",
    //     // ws: false,
    //     changeOrigin: true,
    //     // "pathRewrite":{'^/':''},
    //     // "secure":false
    //   },
    // },
  },
});
