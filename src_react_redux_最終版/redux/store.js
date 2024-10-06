/* 
該文件專門用於匯出一個 store 對象, 整個應用只有一個 store 對象
*/

// 引入 createStore 方法, 專門用於創建 redux 中最為核心的 store 對象
import { createStore, applyMiddleware} from "redux";
// 引入 匯總之後的 reducer
import reducer from "./reducers";
// 匯入 redux-thunk 用於支持異步 action
import { thunk } from "redux-thunk";

// 匯出 store
export default createStore(reducer, applyMiddleware(thunk));