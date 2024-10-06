import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";

class Count extends Component {
  // 加法
  increment = () => {
    const { value } = this.selectedNumber;
    this.props.increment(value * 1);
  };
  // 減法
  decrement = () => {
    const { value } = this.selectedNumber;
    this.props.decrement(value * 1);
  };
  // 奇數加
  incrementIfOdd = () => {
    const { value } = this.selectedNumber;
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };
  // 非同步加
  incrementAsync = () => {
    const { value } = this.selectedNumber;
    this.props.incrementAsync(value * 1, 500);
  };

  render() {
    return (
      <>
        <h2>我是 Count 組件，下方組件總人數為：{this.props.personCount}</h2>
        <h4>當前總和為：{this.props.count}</h4>
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
      </>
    );
  }
}

export default connect(
  // 映射狀態
  (state) => ({ count: state.count, personCount: state.person.length }),
  // 映射操作狀態的方法
  {
    // add: increment,
    // reduce: decrement,
    // addAsync: incrementAsync,
    // 物件名稱和值相同可簡寫
    increment,
    decrement,
    incrementAsync,
  }
)(Count);