## 2.3 React腿架和手架佈置代理總結

- ***方法 1：***

 package.json 中的附加位置（最終名稱是應用程式的名稱）：

 ```json
 “代理”：“http://localhost:5000”
 ````

 搜尋目標地塊變更主地塊+列表列表

 ````js
 url:'http://localhost:3000/students',
 方法：'獲取'
 ````

 描述：

 1.優點：容易投放，前端搜尋資源，之前可以做什麼？
 2. 缺點：不可能放置多個代理。
 3.工作方法：上述方法放置代理，使用Ajax 3000個不存在的資源，取得會議5000個資源（有3000個資源，第一個是前端資源，localhost:3000是公共路由）

- ***方法 2：***

 Anso http-proxy-middleware，
 編輯 setupProxy.js 放置特定代理詳細資料：

 ````js
 const {createProxyMiddleware} = require('http-proxy-middleware')

 module.exports = 函數（應用）{
 應用程式.使用（
 建立代理中間件（
 '/api1', // 只需要/api開啟請求，申請後即可使用終端
 {
 目標：'http://localhost:5000',
 changeOrigin:true, // 請求存取統一運營商的主機的主機名
 // false(預設值)：從自己的原地購買服裝裝備 localhost:3000
 // true: 衣服箱為5000（購買地點），衣服箱可用
 pathRewrite:{'^/api1':''} // 重複path路徑（目的：去掉api前面）
 }),
 建立代理中間件（
 '/api2',
 {
 目標：'http://localhost:5001',
 更改來源：true，
 路徑重寫：{'^/api2':''}
 })
 ）
 }
 ````