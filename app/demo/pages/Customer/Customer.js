/**
 * 用户 页面
 */

import React, {Component} from 'react';
import {
    StyleSheet, TextInput, View, Button,ScrollView,Text
} from 'react-native';


import MyInfo from '../../components/MyInfo';
import MyInfoBtn from '../../components/MyInfoBtn';
import MyOperation from '../../components/MyOperation';
import colors from '../../baseComponents/Colors';

import {connect} from 'react-redux';

class  Customer extends Component {

    static navigationOptions = ({navigation}) => ({
        title:'喵窝',
        header: null,
    })

    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <MyInfo navigation={this.props.navigation}></MyInfo>
                <MyInfoBtn navigation={this.props.navigation}></MyInfoBtn>
                <MyOperation navigation={this.props.navigation}></MyOperation>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        padding: 5,
        textAlignVertical: 'top'
    },
    logoutBtn:{
        flex: 1,
        fontSize: 14,
        padding: 10,
        borderColor:colors.introduce,
        borderWidth:1,
        borderRadius:1,
        marginLeft:10,
        marginRight:10,
        backgroundColor:colors.white,
        color:colors.appColor,
        textAlign:'center'
    }
})

export default Customer;