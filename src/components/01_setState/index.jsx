import React, { Component } from 'react'

export default class SetState extends Component {

  state = { count: 0 }

  add = () => {
    // 物件式的 setState
    // // 1. 得到原本的 count
    // const { count } = this.state
    // // 2. 更新狀態
    // this.setState({ count: count + 1 }, () => {
    //   console.log('setState 回調函數：', this.state.count)
    // })
    // // console.log('12 行輸出', this.state.count)

    // 函數式的 setState
    // this.setState((state, props) => {
    //   console.log(state, props)
    //   return { count: state.count + 1 }
    // })
    // 可簡寫為：
    // this.setState(state =>  ({ count: state.count + 1 }))

    this.setState({ count: this.state.count + 1 })
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
