import {ADD_PERSON} from '../constant';

// 初始化人的列表
const initState = [{id: '001', name: 'Tom', age: 18}];

export default function personReducer(preState=initState, action) {
  // console.log('personReducer@)');
  const {type, data} = action;
  switch (type) {
    case ADD_PERSON: // 若是添加一個人
      /* 
      redux 回進行淺比較，若是數組的地址沒有改變，則不會重新渲染
      下面的寫法畫面不會重新渲染，因為數組的地址沒有改變，都是同一個數組 preState
      // 此處不可以這樣寫，這樣會導致 perState 被改寫了，personReducer 就不是純函數了
      preState.unshift(data); // 將新的人添加到數組的最前面
      console.log(preState)
      return preState;
      */
      // 所以要用展開拷貝的方式來添加新的人
      return [data, ...preState]; // 新的人在前，後面用展開運算符展開之前的人
    default:
      return preState;
  }
}