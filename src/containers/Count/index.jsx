// 引入 Count 的 UI 組件
import CountUI from '../../components/Count'
// 引入 connect 用於連接 UI 組件與 redux
import { connect } from 'react-redux'
// 引入 action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// 通過 connect()() 創建並匯出一個 Count 的容器組件
// const CountContainer = connect()(CountUI);
// export default CountContainer
export default connect(
  state => ({ count: state }),

  // mapDispatchToProps 的一般寫法
  /* dispatch => ({
    // 通知 redux 執行加法
    add: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  }) */
  
  // mapDispatchToProps 的簡化寫法
  {
    add: createIncrementAction,
    jian: createDecrementAction,
    addAsync: createIncrementAsyncAction
  }
  
)(CountUI); // 簡化寫法