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

import { StackNavigator,TabNavigator } from 'react-navigation';

class RecentChatsScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return <Text  onPress={() => navigate('Chat',{user:'洛基宝宝'})}>~o( =∩ω∩= )m</Text>
    }
}

class AllContactsScreen extends Component {
    render() {
        return <Text>List of all contacts</Text>
    }
}


class ChatScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
            title: isInfo ? `${user}'s  Info` : `喵？ ${state.params.user}`,
            headerRight: (
                <Button
                    title={isInfo ? 'Done' : `${user}'s info`}
                    onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
                />
            ),
        };
    };
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
        title: '主页哦'
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

const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
});


MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
};


const Root=StackNavigator({
    Home: { screen: MainScreenNavigator },
    Chat: { screen: ChatScreen },
});



module.exports=Root;
