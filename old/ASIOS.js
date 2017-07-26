/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * ActionSheetIOS 组件
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    ActionSheetIOS,
    TouchableHighlight,
    View,
} from 'react-native';

import CustomActionSheet from 'react-native-custom-action-sheet';

export default class ASIOS extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    goBack = () => {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    tip = () => {
        ActionSheetIOS.showActionSheetWithOptions({
            options:['拨打电话','发邮件','发短信','取消'],//一组按钮的标题（必选）
            cancelButtonIndex:3,//选项中取消按钮所在的位置（索引）
            destructiveButtonIndex:1,//红色高亮显示的位置（索引）
            title:'你要干啥',
            message:'我想想'
        },function (index) {
            console.log(index);
        })
    }

    share = () => {
        ActionSheetIOS.showShareActionSheetWithOptions({
            message:'喵星人cookie',
            url:'http://www.baidu.com'
        },function (err) {
            alert(err)
        },function (suc) {
            alert(suc)
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.goBack.bind(this)}>返回欢迎页</Text>
                <Text style={styles.item} onPress={this.tip.bind(this)}>选择showActionSheetWithOptions</Text>
                <Text style={styles.item} onPress={this.share.bind(this)}>分享showShareActionSheetWithOptions</Text>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },

    item: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 30,
        borderWidth: 1,
        padding: 6,
        borderColor: '#ddd',

    }
})