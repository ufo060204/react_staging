import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

  state = {
    hasError: '', // 用於標識子組件是否產生錯誤
  }

  // 當子組件報錯時，會觸發 getDerivedStateFromError 調用，並攜帶錯誤信息
  static getDerivedStateFromError(error) {
    console.log('@@@', error)
    return { hasError: error };
  }

  componentDidCatch() {
    console.log('此處統計錯誤，反饋給伺服器，通知工程師修 bug')
  }

  render() {
    return (
      <div>
        <h2>我是 Parent 组件</h2>
        {this.state.hasError ? <h2>當前網路不穩定，請稍後再試</h2> : <Child />}
      </div>
    );
  }
}
