import React, { Component } from 'react'
// 引入 store，用於獲取 redux 中保存的狀態
import store from '../../redux/store'
// 引入 actionCreators，專門用於創建 action 對象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

export default class Count extends Component {
  
  state = { carName: '保時捷' }

  // 寫在 index.js 中可以一勞永逸
  // componentDidMount() {
  //   // 檢測 redux 中狀態的變化，只要變化，就調用 render
  //   store.subscribe(() => {
  //     console.log('訂閱')
  //     this.setState({})
  //   })
  // }

  // 加法
  increment = () => {
    const { value } = this.selectedNumber
    // 通知 redux 加 value
    store.dispatch(createIncrementAction(value * 1));
  }
  // 減法
  decrement = () => {
    const { value } = this.selectedNumber;
    store.dispatch(createDecrementAction(value * 1));
  }
  // 奇數加
  incrementIfOdd = () => {
    const { value } = this.selectedNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1));
    };
  }
  // 非同步加
  incrementAsync = () => {
    const { value } = this.selectedNumber;
    // setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(value * 1, 500));
    // }, 500);
  }

  render() {
    return (
      <div>
        <h1>當前總和為：{store.getState()}</h1>
        <select ref={(c) => (this.selectedNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>當前總和為奇數再加</button>&nbsp;
        <button onClick={this.incrementAsync}>非同步加</button>&nbsp;
      </div>
    );
  }
}
