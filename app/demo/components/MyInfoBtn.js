/**
 * 用户btn
 */
import React, {Component} from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Button,
    Image,
    Text,
    View
} from 'react-native';

import MyMenuBtn from '../components/MyMenuBtn';

class MyInfoBtn extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <View style={styles.btnlists}>
                <MyMenuBtn title="我的课程" icon="ios-cart" ></MyMenuBtn>
                <MyMenuBtn title="我的实战" icon="ios-game-controller-b"></MyMenuBtn>
                <MyMenuBtn title="我的视频" icon="ios-locate"></MyMenuBtn>
                <MyMenuBtn title="我的手记" icon="ios-megaphone"></MyMenuBtn>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    btnlists: {
        marginTop: 10,
        height: 60,
        flexDirection: 'row'
    },
})




export default MyInfoBtn