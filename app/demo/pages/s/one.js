/**
 *  组件。
 */
import React, {Component} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class one extends Component {
    static navigationOptions = {
        title: 'one',
    };


    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity style={[styles.flex,styles.center]} onPress={() => navigate('Home')}>
               <Text style={[styles.text,styles.center]}>第一个二级页面</Text>

            </TouchableOpacity>
        )
    }

}



const styles = StyleSheet.create({


})

export default one;