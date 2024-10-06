/* 
該文件用於匯總所有的 reducer
*/
// 引入 combineReducers 用於彙總多個的 reducer
import { combineReducers } from "redux";
// 引入為 Count 組件服務的 reducer
import count from "./count";
// 引入為 Person 組件服務的 reducer
import person from "./person";

// 合併所有的 reducer 變為一個總的 reducer
export default combineReducers({
  // count: count,
  // persons: person,
  // 物件名稱和值相同可以簡寫
  count,
  person
});
