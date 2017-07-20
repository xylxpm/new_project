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
        let {state} = this.props.navigation;
        this.state = {
            title: state.title,
            userNameStatus:true,
            passWordStatus:true,
            verifyStatus:true,
            loginMode:true,
            numberColor:'#4ECBFC',
            normalColor:'black',
            verifyText : '获取验证码',
            phoneNumber:'',
            verifyNumber:'',
            info:{
                name:'测试',
            }
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

    _renderNumber = () => {
        return (
            <View style={{marginTop:0}}>
                <RTTextInput placeholder="手机号"
                             status={this.state.userNameStatus}
                             onChangeText={(text) =>this._usernameJudge(text)}
                             ref={(input) => this._usernameInput = input}
                             textInputRef='textInput'
                             iconName='md-person'
                             defaultValue={this.state.phoneNumber}
                />
                <View style={{flexDirection:'row'}}>
                    <RTTextInput placeholder="验证码"
                                 status={this.state.verifyStatus}
                                 onChangeText={(text) => this._verifyJudge(text)}
                                 iconName='md-lock'
                                 defaultValue={this.state.verifyNumber}
                                 keyboardType={'numeric'}
                    />
                    <TouchableOpacity style={styles.verifyView}
                                      activeOpacity={0.7}
                                      onPress={this._sendVerify}
                    >
                        <Text>{this.state.verifyText}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginTop:10}} onPress={()=>{
                        this._passwordInput.refs.textInput.clear();
                    }}/>
                <TouchableOpacity style={styles.loginStyle} onPress={this._login}>
                    <Text style={{fontSize:16}}>
                        登录
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }

    _renderLogin = () => {
        return (
            <View style={styles.loginViewStyle}>
                <TouchableOpacity style={styles.quickLoginStyle}
                                  activeOpacity={0.9}
                                  onPress={()=>this.setState({
                                      loginMode:true,
                                      numberColor:'#4ECBFC',
                                      normalColor:'black',
                                  })}
                >
                    <Text style={[styles.quickText,{color:this.state.numberColor}]}>快捷登录</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.normalLoginStyle}
                                  activeOpacity={0.9}
                                  onPress={()=>this.setState({
                                      loginMode:false,
                                      numberColor:'black',
                                      normalColor:'#4ECBFC',
                                  })}
                >
                    <Text style={[styles.normalText,{color:this.state.normalColor}]}>普通登录</Text>
                </TouchableOpacity>

            </View>
        )
    }

    render() {
        let {state} = this.props.navigation;
        return (
            <View style={styles.container}>
                {this._renderLogin()}
                {this.state.loginMode ?
                    this._renderNumber()
                    : this._renderAccount()
                }
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


Login.PropTypes = {
    navigate: React.PropTypes.object,
    closeClick: React.PropTypes.object,
};
