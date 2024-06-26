import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  // 初始化狀態
  state = {
    users:[], // users 初始化狀態為數組
    isFirst:true, // 是否為第一次打開頁面
    isLoading:false, // 標識是否處於加載中
    err:'' // 存儲請求相關錯誤訊息
  }

  // saveUsers = (users) => {
  //   // this.setState({users:users})
  //   // 可簡寫
  //   this.setState({users})
  // }

  // 更新 App state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  
  }

  render() {
    // const {users} = this.state
    return (
      <div>
        <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
      </div>
    )
  }
}
