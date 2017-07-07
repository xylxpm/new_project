/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 时间组件(_setInterval这个方法抛出了异常，未解决)
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import moment from 'moment';
import Geolocation from 'Geolocation';

let lastTime = 0;
let currentTime = 0;

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        }
    }

    render() {
        console.log('render');
        let css = [];
        css.push(styles.progress);
        if (this.state.width) {
            css.push({width: this.state.width});
        }

        return (
            <View>
                <Text style={styles.btn} onPress={this.ok.bind(this)}>开始</Text>
                <Text style={styles.btn} onPress={this._setInterval.bind(this)}>setInterval</Text>
                <View style={css}></View>
            </View>
        )
    }

    _setInterval() {
        console.log('获取网页数据-当前时间为：' + moment().format('YYYY-MM-DD HH:mm:ss'));

        this.interval = setInterval(() => {
            fetch('http://www.baidu.com/')
                .then(function (data) {
                    return data.text();
                })
                .then((responseText) => {
                    console.log('返回了数据，时间为：' + moment().format('YYYY-MM-DD HH:mm:ss'));
                    console.log(responseText);

                })
                .catch((error) => {
                    console.warn(error);
                });
        }, 5000);
    }

    ok() {
        var _that = this;
        //5秒之后取当前手机的位置
        alert('开始要取位置：' + moment().format('YYYY-MM-DD HH:mm:ss'));
        this.timer = setTimeout(() => {
            Geolocation.getCurrentPosition((data) => {
                //为了看到效果 不要用console输出，同时记得计时器一定要全部清空，否则会有问题，而且一时看不出
                alert('5秒钟之后得到位置信息-' + JSON.stringify(data) + '当前时间为：' + moment().format('YYYY-MM-DD HH:mm:ss'));
            }, (e) => {
                alert(JSON.stringify(e));
            });
        }, 5000);


        this.immediate = setImmediate(
            () => {
                console.log('立刻执行,当前时间-' + moment().format('YYYY-MM-DD HH:mm:ss'));
            }
        );


        function doAnimated() {
            _that.setState({
                width: _that.state.width + 10
            });
            currentTime = new Date().getTime();

            console.log('当前的宽度：' + _that.state.width + '当前时间：' + currentTime + '---时间间隔：' + (currentTime - lastTime));
            console.log('当前的宽度：' + _that.state.width + '当前时间：' + moment().format('YYYY-MM-DD HH:mm:ss'));
            lastTime = currentTime;
            if (_that.state.width < 300) {
                requestAnimationFrame(doAnimated);
            }
        }


        requestAnimationFrame(doAnimated);

    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);

        this.immediate && clearImmediate(this.immediate);

        this.interval && clearInterval(this.interval);

        console.log('清空所有的计时器');
    }

}

export default class Timer extends Component {

    constructor(props) {
        super(props);
    }

    goBack = () => {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {

        return (
            <View style={{marginTop:30}}>
                <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <Info/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    btn: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        height: 35,
        backgroundColor: '#3BC1FF',
        color: '#fff',
        lineHeight: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    progress: {
        height: 10,
        width: 10,
        marginLeft: 10,
        backgroundColor: '#E72D00',
        marginTop: 10
    },
})