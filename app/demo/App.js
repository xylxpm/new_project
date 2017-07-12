/**
 * Created by xylxpm on 2017/7/10.
 */
import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feedback from './pages/Feedback';
import About from './pages/About';
import Category from './pages/Category';
import Customer from './pages/Customer';
import Main from './pages/Main';
import Splash from './pages/Splash';


const TabContainer = TabNavigator(
    {
    Main: {
        screen: Main,
        navigationOptions:{
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    Category: {
        screen: Category,
        navigationOptions:{
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-cube' : 'ios-cube-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    Feedback: {
        screen: Feedback,
        navigationOptions:{
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    Customer: {
        screen: Customer,
        navigationOptions:{
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-people' : 'ios-people-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    }
},
    {
    lazy: true,
    tabBarOptions: {
        animationEnabled:false,
        activeTintColor: '#e91e63',//Platform.OS === 'ios' ? '#e91e63' : '#ddd',
        style: {
            height : Platform.OS === 'ios' ? 50 : 65,
            backgroundColor:'white'
        },
        activeBackgroundColor:'white',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#aaa',
        swipeEnabled:true,
        showIcon:true,
        indicatorStyle:{
            height:0,
        },
        labelStyle:{
            fontSize:12

        }
    },
    tabBarPosition:'bottom'
}
);

const App = StackNavigator({

    Home: {
        screen: TabContainer,
        navigationOptions: {
            headerLeft: null
        }
    }
}, {
    headerMode: 'screen',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#e91e63',
            elevation:0,
            height:50
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            alignSelf:'center'
        },
        headerTintColor: '#fff',
        headerPressColorAndroid:'red'
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
});



export default App;




