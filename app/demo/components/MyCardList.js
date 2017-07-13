/**
 * 方形卡片列表
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

let lists = [
    {
        bgColor:'#e91e63',
        title:'零食',
        name:'喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食',
        introduce:'喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食零食喵星人零食喵星人零食零食喵星人零食喵星人零食',
        count:300
    },
    {
        bgColor:'#80DEEA',
        title:'玩具',
        name:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        introduce:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count:300
    },
    {
        bgColor:'#AB47BC',
        title:'玩具',
        name:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        introduce:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count:300
    },
    {
        bgColor:'#8BC34A',
        title:'玩具',
        name:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        introduce:'喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count:300
    },
]

class MyCard extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        return (
            <View style={styles.card}>
                <View style={{
                    backgroundColor:this.props.bgColor,
                    width: '100%',
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    justifyContent: 'center',
                    height: 28,
                }}>
                    <Text style={styles.title} numberOfLines={2}>{this.props.title}</Text>
                </View>
                <View style={styles.main}>
                    <Text style={styles.name} numberOfLines={2}>{this.props.name}</Text>
                    <Text style={styles.introduce} numberOfLines={3}>{this.props.introduce}</Text>
                    <Text style={styles.count} numberOfLines={1}>{this.props.count}</Text>
                </View>
            </View>
        )
    }

}

class MyCardList extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        let viewList = [];
        for (let i in lists) {
            if (i % 2 === 0) {

                let row = (
                    <View style={styles.cardlists} key={i}>
                        <MyCard bgColor={lists[i].bgColor} title={lists[i].title} name={lists[i].name}  introduce={lists[i].introduce} count={lists[i].count}></MyCard>
                        <MyCard bgColor={lists[parseInt(i) + 1].bgColor} title={lists[parseInt(i) + 1].title} name={lists[parseInt(i) + 1].name}  introduce={lists[parseInt(i) + 1].introduce} count={lists[parseInt(i) + 1].count}></MyCard>

                    </View>
                );
                viewList.push(row);
            }
        }

        return (
            <View>
                {viewList}

            </View>
        )
    }

}

const styles = StyleSheet.create({
    cardlists: {
        marginTop: 10,
        flexDirection: 'row',
        paddingLeft:15,
        paddingTop:8,

    },
    flex: {
        flex: 1
    },
    center: {
        alignItems: 'center',
        justifyContent: "center"
    },
    card: {
        flex: 1,
        backgroundColor: colors.white,
        marginRight: 15,
        borderRadius: 3,
        shadowColor:colors.black,
        shadowOffset:{width:1,height:1},
        shadowRadius:3,
        shadowOpacity:0.4,
        elevation:4  //android的阴影效果

    },
    title: {
        marginLeft: 8,
        fontSize: 12,
        color: colors.white,
    },
    main: {
        padding: 8,
        height: 155,
    },
    name: {
        lineHeight: 22,
        color: colors.black,
        fontSize: 14,
        marginBottom: 5
    },
    introduce: {
        lineHeight: 22,
        color: colors.tintColor,
        fontSize: 12,
        marginBottom: 5
    },
    count: {
        fontSize: 10,
        textAlign: 'left',
        color: colors.introduce,
        lineHeight: 22
    }

})
export default MyCardList;