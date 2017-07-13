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
    ScrollView,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../baseComponents/Colors';

import MySwiper from '../components/MySwiper';
import MyMenuBtn from '../components/MyMenuBtn';
import MyCardList from '../components/MyCardList';
import MyHorCardList from '../components/MyHorCardList';
import MyCatSwiper from '../components/MyCatSwiper';


class Main extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '喵主页',
        headerLeft: (<Ionicons
            name={'ios-search'}
            size={26}
            style={{ color: colors.white,marginLeft:10 }}
        />),
        headerRight: (
            <Ionicons
                name={'ios-mail'}
                size={26}
                style={{ color: colors.white,marginRight:10}}
            />
        )
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

        return (
            <ScrollView style={[styles.flex,styles.main]}>
                <MySwiper></MySwiper>
                <View style={styles.btnlists}>
                    <MyMenuBtn title="零食" icon="ios-cart"></MyMenuBtn>
                    <MyMenuBtn title="玩具" icon="ios-game-controller-b"></MyMenuBtn>
                    <MyMenuBtn title="医疗" icon="ios-locate"></MyMenuBtn>
                    <MyMenuBtn title="比武" icon="ios-bonfire"></MyMenuBtn>
                    <MyMenuBtn title="招亲" icon="ios-megaphone"></MyMenuBtn>
                </View>
                <MyCardList></MyCardList>
                <MyHorCardList></MyHorCardList>
                <MyCatSwiper></MyCatSwiper>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    main: {
        marginBottom: 3
    },
    btnlists: {
        marginTop: 10,
        height: 60,
        flexDirection: 'row'
    },

})

export default Main;