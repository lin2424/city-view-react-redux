// 把所有的reducer单独放在一起，好管理好找
import {combineReducers} from "redux";
import {cityViewReducer} from "./cityViewReducer";


export default combineReducers(
    {cityViewReducer}
)