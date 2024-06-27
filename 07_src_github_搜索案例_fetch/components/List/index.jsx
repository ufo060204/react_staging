import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  // 初始化狀態
  state = {
    users:[], // users 初始化狀態為數組
    isFirst:true, // 是否為第一次打開頁面
    isLoading:false, // 標識是否處於加載中
    err:'' // 存儲請求相關錯誤訊息
  }

  componentDidMount() {
    this.token =PubSub.subscribe('updateListState', (_, stateObj) => {
      console.log('List組件收到數據:', stateObj)
      this.setState(stateObj)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  
  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
      <div className='row'>
        {
          isFirst ? <h2>歡迎使用，請輸入關鍵字，隨後點擊搜索</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((userObj)=> {
            return (
              <div key={userObj.id} className="card" >
                <a href={userObj.html_url} target="blank" rel="noreferrer">
                  <img alt="avatar" src={userObj.avatar_url} />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
