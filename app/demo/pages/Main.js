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
import MyCard from '../components/MyCard';


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

        if (this.state.swiperShow) {
            return (
                <ScrollView style={[styles.flex,styles.main]}>
                    <MySwiper></MySwiper>
                    <View style={styles.btnlists}>
                        <MyMenuBtn title="零食" icon="ios-cart"></MyMenuBtn>
                        <MyMenuBtn title="玩具" icon="ios-game-controller-b"></MyMenuBtn>
                        <MyMenuBtn title="医疗" icon="ios-locate"></MyMenuBtn>
                        <MyMenuBtn title="招亲" icon="ios-megaphone"></MyMenuBtn>
                        <MyMenuBtn title="比武" icon="ios-bonfire"></MyMenuBtn>
                    </View>
                    <View style={[styles.cardlists]}>
                        <MyCard bgColor="#e91e63" title="零食" name="喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食" introduce="喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食零食喵星人零食喵星人零食零食喵星人零食喵星人零食"  count="300"></MyCard>
                        <MyCard bgColor="#80DEEA" title="玩具" name="喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具" introduce="喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具"  count="3040"></MyCard>
                    </View>
                    <View style={[styles.cardlists]}>
                        <MyCard bgColor="#AB47BC" title="零食" name="喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食" introduce="喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食零食喵星人零食喵星人零食零食喵星人零食喵星人零食"  count="300"></MyCard>
                        <MyCard bgColor="#8BC34A" title="玩具" name="喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具" introduce="喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具"  count="3040"></MyCard>
                    </View>
                    <View style={[styles.cardlists]}>
                        <MyCard bgColor="#AB47BC" title="零食" name="喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食" introduce="喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食零食喵星人零食喵星人零食零食喵星人零食喵星人零食"  count="300"></MyCard>
                        <MyCard bgColor="#8BC34A" title="玩具" name="喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具" introduce="喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具"  count="3040"></MyCard>
                    </View>
                </ScrollView>
            )
        } else {
            return (
                <View style={styles.flex}>
                    <View style={{height:200}}>
                        <Text>等待</Text>
                    </View>
                </View>
            );
        }

    }

}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    main:{
       marginBottom:3
    },
    btnlists:{
        marginTop:10,
        height:60,
        flexDirection: 'row'
    },
    cardlists:{
        marginTop:10,
        flexDirection: 'row'
    }

})

export default Main;