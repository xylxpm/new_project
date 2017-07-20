/**
 * Created by xylxpm on 2017/7/18.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    AsyncStorage,
    Text,
    TouchableOpacity,

    Dimensions
} from 'react-native';

import RTTextInput from '../../baseComponents/RTTextInput';

let {height, width} = Dimensions.get('window');

export default class Login extends Component {

    static navigationOptions = ({navigation}) => ({
        header: null,
        tabBarVisible: false
    })

    constructor(props) {
        super(props);
        this.state = {
            loginMode: true,
        }
    }

    _renderAccount = () => {
        return (
            <View style={{marginTop:0}}>
                <RTTextInput placeholder="用户名"
                             status={this.state.userNameStatus}
                             ref={(input) => this._usernameInput = input}
                             textInputRef='textInput'
                             iconName='md-person'
                />

                <RTTextInput placeholder="密码"
                             status={this.state.passWordStatus}
                             ref={(input) => this._passwordInput = input}
                             textInputRef='textInput'
                             iconName='md-lock'
                />

                <Text style={styles.register} onPress={()=>{this.props.navigation.navigate('Register'); }}>注册</Text>

                <TouchableOpacity style={styles.loginStyle}>
                    <Text style={{fontSize:16}}>
                        登录
                    </Text>
                </TouchableOpacity>
            </View>
        )
    };


    //登录界面
    _renderLogin = () => {
        return (
            <View>
                <Text>~~~~~~~~~~~这里登录</Text>
                <Text onPress={()=>this.setState({   loginMode:false,  })}>去注册</Text>
                <Text onPress={() => this.props.navigation.goBack()}>关闭</Text>
            </View>
        )
    }

    //注册界面
    _renderRegister = () => {
        return (
            <View>
                <Text>~~~~~~~~~~~~注册界面</Text>
                <Text onPress={()=>this.setState({  loginMode:true,  })}>去登录</Text>
                <Text onPress={() => this.props.navigation.goBack()}>关闭</Text>
            </View>
        )
    }

    render() {
        let {state} = this.props.navigation;
        return (
            <View style={styles.container}>
                {this.state.loginMode ? this._renderLogin() : this._renderRegister()  }
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loginStyle: {
        marginTop: 20,
        width: width,
        height: 44,
        backgroundColor: '#4ECBFC',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginViewStyle: {
        flexDirection: 'row',
        height: 44,
        backgroundColor: '#f0f0f0',
        borderBottomColor: '#ededed',
        borderBottomWidth: 1,

    },
    quickLoginStyle: {
        width: width / 2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#4ECBFC',
        height: 30,

    },
    normalLoginStyle: {
        width: width / 2,
        alignSelf: 'center',
        alignItems: 'center'
    },
    quickText: {
        fontSize: 14
    },
    normalText: {
        fontSize: 14
    },
    verifyView: {
        backgroundColor: '#4ECBFC',
        height: 35,
        width: 80,
        position: 'absolute',
        right: 5,
        top: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    register: {
        marginTop: 10,
        marginLeft: 10,
    }

});

