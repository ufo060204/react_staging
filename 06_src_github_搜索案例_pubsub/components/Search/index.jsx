import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // console.log('search 組件發布消息了 ')
    // PubSub.publish('updateListState',{name: 'Tom', age: 18} )
  
    // 獲取用戶輸入(連續解構賦值+重命名)
    const {keyWordElement: {value:keyword}} = this
    // 發送網路請求前通知 List 更新狀態
    PubSub.publish('updateListState',{isFirst:false, isLoading:true})
    // 發送網路請求
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(
        response => {
          // 發送網路請求成功後通知 List 更新狀態
          PubSub.publish('updateListState',{isLoading:false, users:response.data.items})
        },
        error => {
          //請求失敗後通知 App 更新狀態
          PubSub.publish('updateListState',{isLoading:false, err:error.message})
        }
      )
  }


  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索 Github 用戶</h3>
          <div>
            <input type="text" ref={c => this.keyWordElement = c} placeholder="輸入關鍵詞點擊搜索"/>&nbsp;
            <button onClick={this.search}>搜索</button>
            </div>        
        </section>
      </div>
    )
  }
}
