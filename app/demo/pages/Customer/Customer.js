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


class  Customer extends Component {

    static navigationOptions = ({navigation}) => ({
        title:'喵窝',
        header: null,
    })

    constructor(props) {
        super(props);
    }

    render() {

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
    }
})

export default Customer;