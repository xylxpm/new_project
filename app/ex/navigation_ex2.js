/**
 * navigation切换view
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    ScrollView,
    Text,
    View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class ChatScreen2 extends Component {
    static navigationOptions = ({navigation})=>({
        title: `喵喵喵`,
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with m</Text>
            </View>
        );
    }


}




module.exports=ChatScreen2;
