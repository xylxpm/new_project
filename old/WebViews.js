/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * webview组件
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    ListView,
    TouchableHighlight,
    WebView,
    View
} from 'react-native';
import Dimensions from  'Dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class WebViews extends Component{

    constructor(props){
        super(props);
    }

    goBack=()=>{
        const {navigator} =this.props;
        if(navigator){
            navigator.pop();
        }
    }

    render() {
        return(
            <View style={styles.flex}>
                <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <WebView
                 style={{width:width,height:height}}
                 source={{uri:'http://www.baidu.com'}}
                >

                </WebView>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    flex:{
        flex:1
    }
});