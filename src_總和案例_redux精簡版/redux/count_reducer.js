/* 
  1.該文件是用於創建一個 count 的 reducer，reducer 本質上是一個函數
  2.reducer 函數會接到兩個參數，分別為：之前的狀態(preState)、動作對象(action)
*/
const initState = 0 // 初始化狀態
export default function countReducer (preState = initState, action) {
  // console.log(preState, action)
  // 從 action 對象中獲取 type、data
  const { type, data } = action
  // 根據 type 決定如何加工數據
  switch (type) {
    case 'increment':
      // console.log('@')
      return preState + data // 如果是加
    case 'decrement':
      return preState - data // 如果是減
    default:
      return preState // 如果是初始化
  }
}