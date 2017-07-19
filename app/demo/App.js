/**
 * 入口
 */
import React, { Component } from 'react';
import { Platform} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';
import { connect } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from './baseComponents/Colors';

import Login from './pages/Login/Login';

import Main from './pages/Main/Main';
import Main_Combat from './pages/Main/Main_Combat'
import Main_Discover from './pages/Main/Main_Discover'
import Main_Path from './pages/Main/Main_Path'
import Main_Questions from './pages/Main/Main_Questions'
import Main_Notes from './pages/Main/Main_Notes'

import Category from './pages/Category/Category';
import Category_List from './pages/Category/Category_List';
import Category_Detail from './pages/Category/Category_Detail';

import Customer from './pages/Customer/Customer';

import Feedback from './pages/Other/Feedback';

import Splash from './pages/Other/Splash';

export const TabContainer = TabNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                tabBarIcon: ({tintColor, focused}) => (
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
            navigationOptions: {
                tabBarIcon: ({tintColor, focused}) => (
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
            navigationOptions: {
                tabBarIcon: ({tintColor, focused}) => (
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

            navigationOptions: {
                header: null,
                tabBarIcon: ({tintColor, focused}) => (
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
            animationEnabled: false,
            activeTintColor: colors.appColor,
            style: {
                height: Platform.OS === 'ios' ? 50 : 65,
                backgroundColor: colors.white
            },
            activeBackgroundColor: colors.white,
            inactiveBackgroundColor: colors.white,
            inactiveTintColor: colors.tintColor,
            swipeEnabled: true,
            showIcon: true,
            indicatorStyle: {
                height: 0,
            },
            labelStyle: {
                fontSize: 12
            }
        },
        tabBarPosition: 'bottom'
    }
);


export const  MyApp = StackNavigator({
    // Login: {
    //     screen: Login,
    // },
    Home: {
        screen: TabContainer,
    },
    Splash: {
        screen: Splash,
    },
    Main_Combat: {
        screen: Main_Combat,
    },
    Main_Path: {
        screen: Main_Path,
    },
    Main_Questions: {
        screen: Main_Questions,
    },
    Main_Notes: {
        screen: Main_Notes,
    },
    Main_Discover: {
        screen: Main_Discover,
    },
    Category_List: {
        screen: Category_List,
    },
    Category_Detail: {
        screen: Category_Detail,
    },
}, {
    headerMode: 'screen',
    navigationOptions: {
        headerBackTitle:null,
        headerStyle: {
            backgroundColor: colors.appColor,
            elevation: 0,
            height: 60
        },
        headerTitleStyle: {
            color: colors.white,
            fontSize: 20,
            alignSelf: 'center'
        },
        headerTintColor: colors.white
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <MyApp navigation={addNavigationHelpers({ dispatch, state: nav })}/>
);

const mapStateToProps = state => ({
    nav: state.nav,
});


//export default App;

export default connect(mapStateToProps)(AppWithNavigationState);




