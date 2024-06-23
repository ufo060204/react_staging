import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="請輸入你的任務名稱，按 ENTER 確認" />
      </div>
    )
  }
}
