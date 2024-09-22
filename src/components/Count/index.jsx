import React, { Component } from 'react'

export default class Count extends Component {
  
  state = { carName: '保時捷' }

  // 加法
  increment = () => {
    const { value } = this.selectedNumber
  }
  // 減法
  decrement = () => {
    const { value } = this.selectedNumber;
  }
  // 奇數加
  incrementIfOdd = () => {
    const { value } = this.selectedNumber;
  }
  // 非同步加
  incrementAsync = () => {
    const { value } = this.selectedNumber;
  }

  render() {
    return (
      <div>
        <h1>當前總和為：???</h1>
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
