// 引入 react 核心庫
import React from 'react';
// 引入 ReactDom 
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// 引入 BrowserRouter
import { BrowserRouter } from 'react-router-dom';
// 引入 App 元件
import App from './App';
import store from './redux/store';

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


store.subscribe(() => {
  // 新的寫法
  const root = createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
// 舊寫法
// 渲染 App 到頁面
// ReactDOM.render(
//   <Routes>
//     <App />
//   </Routes>,
//   document.getElementById('root')
// );