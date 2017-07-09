/**
 * 入口
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

import {StackNavigator} from 'react-navigation';


var imglist = [
    'https://www.baidu.com/img/bd_logo1.png',
    'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/xiaoman2016_24.png',
    'http://res.smzdm.com/pc/v1.0/dist/img/embed/logo.png'
];
class HomeScreen extends Component {
    static navigationOptions = {
        title: '主页',
    };

    render() {
        return (
            <View  style={[styles.flex]}>
                <MyImage imgs={imglist}> </MyImage>
            </View>
        );
    }
}

class MyImage extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            imgs:this.props.imgs,
        };
    }

    _up() {
        var _count=this.state.count;
        _count--;
        if(_count>=0){
            this.setState({
                count:_count,
            });
        }else{
            // alert(_count)
        }
    }

    _down() {
        var _count=this.state.count;
        _count++;
        if(_count<this.state.imgs.length){
            this.setState({
                count:_count,
            });
        }else{
            // alert(this.state.imgs[this.state.count])
        }
    }

    render() {
        return (
            <View style={[styles.flex,styles.margin25]}>
                <View style={styles.image}>
                    <Image style={styles.img}
                           resizeMode='contain'
                           source={{uri:this.state.imgs[this.state.count]}} />

                </View>
                <View style={styles.btnss}>
                    <TouchableOpacity onPress={this._up.bind(this)}><View style={styles.btn}><Text style={{color:'#23BEFE'}}>上一张</Text></View></TouchableOpacity>
                    <TouchableOpacity onPress={this._down.bind(this)}><View style={styles.btn}><Text style={{color:'#23BEFE'}}>下一张</Text></View></TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    margin25: {
        marginTop: 25,
    },
    btnss: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    btn: {
        width: 60,
        height: 30,
        borderColor: '#23BEFE',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,

    },
    img: {
        height: 200,
        width: 200
    },
    image: {
        borderColor: '#23BEFE',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        marginLeft:10,
        marginRight:10
    }
});


const Root = StackNavigator({
    Home: {screen: HomeScreen}
});


module.exports = Root;
