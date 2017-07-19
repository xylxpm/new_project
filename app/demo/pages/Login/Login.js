/**
 * Created by xylxpm on 2017/7/18.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Platform,
    TextInput,
    Image,
    AlertIOS,
    StyleSheet,
    PixelRatio,
    Dimensions,
} from 'react-native';

import {connect} from 'react-redux';

import {logIn, skipLogin} from '../../actions/user';


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'myname',
            password:'123',
            btnFlag:true
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    static navigationOptions = ({navigation}) => ({
        header: null
    })

    componentDidMount() {
        console.log('componentDidMount');
       // this.props.userToken();
        const {routes} = this.props;
    }

    shouldComponentUpdate(nextProps, nextState){

        if(nextProps.isLoggedIn != this.props.isLoggedIn && nextProps.isLoggedIn === true){

            this.toMain();
            return false;
        }
        if(nextProps.status == 'doing'){
            //loggining
            return false;
        }
        if(nextProps.status == 'error' || nextProps.status == 'done'){
            return false;
        }

        return true;
    }
    toMain(){
        // const {router} = this.props;
        // router.toMain();
        this.props.navigation.navigate('Home')
    }

    handleLogin(){
        if(!this.state.username || !this.state.password){
            AlertIOS.alert(
                'username, password?'
            );
            return;
        }
        let opt = {
            'name': this.state.username,
            'password': this.state.password,
        };
        //this.props.dispatch(logIn(opt));
        this.props.logIn(opt);
    }

    handleRegister(){
        const {dispatch} = this.props;
        // dispatch(skipLogin());
        this.props.skipLogin();
    }

    render() {
        const {userToken} = this.props.userReducer;
        return (
            <View style={styles.loginMain}>

                <View style={styles.formStyle}>
                    <TextInput
                        ref="login_name"
                        placeholder='username'
                        style={styles.loginInput}
                        onChangeText={this.onChangeName}/>
                    <TextInput
                        ref="login_psw"
                        style={styles.loginInput}
                        secureTextEntry={true}
                        placeholder='password'
                        onChangeText={this.onChangePswd}/>

                </View>
                <View style={styles.btn}>
                    <View style={styles.btnWrap}>
                        <Text style={styles.loginBtn1} onPress={this.handleLogin}>登录</Text>
                    </View>
                    <View style={styles.btnWrap}>
                        <Text style={styles.loginBtn2} onPress={this.handleRegister}>游客</Text>
                    </View>
                </View>


            </View>



        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 18,
        marginTop: 10
    },
});

export default connect((state) => {
    const {userReducer} = state;
    const routes = state.nav.routes;
    return {
        userReducer,
        routes
    };
}, {skipLogin})(Login)
