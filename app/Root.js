import { AppRegistry,View,Text ,} from 'react-native';
import React, { Component } from 'react';
import {Provider}from 'react-redux';
import configureStore from './demo/store/configureStore';

const store = configureStore();

import App from './demo/App';


export default class Root extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
            // !this.state.isLogin ?
            //     <Provider store={store}>
            //         <App />
            //     </Provider>
            //     :
            //     <View style={{marginTop:30}}>
            //         <Text onPress={()=>{
            //             this.setState({
            //                 isLogin:true
            //             })
            //         }}>
            //             点我登录
            //         </Text>
            //     </View>
        );
    }
};

AppRegistry.registerComponent('new_project', () => Root);


