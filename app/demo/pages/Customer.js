/**
 * 用户 页面
 */

import React, {Component} from 'react';
import {
    StyleSheet, TextInput, View, Button
} from 'react-native';

class  Customer extends Component {

    static navigationOptions = ({navigation}) => ({
        title:'用户'
    })

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                  <Button title="用户"/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        padding: 5,
        textAlignVertical: 'top'
    }
})

export default Customer;