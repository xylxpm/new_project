/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * button组件
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableWithoutFeedback,
    Text,
    View
} from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);

    }

    _handlePress = () => {
        this.props.onPress();
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._handlePress}>
                <View style={[styles.button, this.props.enabled ? {} : styles.buttonDisabled]}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        width: 0,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray'
    },
    buttonDisabled: {
        opacity: 0.5,
        backgroundColor: 'black'
    },
    buttonText: {
        color: "white"
    }

})

