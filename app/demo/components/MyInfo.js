/**
 * 用户基础信息
 */
import React, {Component} from 'react';
import {
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Image,
    Text,
    View
} from 'react-native';

import colors from '../baseComponents/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

class MyInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    _renderLogin = () => {
        return (
            <View style={styles.flex}>
                <View style={styles.infocontainer}>
                    <Image
                        source={{ uri: 'http://img.mp.itc.cn/upload/20160511/75173ff5bd664ea58d08b85e55294155_th.jpg' }}
                        style={styles.headimage}/>
                    <View>
                        <Text style={styles.infoname}>cookie</Text>
                        <Text style={styles.infoword1}>学习时长 211小时   |   经验  21342</Text>
                    </View>
                    <Ionicons
                        name={'ios-mail'}
                        size={26}
                        style={{ color: colors.white,position:'absolute',right:25,top:26}}
                    />
                </View>
                <View style={[styles.infowordlist]}>
                    <View style={[styles.flex,styles.center]}>
                        <Text style={styles.infoword2}>关注</Text>
                        <Text style={styles.infoword3}>4</Text>
                    </View>
                    <View style={[styles.flex,styles.center]}>
                        <Text style={styles.infoword2}>粉丝</Text>
                        <Text style={styles.infoword3}>3</Text>
                    </View>
                    <View style={[styles.flex,styles.center]}>
                        <Text style={styles.infoword2}>积分</Text>
                        <Text style={styles.infoword3}>444</Text>
                    </View>
                </View>

            </View>
        )
    }

    _renderNoLogin = () => {
        return (
            <View style={styles.flex}>
                <View style={styles.infocontainer2}>
                    <TouchableOpacity   activeOpacity={0.9} onPress={() => this.props.navigation.navigate('Login')}>
                    <Image
                        source={{ uri: 'http://img.mp.itc.cn/upload/20160511/75173ff5bd664ea58d08b85e55294155_th.jpg' }}
                        style={styles.headimage2}/>
                    <Text style={styles.infoname2}>点击登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    render() {
        return (
            this._renderNoLogin()
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: colors.appColor
    },
    infocontainer: {
        flexDirection: 'row',
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 15,
    },
    infocontainer2: {
        flexDirection: 'column',
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 15,
        alignItems:'center',
        justifyContent:'center'
    },
    headimage: {
        resizeMode: 'cover',
        borderRadius: 26,
        width: 52,
        height: 52,
        marginRight: 25
    },
    headimage2: {
        resizeMode: 'cover',
        borderRadius: 26,
        width: 52,
        height: 52,
    },
    infoname2: {
        color: colors.white,
        fontSize: 12,
        paddingTop: 8,
    },
    infoname: {
        color: colors.white,
        fontSize: 14,
        lineHeight: 24
    },
    infoword1: {
        color: colors.introduce,
        fontSize: 12,
        marginTop: 6
    },
    infowordlist: {
        flexDirection: 'row',
        paddingBottom: 15,

    },
    center: {
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
    },
    infoword2: {
        color: colors.introduce,
        fontSize: 12,
    },
    infoword3: {
        color: colors.white,
        fontSize: 14,
        marginLeft: 3
    },
})

export default MyInfo