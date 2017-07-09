/**
 * 入口
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import {StackNavigator} from 'react-navigation';

class HomeScreen extends Component {
    static navigationOptions = {
        title: '主页',
    };


    render() {

        return (
            <View style={styles.flex} >
                <View><Text>111111</Text></View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1
    }

});


const Root = StackNavigator({
    Home: {screen: HomeScreen}
});


module.exports = Root;
