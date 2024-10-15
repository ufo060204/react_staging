import React, { Component } from 'react'
import './index.css'

// 1. 創建 Context 對象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class ContextA extends Component {

  state = { userName: 'Tom', age: 18 }

  render() {
    const { userName, age } = this.state
    return (
      <div className='parent'>
        <h3>我是 A 組件</h3>
        <h4>我的用戶名是：{userName}</h4>
        {/* 2. 通過 Provider 提供數據 */}
        {/* <Provider value={{userName: userName, age: age}}> */}
        {/* 簡寫 */}
        <Provider value={{userName, age}}>
          <ContextB />
        </Provider>
      </div>
    );
  }
}

class ContextB extends Component {
  render() {
    console.log("ContextB", this.context);
    return (
      <div className="child">
        <h3>我是 B 組件</h3>
        <h4>我從 A 組件接收到的戶名是：???</h4>
        <ContextC />
      </div>
    );
  }
}

// 類式組件讀取 context 數據的方式
// class ContextC extends Component {
//   // 3. 設置靜態屬性，聲明接收 context 數據
//   static contextType = MyContext
//   render() {
//     console.log('ContextC', this.context)
//     const { userName, age } = this.context
//     return (
//       <div className='grand'>
//         <h3>我是 C 組件</h3>
//         <h4>我從 A 組件接收到的戶名是：{userName}，年齡是：{age}歲</h4>
//       </div>
//     );
//   }
// }

// 函數式組件讀取 context 數據的方式
function ContextC() {
  return (
    <div className="grand">
      <h3>我是 C 組件</h3>
      <h4>
        我從 A 組件接收到的戶名是：
        <Consumer>
          {/* {
            value => {
              console.log('value', value)
              return `${value.userName}，年齡是：${value.age}歲`
            }
          } */}
          {/* 可簡寫為：  */}
          {value => `${value.userName}，年齡是：${value.age}歲`}
        </Consumer>
      </h4>
    </div>
  );
}
