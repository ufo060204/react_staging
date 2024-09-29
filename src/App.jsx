import React, { Component } from 'react'
// 引入 Count 容器組件
import Count from './containers/Count'
// 引入 Person 容器組件
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
      </div>
    )
  }
}
