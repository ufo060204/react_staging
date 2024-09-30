/* 
該文件專門為 Count 組件生成 action 對象
*/
// function createIncrementAction(data) {
//   // return { type: 'increment', data: data }
//   return { type: 'increment', data } // 簡寫
// }

// function createDecrementAction(data) {
//   return { type: 'decrement', data } // 簡寫
// }

// 寫成箭頭函數
// const createIncrementAction = (data) => {
//   // return { type: 'increment', data: data }
//   return { type: 'increment', data } // 簡寫
// }
import { INCREMENT, DECREMENT } from '../constant'
// import store from './store' 

// 簡寫
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });

// 所謂的非同步 action，就是指 action 的值為函數，非對象。非同步 action 中一般都會調用同步 action
// 非同步 action 不是必須要用的
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      // store.dispatch(createIncrementAction(data));
      // 不用 store 了，因為已經在 Count 組件中引入了 dispatch
      dispatch(createIncrementAction(data));
    }, time);
  };
};