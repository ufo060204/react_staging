import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span></span>
        </label>
        <button 
          className="btn btn-danger" 
        >删除</button>
      </li>
    )
  }
}
