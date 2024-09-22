// 引入 Count 的 UI 組件
import CountUI from '../../components/Count'
// 引入 connect 用於連接 UI 組件與 redux
import { connect } from 'react-redux'

// 通過 connect()() 創建並匯出一個 Count 的容器組件
// const CountContainer = connect()(CountUI);
// export default CountContainer
export default connect()(CountUI) // 簡化寫法