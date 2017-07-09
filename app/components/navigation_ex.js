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

class ChatScreen extends Component {
    static navigationOptions = ({navigation})=>({
        title: `喵喵喵，${navigation.state.params.user}`,
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }


}

class HomeScreen extends Component {
    static navigationOptions = {
        title: '主页哦',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, cookie!</Text>
                <Text  onPress={() => navigate('Chat',{user:'洛基11'})}>下一个view</Text>
            </View>
        );
    }
}



const Root = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});




module.exports=Root;
