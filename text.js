/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Dimensions from 'Dimensions';




export default class text extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <View style={styles.container}>
                <Text>534534</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

})