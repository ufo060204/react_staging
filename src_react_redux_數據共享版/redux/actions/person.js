import {ADD_PERSON} from '../constant';

// 創建添加一個人的 action 動作對象
export const createAddPersonAction = (personObj) => ({type: ADD_PERSON, data: personObj});