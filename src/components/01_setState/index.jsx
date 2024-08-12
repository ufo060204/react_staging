import React, { Component } from 'react'

export default class Demo extends Component {

  state = { count: 0 }

  add = () => {
    // 1. 得到原本的 count
    const { count } = this.state
    // 2. 更新狀態
    this.setState({ count: count + 1 })
  }

  render() {
    return (
    <div>
      <h1>當前加總為：{this.state.count}</h1>
      <button onClick={this.add}>點我 + 1</button>
    </div>
    )  
  }
}
