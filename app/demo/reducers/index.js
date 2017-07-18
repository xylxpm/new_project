/**
 * Created by xylxpm on 2017/7/18.
 */
import { combineReducers } from 'redux';
import userReducer from './user';

export default combineReducers({
    userStore: userReducer,
});