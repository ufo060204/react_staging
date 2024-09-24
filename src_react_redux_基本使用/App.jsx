import React, { Component } from 'react'
// 引入 Count 容器組件
import Count from './containers/Count'
// 引入 store
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 給容器組件傳遞 store */}
        <Count store={store} />
      </div>
    )
  }
}
