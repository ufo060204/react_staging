import {ADD_PERSON} from '../constants';

// 創建添加一個人的 action 對象
export const createAddPersonAction = (personObj) => ({type: ADD_PERSON, data: personObj});