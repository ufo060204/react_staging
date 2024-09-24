import React, { Component } from 'react'

export default class Count extends Component {
  
  state = { carName: '保時捷' }

  // 加法
  increment = () => {
    const { value } = this.selectedNumber
    this.props.add(value * 1);
  }
  // 減法
  decrement = () => {
    const { value } = this.selectedNumber;
    this.props.jian(value * 1);
  }
  // 奇數加
  incrementIfOdd = () => {
    const { value } = this.selectedNumber;
    if (this.props.count % 2 !== 0) {
      this.props.add(value * 1);
    }
  }
  // 非同步加
  incrementAsync = () => {
    const { value } = this.selectedNumber;
    this.props.addAsync(value * 1, 500);
  }

  render() {
    // console.log('UI組件接收到的props是', this.props);
    return (
      <div>
        <h1>當前總和為：{this.props.count}</h1>
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
