/**
 * 分类  页面
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet, Text, View, Button, Image, Platform, Alert, ScrollView
} from 'react-native';
import colors from '../../baseComponents/Colors';

let lists = [
    {
        name: '前端开发',
        content: [
            {
                title: 'HTML/CSS',
                illustration: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=072980f9df2a6059461de948495d5ffe/4034970a304e251fc3ec88c8af86c9177f3e53e2.jpg'
            },
            {
                title: 'JavaScript',
                illustration: 'http://img.mp.itc.cn/upload/20160511/75173ff5bd664ea58d08b85e55294155_th.jpg'
            },
            {
                title: 'JQuery',
                illustration: 'http://img.mp.itc.cn/upload/20160511/73656acdc23a4e019b1e4baffe32eef2_th.jpg'
            },
            {
                title: 'Html5',
                illustration: 'http://img1.gtimg.com/astro/pics/hv1/93/224/1731/112615488.jpg'
            },
            {
                title: 'React ative',
                illustration: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=13487e5d5aafa40f28cbc68fca0d682a/37d3d539b6003af35a3f150f352ac65c1138b6dc.jpg'
            },
            {
                title: 'Node',
                illustration: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=59622d50a61ea8d39e2f7c56f6635b2b/267f9e2f0708283875a846ffb899a9014d08f1b0.jpg'
            },
            {
                title: 'CSS3',
                illustration: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=2c4a18b50924ab18f41be96554938da8/0b46f21fbe096b638808a3c30c338744ebf8ac14.jpg'
            }
        ]
    },
    {
        name: '后台开发',
        content: [
            {
                title: 'PHP',
                illustration: 'http://img1.gtimg.com/astro/pics/hv1/93/224/1731/112615488.jpg'
            },
            {
                title: 'JAVA',
                illustration: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=13487e5d5aafa40f28cbc68fca0d682a/37d3d539b6003af35a3f150f352ac65c1138b6dc.jpg'
            },
            {
                title: 'C++',
                illustration: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=59622d50a61ea8d39e2f7c56f6635b2b/267f9e2f0708283875a846ffb899a9014d08f1b0.jpg'
            },
            {
                title: 'Go',
                illustration: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=2c4a18b50924ab18f41be96554938da8/0b46f21fbe096b638808a3c30c338744ebf8ac14.jpg'
            }
        ]
    },
    {
        name: '移动开发',
        content: [
            {
                title: 'Android',
                illustration: 'http://img1.gtimg.com/astro/pics/hv1/93/224/1731/112615488.jpg'
            },
            {
                title: 'IOS',
                illustration: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=13487e5d5aafa40f28cbc68fca0d682a/37d3d539b6003af35a3f150f352ac65c1138b6dc.jpg'
            },
            {
                title: 'Unity 3D',
                illustration: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=59622d50a61ea8d39e2f7c56f6635b2b/267f9e2f0708283875a846ffb899a9014d08f1b0.jpg'
            },
            {
                title: 'Cocos2d-x',
                illustration: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=2c4a18b50924ab18f41be96554938da8/0b46f21fbe096b638808a3c30c338744ebf8ac14.jpg'
            }
        ]
    }
];

class BtnItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.center,styles.btnContainer]}>
                <Image source={{ uri: this.props.illustration }} style={styles.catimage}/>
                <Text style={[styles.text,styles.center]} numberOfLines={1}>{this.props.title}</Text>
            </View>
        )
    }

}

class BtnList extends Component {

    render() {

        var conlist = this.props.detail.content;
        let viewList = [];
        for (let i in conlist) {
            let row = (
                <BtnItem illustration={conlist[i].illustration} title={conlist[i].title} key={i}></BtnItem>
            );
            viewList.push(row);
        }

        return (
            <View style={styles.brb}>
                <Text style={styles.name}>{this.props.detail.name}</Text>
                <View style={[styles.btnlists,styles.flex]}>
                    {viewList}
                </View>
            </View>
        )
    }
}

class Category extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '喵课程'
    })

    constructor(props) {
        super(props);
    }

    renderExpenseItem(item, i) {
        return <BtnList key={i} detail={item}/>;
    }

    render() {
        return (
            <ScrollView style={[styles.flex]}>
                {
                    lists.map((item, i) => this.renderExpenseItem(item, i))
                }
            </ScrollView>

        )
    }

}

const styles = StyleSheet.create({
    brb: {
        borderBottomWidth: 10,
        borderBottomColor:colors.introduce,
    },
    flex: {
        flex: 1,

        backgroundColor: colors.white
    },
    btnContainer: {
        width: "33%",
        marginBottom: 30
    },
    text: {
        fontSize: 12,
        color: colors.black,
        marginTop: 5
    },
    catimage: {
        resizeMode: 'cover',
        borderRadius: 8,
        width: 36,
        height: 36,
    },
    center: {
        alignItems: 'center',
        justifyContent: "center",

    },
    btnlists: {

        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    name: {
        fontSize: 14,
        padding: 15,
    }
})

export default Category;