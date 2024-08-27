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
import { INCREMENT, DECREMENT } from './constant'

// 簡寫
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });