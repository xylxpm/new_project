/**
 * Created by xylxpm on 2017/7/18.
 */


import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/rootReducer';

let middlewares = [];

middlewares.push(logger);
middlewares.push(thunk);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState){
    return createStoreWithMiddleware(RootReducer,initialState);
}
