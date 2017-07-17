/**
 * 入口
 */
import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


import colors from './baseComponents/Colors';

import Feedback from './pages/Other/Feedback';
import Category from './pages/Category/Category';
import Customer from './pages/Customer/Customer';
import Main from './pages/Main/Main';
import Splash from './pages/Other/Splash';


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
            header:null,
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-people' : 'ios-people-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },

    }
},
    {
    lazy: true,
    tabBarOptions: {
        animationEnabled:false,
        activeTintColor: colors.appColor,
        style: {
            height : Platform.OS === 'ios' ? 50 : 65,
            backgroundColor:colors.white
        },
        activeBackgroundColor:colors.white,
        inactiveBackgroundColor:colors.white,
        inactiveTintColor:colors.tintColor,
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

    }
}, {
    headerMode: 'screen',
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.appColor,
            elevation:0,
            height:60
        },
        headerTitleStyle: {
            color: colors.white,
            fontSize: 20,
            alignSelf:'center'
        },
        headerTintColor: colors.white
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
});



export default App;




