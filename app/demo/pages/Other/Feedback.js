/**
 * 列表  页面
 */

import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,

    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


class Feedback extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '喵列表',
        tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
                name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    })

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <View>
                <Text>喵列表</Text>
            </View>
        )
    }

}


const styles = StyleSheet.create(
)


export default Feedback;