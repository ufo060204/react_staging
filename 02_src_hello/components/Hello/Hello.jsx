import React, {Component} from "react";
import hello from './Hello.module.css';
// css 模組化 中間加上 .module 就可將 css 模組化再用 自定義的 class 名稱接收

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1 className={hello.title}>hello React!!!</h1>
      </div>
    );
  }
}