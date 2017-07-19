/**
 * 对每个传过来的action进行switch，每个action都需要返回一个state对象
 */

import * as TYPES from '../actions/ActionTypes';

const initialState = {
    isLoggedIn: false,
    user: {},
    status: null
};

export default function userReducer(state = initialState, action) {

    switch (action.type){
        case TYPES.LOGGED_DOING:
            return {
                ...state,
                status:'doing'
            };
        case TYPES.LOGGED_IN:
            return{
                ...state,
                isLoggedIn: true,
                user: action.user,
                status: 'done'
            };
        case TYPES.LOGGED_OUT:
            return{
                ...state,
                isLoggedIn: false,
                user: {},
                status: null
            };

        case TYPES.LOGGED_ERROR:
            return{
                ...state,
                isLoggedIn: false,
                user: {},
                status: null
            };
        default:
            return state;
    }

}
