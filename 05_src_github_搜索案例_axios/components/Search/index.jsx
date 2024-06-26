import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // 獲取用戶輸入(連續解構賦值+重命名)
    // console.log(this.keyWordElement.value)
    const {keyWordElement: {value:keyword}} = this
    // console.log(keyword)
    // 發送網路請求前通知 App 更新狀態
    this.props.updateAppState({isFirst:false, isLoading:true})
    // 發送網路請求
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(
        response => {
          // console.log('成功了', response.data)
          // 發送網路請求成功後通知 App 更新狀態
          this.props.updateAppState({isLoading:false, users:response.data.items})
        },
        error => {
          // console.log('失敗了', error)
          //請求失敗後通知 App 更新狀態
          this.props.updateAppState({isLoading:false, err:error.message})
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
