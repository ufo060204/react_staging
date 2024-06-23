import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// 用於紀錄頁面性能的分析工具

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // React.StrictMode 用於檢查 <App /> 中的寫法的問題
);

// ReactDOM.render(<App/>, document.getElementById('root'));

// reportWebVitals();
