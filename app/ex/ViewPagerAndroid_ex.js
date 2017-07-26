/**
 * 入口
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    ViewPagerAndroid,
    View
} from 'react-native';

import {StackNavigator} from 'react-navigation';

class HomeScreen extends Component {
    static navigationOptions = {
        title: '主页',
    };


    render() {


        return (
            <ViewPagerAndroid style={styles.flex}
                              initialPage={0}
            >
                <View><Text>111111</Text></View>
                <View><Text>22222</Text></View>
                <View><Text>33333</Text></View>
            </ViewPagerAndroid>
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
