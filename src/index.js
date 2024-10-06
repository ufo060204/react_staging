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
import { Provider } from 'react-redux';

// 創建根節點
// const root = createRoot(document.getElementById("root"));

// 定義渲染函數
// const render = () => {
//   root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// };

// 監測 redux 中狀態的改變，若 redux 的狀態發生了改變，則重新渲染 App 組件
// store.subscribe(() => {
  // 新的寫法

  /* 
  備註：rect-redux 可以自動監測 redux 中狀態的改變，並且自動重新渲染組件，所以不用寫 store.subscribe()
  */
  const root = createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      {/* 此處需使用 Provider包裹 App 組件，目的是讓 App 組件所有的後代組件都可以接收到 store */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
// });
// // 舊寫法
// // 渲染 App 到頁面
// // ReactDOM.render(
// //   <Routes>
// //     <App />
// //   </Routes>,
// //   document.getElementById('root')
// // );


// 為了避免代碼中多次調用了 createRoot() 的錯誤，使用下面的寫法
// 初始渲染
// render();

// 監測 redux 中狀態的改變，若 redux 的狀態發生了改變，則重新渲染 App 組件
// store.subscribe(render);