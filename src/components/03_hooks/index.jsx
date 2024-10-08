// import React, { Component } from "react";

/* 
點擊加總案例
*/

// 1. 使用類式組件
// export default class Demo extends Component {
//   state = { count: 0 };

//   add = () => {
//     // 1. 得到原本的 count
//     const { count } = this.state;
//     // 2. 更新狀態
//     this.setState({ count: count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>當前加總為：{this.state.count}</h1>
//         <button onClick={this.add}>點我 + 1</button>
//       </div>
//     );
//   }
// }

// 2. 使用函式組件
// import React, { useState } from "react";

// export default function Demo() {
//   console.log("Demo 被調用了");

//   // React 做了處理，第一次調用緩存了 count，即使 Demo 重複被調用，也不會重新初始化 count

//   // 1. 使用 useState 定義狀態
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState('Tom');
//   // console.log(count);
//   // console.log(setCount);
//   // 2. 更新狀態
//   function add() {
//     // setCount('MAX');
//     // setCount(count + 1); // 第一種寫法
//     setCount((count) => count + 1); // 第二種寫法
//   }
//   function changeName() {
//     setName('Jerry');
//   }
//   return (
//     <div>
//       <h1>當前加總為：{count}</h1>
//       <h2>我的名字是：{name}</h2>
//       <button onClick={add}>點我 + 1</button>
//       <button onClick={changeName}>點我改名</button>
//     </div>
//   );
// }


/* 
每隔一秒加總案例
*/
// 使用類式組件
// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// export default class Demo extends Component {
//   state = { count: 0 };

//   add = () => {
//     this.setState((state) => ({ count: state.count + 1 }));
//   };

//   unmount = () => {
//     // 卸載組件
//     ReactDOM.unmountComponentAtNode(document.getElementById("root"));
//   };

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((state) => ({ count: state.count + 1 }));
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         <h1>當前加總為：{this.state.count}</h1>
//         <button onClick={this.add}>點我 + 1</button>
//         <button onClick={this.unmount}>卸載元件</button>
//       </div>
//     );
//   }
// }

// 使用函式組件
// import React, { useState, useEffect } from "react";
// // import ReactDOM from "react-dom";

// export default function Demo({ onUnmount }) {
//   console.log("Demo 被調用了");

//   useEffect(() => {
//     console.log("useEffect 被調用了");
//     let timer = setInterval(() => {
//       setCount((count) => count + 1);
//     }, 1000)
//     return () => {
//       console.log("清除定時器");
//       clearInterval(timer);
//     }
//   }, []); 
//   // 第二個參數是空，代表誰也不監聽，只在第一次渲染後執行
//   // 不寫代表全部監聽，只要有變化就執行


//   // 1. 使用 useState 定義狀態
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState('Tom');
//   // console.log(count);
//   // console.log(setCount);
//   // 2. 更新狀態
//   function add() {
//     // setCount('MAX');
//     // setCount(count + 1); // 第一種寫法
//     setCount((count) => count + 1); // 第二種寫法
//   }
//   function changeName() {
//     setName('Jerry');
//   }
//   // function unmount() {
//   //   // 卸載組件
//   //   // 此寫法已經被棄用
//   //   // ReactDOM.unmountComponentAtNode(document.getElementById("root"));
//   // }
//   return (
//     <div>
//       <h1>當前加總為：{count}</h1>
//       <h2>我的名字是：{name}</h2>
//       <button onClick={add}>點我 + 1</button>
//       <button onClick={changeName}>點我改名</button>
//       <button onClick={onUnmount}>卸載元件</button>
//     </div>
//   );
// }

/* 
葉面上有 input 框，點擊可以提示輸入的值
*/
// 使用類式組件
// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// export default class Demo extends Component {
//   state = { count: 0 };

//   myRef = React.createRef();

//   add = () => {
//     this.setState((state) => ({ count: state.count + 1 }));
//   };

//   unmount = () => {
//     // 卸載組件
//     ReactDOM.unmountComponentAtNode(document.getElementById("root"));
//   };

//   show = () => {
//     alert(this.myRef.current.value);
//   };

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((state) => ({ count: state.count + 1 }));
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef} />
//         <h1>當前加總為：{this.state.count}</h1>
//         <button onClick={this.add}>點我 + 1</button>
//         <button onClick={this.unmount}>卸載元件</button>
//         <button onClick={this.show}>點擊提示數據</button>
//       </div>
//     );
//   }
// }

// 使用函式組件
import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

export default function Demo({ onUnmount }) {
  console.log("Demo 被調用了");

  useEffect(() => {
    console.log("useEffect 被調用了");
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000)
    return () => {
      console.log("清除定時器");
      clearInterval(timer);
    }
  }, []); 
  // 第二個參數是空，代表誰也不監聽，只在第一次渲染後執行
  // 不寫代表全部監聽，只要有變化就執行


  // 1. 使用 useState 定義狀態
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Tom');
  const myRef = React.useRef();
  // console.log(count);
  // console.log(setCount);
  // 2. 更新狀態
  function add() {
    // setCount('MAX');
    // setCount(count + 1); // 第一種寫法
    setCount((count) => count + 1); // 第二種寫法
  }
  function changeName() {
    setName('Jerry');
  }
  // 提示輸入的值
  function show() {
    alert(myRef.current.value);
  }
  return (
    <div>
      <input type="text" ref={myRef} />
      <h1>當前加總為：{count}</h1>
      <h2>我的名字是：{name}</h2>
      <button onClick={add}>點我 + 1</button>
      <button onClick={changeName}>點我改名</button>
      <button onClick={onUnmount}>卸載元件</button>
      <button onClick={show}>點我提示數據</button>
    </div>
  );
}