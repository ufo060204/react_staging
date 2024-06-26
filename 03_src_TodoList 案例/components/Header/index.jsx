import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

  // 對接收的 props 進行：類型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  // 鍵盤事件的回調
  handleKeyUp = (event) => {
    // 結構賦值獲取 keyCode, target
    const { keyCode, target } = event
    // 判斷是否為 ENTER 鍵
    if (keyCode !== 13) return
    // 判斷輸入的內容是否為空
    if (target.value.trim() === '') {
      alert('輸入的內容不能為空')
      return
    }
    // 準備好一個 todo 對象
    const todoObj = { id: nanoid(), name: target.value, done: false }
    // 將 todoObj 傳遞給 App
    this.props.addTodo(todoObj)
    // 清空輸入
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入你的任務名稱，按 ENTER 確認" />
      </div>
    )
  }
}
