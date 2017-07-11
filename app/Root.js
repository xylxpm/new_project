
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import {StackNavigator} from 'react-navigation';

//import App from './rn-navigation/App';

import App2 from './demo/App';

class HomeScreen extends Component {
    // static navigationOptions = {
    //     title: '主页',
    // };


    render() {

        return (
            <View style={styles.flex} >
                <App2></App2>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1
    },

});


const Root = StackNavigator({
    Home: {screen: HomeScreen}
});


module.exports = HomeScreen;
