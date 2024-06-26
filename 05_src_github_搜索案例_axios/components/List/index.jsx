import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props
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
