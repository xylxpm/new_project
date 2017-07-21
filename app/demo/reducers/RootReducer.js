/**
 * Created by xylxpm on 2017/7/19.
 */
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import nav from './StackReducer';


//取决于这里你加入了多少 reducer
const RootReducer = combineReducers({
    userReducer:userReducer,
    nav
});

export default RootReducer;