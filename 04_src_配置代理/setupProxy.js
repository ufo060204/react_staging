// const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
		// 下面的寫法會導致錯誤
    // app.use(
    //   proxy("/api1", {
    //     // 遇見/api1前綴的請求，就會觸發該代理配置
    //     target: "http://localhost:5000", // 請求轉發給誰
    //     changeOrigin: true, // 控制服務器收到的請求頭中 Host 的值
    //     pathRewrite: { "^/api1": "" }, // 重寫請求路徑(必須)
    //   })
    //   proxy('/api2', {  // 遇見/api2前綴的請求，就會觸發該代理配置
    //       target: 'http://localhost:5001',  // 請求轉發給誰
    //       changeOrigin: true,  // 控制服務器收到的請求頭中 Host 的值
    //       pathRewrite: {'^/api2': ''}  // 重寫請求路徑(必須)
    //   })
    // );
		app.use(
      createProxyMiddleware(
        "/api1", // 只要/api 开头的请求，才转发给后端服务器
        {
          target: "http://localhost:5000",
          changeOrigin: false, // 控制服务器接收到的请求头中host字段的值,使host显示与目标服务器域名和端口号一致，用于欺骗目标服务器，防止因对方设置而获取不到数据
          pathRewrite: { "^/api1": "" }, // 重写路径（目的：去掉api前缀）
        }
      ),

      createProxyMiddleware("/api2", {
        target: "http://localhost:5001",
        changeOrigin: true,
        pathRewrite: { "^/api2": "" },
      })
    );
}