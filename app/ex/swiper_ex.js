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

const {width} = Dimensions.get('window');

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
                <Swiper style={styles.imgWrapper} height={200}
                        loop={true} autoplay={true} showsButtons={false}
                        dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        activeDot={<View style={{backgroundColor: '#e91e63', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        paginationStyle={{ bottom: 10, left: null, right: 10 }}
                >
                    <View style={styles.imgView}>

                        <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943540744&di=50d6a12eecaad024fc3d661dbc8555e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f510fb30f2442a71525d087d543ad4bd11302ec.jpg'}}  style={styles.bannerImg}  resizeMode='cover'/>
                    </View>

                    <View style={styles.imgView}>
                        <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943561674&di=f8c34d6fb1a4ece7807bde0a2429763e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F07%2F20150807184842_3Yhin.jpeg'}}  style={styles.bannerImg}  resizeMode='cover'/>
                    </View>
                    <View style={styles.imgView}>
                        <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943619895&di=ffad3f79e684e0f540dad44cc2636f06&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201511%2F14%2F20151114035004_vFC2J.jpeg'}}  style={styles.bannerImg}  resizeMode='cover'/>
                    </View>
                </Swiper>
            )
        } else {
            return (
                <View style={{height:200}}>
                    <Text>d   ddd</Text>
                </View>
            );
        }

    }

}

const styles = StyleSheet.create({
    imgWrapper: {
        height: 200,


    },
    imgView: {
        width: 200,
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