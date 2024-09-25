import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction } from '../../redux/count_action'

class Count extends Component {

  add = () => {
    // 通知 redux 加 1
    this.props.add(1);
  }

  render() {
    return (
      <div>
        <h2>當前總和為：{this.props.count}</h2>
        <button onClick={this.add}>點我加 1</button>
      </div>
    )
  }
}

export default connect(
  // 映射狀態
  state => ({ count: state }),
  // 映射操作狀態的方法
  {add: createIncrementAction}
)(Count)