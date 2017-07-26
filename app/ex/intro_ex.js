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
import AppIntro from 'react-native-app-intro';
const {width} = Dimensions.get('window')

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
        const pageArray = [{
            title: 'Page 1',

            img: require('../img/3.jpg'),
            imgStyle: {
                height: 80 * 2.5,
                width: 109 * 2.5,
            },
            backgroundColor: '#fa931d',
            height:200,
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Page 2',
            img: require('../img/1.jpg'),
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            height:200,
            backgroundColor: '#a4b602',
            fontColor: '#fff',
            level: 10,
        }];
        if (this.state.swiperShow) {

            return (

                <AppIntro
                    style={styles.imgWrapper}
                    pageArray={pageArray}
                >


                </AppIntro>

            )
        } else {
            return (
                <View style={{height:200}}>
                    <Text>dddd</Text>
                </View>
            );
        }

    }

}

const styles = StyleSheet.create({
    imgWrapper: {
        width: width,
        height: 200,
        flex: 1,
        backgroundColor: '#aaa'
    },
    imgView: {
        width: width,
        height: 200,
        flex: 1
    },
    bannerImg: {
        width: width,
        height: 200,
        flex: 1
    }
})

export default Main;