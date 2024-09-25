// 引入 Count 的 UI 組件
import CountUI from '../../components/Count'
// 引入 connect 用於連接 UI 組件與 redux
import { connect } from 'react-redux'
// 引入 action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

/*
  1. mapStateToProps 函式返回的是一個對象
  2. 返回的對象中的 key 就作為傳遞給 UI 組件的 props 的 key，value 就作為傳遞給 UI 組件的 props 的 value
  3. mapStateToProps 用於傳遞狀態
 */
function mapStateToProps(state) {
  return { count: state };
}

/*
  1. mapDispatchToProps 函式返回的是一個對象
  2. 返回的對象中的 key 就作為傳遞給 UI 組件的 props 的 key，value 就作為傳遞給 UI 組件的 props 的 value
  3. mapDispatchToProps 用於傳遞操作狀態的方法
 */
function mapDispatchToProps(dispatch) {
  return {
    // 通知 redux 執行加法
    add: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  };
}
// 通過 connect()() 創建並匯出一個 Count 的容器組件
// const CountContainer = connect()(CountUI);
// export default CountContainer
export default connect(mapStateToProps, mapDispatchToProps)(CountUI); // 簡化寫法