import React, { Component } from 'react'
// 引入 Count 容器組件
import Count from './containers/Count'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
      </div>
    )
  }
}
