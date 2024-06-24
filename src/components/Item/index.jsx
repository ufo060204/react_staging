import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  
  state = { mouse: false } // 標識鼠標移入移出

  // 鼠標移入、移出的回調
  handleMouse = (flag) => {
    return () => {
      // console.log(flag)
      this.setState({ mouse: flag })
    }
  }

  // 勾選、取消勾選某一個 todo 的回調
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 刪除一個 todo 的回調
  handleDelete = (id) => {
    // console.log(id)
    // 詢問是否刪除
    // 小坑, 必須加 window. 否則會報錯
    if(window.confirm('確定刪除嗎？')) {
      this.props.deleteTodo (id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : '#ffffff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* defaultChecked 用於設置默認值 是可以更改的, checked 是不可以更改的 */}
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>刪除</button>
      </li>
    )
  }
}
