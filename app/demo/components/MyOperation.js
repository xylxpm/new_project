/**
 * 操作菜单
 */
import React, {Component} from 'react';
import {
    TouchableNativeFeedback,
    TouchableHighlight,
    StyleSheet,
    Platform,
    Image,
    Text,
    View
} from 'react-native';

import colors from '../baseComponents/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

class MyOperation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[styles.flex]}>
                <View style={[styles.flexb]}>
                    <View style={[styles.flexDRow]}>
                        <Ionicons
                            name={'ios-images-outline'}
                            size={26}
                            style={{ color: colors.blue,}}
                        />
                        <View style={[styles.rowRight]}>
                            <Text style={{flex:1}}>历史记录</Text>
                            <Ionicons
                                name={'ios-arrow-forward'}
                                size={26}
                                style={styles.crrroght}
                            />
                        </View>
                    </View>

                    <View style={[styles.flexDRow]}>
                        <Ionicons
                            name={'ios-alarm-outline'}
                            size={26}
                            style={{ color: colors.yellow,}}
                        />
                        <View style={[styles.rowRight]}>
                            <Text style={{flex:1}}>我的课程</Text>
                            <Ionicons
                                name={'ios-arrow-forward'}
                                size={26}
                                style={styles.crrroght}
                            />
                        </View>
                    </View>

                    <View style={[styles.flexDRow]}>
                        <Ionicons
                            name={'ios-paw-outline'}
                            size={26}
                            style={{ color: colors.green,}}
                        />
                        <View style={[styles.rowRight]}>
                            <Text style={{flex:1}}>我的小主</Text>
                            <Ionicons
                                name={'ios-arrow-forward'}
                                size={26}
                                style={styles.crrroght}
                            />
                        </View>
                    </View>

                    <View style={[styles.flexDRow]}>
                        <Ionicons
                            name={'ios-ribbon-outline'}
                            size={26}
                            style={{ color: colors.pink,}}
                        />
                        <View style={[styles.rowRight,styles.nob]}>
                            <Text style={{flex:1}}>我的奖章</Text>
                            <Ionicons
                                name={'ios-arrow-forward'}
                                size={26}
                                style={styles.crrroght}
                            />
                        </View>
                    </View>
                </View>



                <View style={[styles.flexb,styles.mb]}>

                    <View style={[styles.flexDRow]}>
                        <Ionicons
                            name={'ios-construct-outline'}
                            size={26}
                            style={{ color: colors.blue,}}
                        />
                        <View style={[styles.rowRight,styles.nob]}>
                            <Text style={{flex:1}}>设置</Text>
                            <Ionicons
                                name={'ios-arrow-forward'}
                                size={26}
                                style={styles.crrroght}
                            />
                        </View>
                    </View>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex: 1,
    },
    flexb: {

        backgroundColor: colors.white,
        marginTop: 10,
        paddingLeft: 15,
    },
    mb: {
        marginBottom: 15,
    },
    flexDRow: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
    },
    rowRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        marginLeft: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.tintColor,

    },
    center: {
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
    },
    crrroght: {
        color: colors.tintColor,
        marginRight: 15
    },
    nob: {
        borderBottomWidth: 0,
    }
})

export default MyOperation