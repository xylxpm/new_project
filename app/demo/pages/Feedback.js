/**
 * 建议  页面
 */

import React, {Component} from 'react';
import {
    StyleSheet, TextInput, View, Button
} from 'react-native';

class Feedback extends Component {

    static navigationOptions = ({navigation}) => ({
        title:'视频'
    })

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>

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

export default Feedback;