// 創建"外殼"組件 App
// 這樣的引入方式代表 "react" 當中有多個匯出
import React, { Component } from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";

// 創建並匯出 App 元件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
