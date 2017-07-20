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
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import {Sae, Makiko} from 'react-native-textinput-effects';


import colors from '../../baseComponents/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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


    //登录界面
    _renderLogin = () => {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../img/4.jpeg')}
                    style={styles.image}>

                    <Ionicons
                        onPress={() => this.props.navigation.goBack()}
                        name={'ios-close'}
                        size={40}
                        style={styles.closeicon }
                    />
                    <Text style={styles.titleword}>欢迎登陆</Text>


                    <Sae
                        label={'用户名'}
                        labelStyle={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        iconClass={FontAwesomeIcon}
                        iconName={'address-book'}
                        iconColor={'rgba(255, 255, 255, 0.6)'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        style={[styles.input]}
                    />
                    <Sae
                        label={'密码'}
                        labelStyle={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        iconClass={FontAwesomeIcon}
                        iconName={'pencil'}
                        iconColor={'rgba(255, 255, 255, 0.6)'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        password={true}
                        style={[styles.input]}
                    />




                    <Text style={styles.titleword2} onPress={()=>this.setState({   loginMode:false,  })}>没账号？去注册</Text>
                </Image>

            </View>
        )
    }

    //注册界面
    _renderRegister = () => {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../img/4.jpeg')}
                    style={styles.image}>
                    <Text style={styles.titleword}>欢迎注册</Text>
                    <Text onPress={()=>this.setState({  loginMode:true,  })}>有账号？去登录</Text>
                    <Text onPress={() => this.props.navigation.goBack()}>关闭</Text>
                </Image>
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
        // backgroundColor: '#ccc',
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
        // alignItems: 'center',
        // justifyContent: 'center',
        width: width,
        height: height,
    },
    titleword: {
        alignItems: 'center',
        color: colors.white,
        backgroundColor: 'transparent',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 50
    },
    titleword2: {
        color: colors.white,
        backgroundColor: 'transparent',
        fontSize: 16,
        textAlign: 'center'
    },
    closeicon: {
        color: colors.white,
        position: 'absolute',
        left: 25,
        top: 25,
        backgroundColor: 'transparent',
    },

    input: {
        height: 46,
        width: width-30,
        // color: 'rgba(255, 255, 255, 0.8)',
        // fontSize: 14,
        // padding: 15,
        // marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        // borderColor:'red',
        // borderWidth:1
        // backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },

    input2: {
        height: 46,
        width: width,
        color: colors.white,
        fontSize: 14,
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },


});

