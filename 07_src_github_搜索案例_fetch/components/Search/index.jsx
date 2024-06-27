import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {
  search = async () => {
    // console.log('search 組件發布消息了 ')
    // PubSub.publish('updateListState',{name: 'Tom', age: 18} )
  
    // 獲取用戶輸入(連續解構賦值+重命名)
    const {keyWordElement: {value:keyword}} = this
    // 發送網路請求前通知 List 更新狀態
    PubSub.publish('updateListState',{isFirst:false, isLoading:true})
    // 發送網路請求---使用 axios 發送
    //#region 
    /* axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(
        response => {
          // 發送網路請求成功後通知 List 更新狀態
          PubSub.publish('updateListState',{isLoading:false, users:response.data.items})
        },
        error => {
          //請求失敗後通知 App 更新狀態
          PubSub.publish('updateListState',{isLoading:false, err:error.message})
        }
      ) */
    //#endregion

    // 發送網路請求---使用 fetch 發送(未優化)
    /* fetch(`https://api.github.com/search/users?q=${keyword}`)
    .then(
      response => {
        console.log('聯繫伺服器成功了')
        return response.json()
      },
      error => {
        console.log('聯繫伺服器失敗了', error)
        return new Promise(() => {})
      }
    ).then(
      response => {console.log('獲取數據成功了', response)},
      error => {console.log('獲取數據失敗了', error)}
    )
  } */

    // 發送網路請求---使用 fetch 發送(優化, 統一處理錯誤)
    /* fetch(`https://api.github.com/search/users?q=${keyword}`)
    .then(
      response => {
        console.log('聯繫伺服器成功了')
        return response.json()
      },
    ).then(
      response => {console.log('獲取數據成功了', response)},
    ).catch(
      error => {console.log('請求出錯', error)}
    )
  } */
  // 發送網路請求---使用 fetch 發送(再優化)
  try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyword}`)
      const data = await response.json()
      console.log(data)
      PubSub.publish('updateListState',{isLoading:false, users:data.items})
    }
    catch (error) {
      console.log('請求出錯', error)
      PubSub.publish('updateListState',{isLoading:false, err:error.message})
    }
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
