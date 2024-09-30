import {ADD_PERSON} from '../constant';

// 初始化人的列表
const initState = [{id: '001', name: 'Tom', age: 18}];

export default function personReducer(preState=initState, action) {
  // console.log('personReducer@)');
  const {type, data} = action;
  switch (type) {
    case ADD_PERSON: // 若是添加一個人
      return [data, ...preState]; // 新的人在前，後面用展開運算符展開之前的人
    default:
      return preState;
  }
}