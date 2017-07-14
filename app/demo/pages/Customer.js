/**
 * 用户 页面
 */

import React, {Component} from 'react';
import {
    StyleSheet, TextInput, View, Button,ScrollView
} from 'react-native';


import MyInfo from '../components/MyInfo';
import MyInfoBtn from '../components/MyInfoBtn';
import MyOperation from '../components/MyOperation';

class  Customer extends Component {

    static navigationOptions = ({navigation}) => ({
        title:'喵窝'
    })

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <MyInfo></MyInfo>
                <MyInfoBtn></MyInfoBtn>
                <MyOperation></MyOperation>
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
    }
})

export default Customer;