/**
 * 主页
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Dimensions,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import MySwiper from '../components/MySwiper';


class Main extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '喵主页'
    })


    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true
            });
        }, 0)
    }

    render() {

        if (this.state.swiperShow) {
            return (
                <View>
                    <MySwiper></MySwiper>
                </View>
            )
        } else {
            return (
                <View>
                    <View style={{height:200}}>
                        <Text>dddd</Text>
                    </View>
                </View>
            );
        }

    }

}

const styles = StyleSheet.create({})

export default Main;