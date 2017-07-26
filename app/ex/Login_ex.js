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
var cell_w = Dimensions.get('window').width;

import { connect } from 'react-redux';
import { logIn, skipLogin } from '../../actions/user';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'myname',
            password:'123',
            btnFlag:true
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePswd = this.onChangePswd.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }



    static navigationOptions = ({navigation}) => ({
        header:null
    })


    shouldComponentUpdate(nextProps, nextState){

        if(nextProps.isLoggedIn != this.props.isLoggedIn && nextProps.isLoggedIn === true){
            //will redirect

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
        const {router} = this.props;
        router.toMain();
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
        this.props.dispatch(logIn(opt));
    }

    handleRegister(){
        const {dispatch} = this.props;
        dispatch(skipLogin());
    }

    onChangeName(text){
        this.setState({'username': text});
    }

    onChangePswd(text){
        this.setState({'password': text});
    }


    render(){
        return (
            <View style={[styles.wrapper, styles.loginWrap]}>
                <Image source={require('../../img/icons/bg.png')} style={{resizeMode: 'stretch'}}>
                    <View style={styles.loginMain}>
                        <View style={styles.loginMainCon}>
                            <View style={styles.comCulture}>
                                <Text style={[styles.textCenter,{color:'#ccc'}]}>Welcome</Text>
                                <Text style={[styles.textCenter,{color:'#ccc'}]}>You are the best.</Text>
                            </View>
                            <View style={styles.formStyle}>
                                <View style={[styles.formInput,styles.formInputSplit]}>
                                    <Image source={require('../../img//icons/user.png')} style={{width:25,height:25,resizeMode: 'contain'}}/>
                                    <TextInput
                                        ref="login_name"
                                        placeholder='username'
                                        style={styles.loginInput}
                                        onChangeText={this.onChangeName} />
                                </View>
                                <View style={styles.formInput}>
                                    <Image source={require('../../img//icons/passicon.png')} style={{width:25,height:25,resizeMode: 'contain'}}/>
                                    <TextInput
                                        ref="login_psw"
                                        style={styles.loginInput}
                                        secureTextEntry={true}
                                        placeholder='password'
                                        onChangeText={this.onChangePswd} />
                                </View>
                                <View style={{alignItems: 'flex-end'}}>
                                    <View style={styles.forget}>
                                        <View>
                                            <Image source={require('../../img//icons/prompt.png')} style={{width:15,height:15,resizeMode: 'contain',marginRight:10}}/>
                                        </View>
                                        <View >
                                            <Text style={{color:'#62a2e0', backgroundColor: 'white'}}>forget password?</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.btn}>
                                <View style={styles.btnWrap}>
                                    <Text style={styles.loginBtn1} onPress={this.handleLogin}>Log in</Text>
                                </View>
                                <View style={styles.btnWrap}>
                                    <Text style={styles.loginBtn2} onPress={this.handleRegister}>Skip</Text>
                                </View>
                            </View>
                        </View>


                    </View>
                </Image>



            </View>
        );
    }
}


function select(store) {
    return {
        isLoggedIn: store.userStore.isLoggedIn,
        user: store.userStore.user,
        status: store.userStore.status
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    bgColor: {
        backgroundColor: '#F5FCFF'
    },
    mgt5: {
        marginTop: 5,
    },
    mgb5: {
        marginBottom: 5,
    },
    pdt5: {
        paddingTop: 5,
    },
    pdb5: {
        paddingBottom: 5,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
    textAli: {
        textAlign: 'right',
    },
    navbar: {
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 1/PixelRatio.get(),
    },
    justAlign: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    modal: {
        height: 100,
        width: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },

    viewList: {
        padding: 10,
        fontSize: 15,
    },

    flexRow: {
        flexDirection: 'row',
    },

    flex1: {
        flex: 1,
    },
    loginWrap: {
        backgroundColor: '#FCE9D4',
    },

    imgWrap: {
        flexDirection: 'row',
        flex: 1,
    },

    loginMain: {
        flex:1,
    },

    loginMainCon: {
        position: 'absolute',
        top: 110,
        left: (cell_w-320)/2,
        backgroundColor: '#fff',
        height: 330,
        borderRadius: 20,
    },
    comCulture: {
        width:320,
        marginTop:50,
    },

    logoImg: {
        position: 'absolute',
        top:0,
        left: cell_w/7,
        width:cell_w/7*5,
        resizeMode: 'contain',
    },

    formStyle: {
        backgroundColor:'#F4F3F3',
        marginTop: 30,
        marginLeft: 10,
        width: 300,
        height: 120,
        borderRadius: 8,
    },

    formInput:{
        flexDirection:'row',
        height: 60,
        padding: 20,
    },

    formInputSplit:{
        borderBottomWidth:1,
        borderBottomColor:'#dbdada',
    },

    loginInput: {
        height: 30,
        borderColor: '#000',
        paddingLeft: 10,
        flex: 1,
        fontSize: 16,
    },

    forget: {
        //alignItems: 'flex-end',
        flexDirection:'row',
        margin: 20

    },

    btn: {
        flexDirection:'row',
        //backgroundColor:'transparent',
    },

    btnWrap:{
        marginTop: 150,
        borderRadius: 5,
        height: 50,
    },

    loginBtn1: {
        fontSize: 20,
        color: '#ffffff',
        backgroundColor: 'transparent',
        width: 150,
        height: 50,
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop: 15,
        marginRight: 20,
        flex: 1,
        textAlign: 'center',
    },

    loginBtn2: {
        fontSize: 20,
        color: '#C7D634',
        backgroundColor: '#fff',
        width: 150,
        height: 50,
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop: 15,
        flex: 1,
        textAlign: 'center',
    },

})

export default connect(select)(Login);