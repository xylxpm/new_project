/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 赞数量组件
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

export default class LikeCount extends Component{
    constructor(props){
        super(props);
        this.state={
            likes:0
        }
    }

    _click=()=>{
        this.setState({
            likes:this.state.likes + 1
        })
    }

    render(){
        const _icon = '\uD83D\uDC4D';
        return(
            <View style={styles.likeContainer}>
                <TouchableOpacity onPress={this._click} style={styles.likeButton}>
                    <Text style={styles.likeText}>{_icon + 'like'}</Text>
                </TouchableOpacity>
                <Text style={styles.likeText}>{this.state.likes+'个赞'}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    likeButton:{
        height: 40,
        width: 80,
        backgroundColor:'#FCE4EC',
        borderWidth:1,
        borderColor:"#333333",
        borderRadius:5,
        margin:8,
        padding:8
    },
    likeContainer:{
        alignItems: 'center',
        flexDirection:'row'
    },
    likeText:{
        flex:1,
        fontSize:18,
        alignSelf:'center'
    }
})