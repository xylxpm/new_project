/**
 * 入口
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    ScrollView,
    Text,
    Button,
    View
} from 'react-native';

import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';

class MyHomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../img/1.jpg')}
                resizeMode='cover'
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../img/2.jpg')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const Root=StackNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});



module.exports=Root;
