/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * NetInfo组件，网络通讯（需要给android的配置文件加上<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />，文件位置android--app--src---main---androidManifest.xml。添加之后需要重新编译）
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    NetInfo,
    ToastAndroid,
    View,
} from 'react-native';

export default class NetInfoRN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: null,
            connectionInfo: null
        }
    }


    goBack = () => {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener('isConnected', this._handleConnectivityChange);
        NetInfo.addEventListener('statueChange', this._handleNetStatusChange);
        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                this.setState({
                    isConnected: isConnected
                })
            }
        );
        NetInfo.fetch().done(
            (connectionInfo) => {
                this.setState({
                    connectionInfo: connectionInfo
                })
            }
        )
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('isConnected', this._handleConnectivityChange);
        NetInfo.removeEventListener('statueChange', this._handleNetStatusChange);
    }

    _handleConnectivityChange = (isConnected) => {
        ToastAndroid.show((isConnected ? 'online' : 'offline'), ToastAndroid.SHORT);
    }
    _handleNetStatusChange = (status) => {
        ToastAndroid.show('当前网络状态' + status, ToastAndroid.SHORT);
    }

    goPostNet1() {
        ToastAndroid.show('post方式访问-1', ToastAndroid.SHORT);
        let url = 'http://www.5iqunzi.com/wenjiaosuo/admin/privilege.php';
        let map = {method: 'POST'};
        let privateHeader = {
            'Private-header1': 'value1',
            'Private-header2': 'value2',
            'Content-Type': 'text/plain',
            'User-Agent': 'testAgent',
        }
        map.body = JSON.stringify({
            'username': '13667377378',
            'password': 'dfy889',
            'act': 'signin',
        })
        map.follow = 10;
        map.timeout = 8000;
        map.size = 0;

        fetch(url, map).then(
            (response) => {
                return response.text()
            }
        ).then(
            (responseText) => {
                alert('服务器返回：' + responseText);
            }
        ).catch(
            (err) => {
                alert(err)
            }
        )
    }

    goPostNet2() {
        ToastAndroid.show('POST访问网络-方法2', ToastAndroid.SHORT);
        let url = 'http://www.5iqunzi.com/wenjiaosuo/admin/privilege.php';
        let data = {
            'username': '13667377378',
            'password': 'dfy889',
            'act': 'signin',
        };
        this.postRequest(url, data, (resule) => {
            alert('服务器返回：' + resule);
        })
    }

    goGetNet() {
        ToastAndroid.show('Get方式访问', ToastAndroid.SHORT);
        let url = 'http://www.reactnative.vip';
        fetch(url).then(
            (response) => {
                console.log('第一个then');
                return response.text();
            }
        ).then(
            (responseText) => {
                alert('服务器返回：' + responseText);
            }
        ).catch(
            (err) => {
                alert(err)
            }
        )
    }

    postRequest(url, data, callback) {
        let map={
            method:'POST',
            header:{
                'Private-header1': 'value1',
                'Private-header2': 'value2',
                'Content-Type': 'text/plain',
                'User-Agent': 'testAgent',
            },
            body:JSON.stringify(data),
            follow:20,
            timeout:8000,
            size:0
        }
        fetch(url,map).then((response)=>response.text()).then((responseText)=>{callback(responseText)}).catch((err)=>{alert(err)});

    }

    render() {
        return (
            <View >
                <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <Text style={styles.welcome}>
                    当前网络状态：{this.state.isConnected ? '在线' : '离线'}
                </Text>
                <Text style={styles.welcome}>
                    当前网络类型：{this.state.connectionInfo}
                </Text>
                <Text style={styles.welcome}>
                    当前网络是否计费（安卓）：{NetInfo.isConnectionExpensive === true ? '需要' : '不需要'}
                </Text>
                <Text style={styles.btn} onPress={this.goPostNet1.bind(this)}>POST访问-1</Text>
                <Text style={styles.btn} onPress={this.goPostNet2.bind(this)}>POST访问-2</Text>
                <Text style={styles.btn} onPress={this.goGetNet.bind(this)}>Get访问</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f5fcff"
    },
    btn: {
        backgroundColor: '#ff7200',
        height: 34,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 30,
        marginTop: 20,
        fontSize: 18
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }

})