/**
 * swiper组件
 * https://github.com/leecade/react-native-swiper
 * swiper组件，和web的轮播图组件功能一样，这个可以作为引导页面
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';


export default class Swpiers extends Component {

    constructor(props) {
        super(props);
    }

    goBack=()=>{
        const {navigator} =this.props;
        if(navigator){
            navigator.pop();
        }
    }

    render() {
        return (
            <View>
                <Text onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>

                <Swiper style={styles.wrapper} horizontal={false}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});