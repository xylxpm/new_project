/**
 * 横向卡片列表
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

let lists2 = [
    {
        bgColor: '#e91e63',
        title: '零食',
        name: '喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食',
        introduce: '喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食喵星人零食零食喵星人零食喵星人零食零食喵星人零食喵星人零食',
        count: 300
    },
    {
        bgColor: '#80DEEA',
        title: '玩具',
        name: '喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        introduce: '喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count: 300
    },
    {
        bgColor: '#AB47BC',
        title: '玩具',
        name: '喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        introduce: '喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count: 300
    },
    {
        bgColor: '#8BC34A',
        title: '玩具',
        name: '喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        introduce: '喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具喵星人玩具',
        count: 300
    },
]

class MyHorCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.flex}>
                <View style={{backgroundColor:this.props.bgColor,width:120,height:90,marginTop:5}}></View>
                <View style={styles.main}>
                    <Text style={styles.name} numberOfLines={1}>{this.props.name}</Text>
                    <Text style={styles.introduce} numberOfLines={2}>{this.props.introduce}</Text>
                    <Text style={styles.count} numberOfLines={1}>{this.props.count}</Text>
                </View>
            </View>
        )
    }
}

class MyHorCardList extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        let viewList = [];
        for (let i in lists2) {
            let row = (
                <MyHorCard key={i} bgColor={lists2[i].bgColor} name={lists2[i].name}
                           introduce={lists2[i].introduce} count={lists2[i].count}></MyHorCard>
            );
            viewList.push(row);
        }

        return (
            <View style={styles.hcardlists}>
                {viewList}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        flexDirection: 'row',

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
    },

    main: {
        flex: 1,
        marginLeft: 15
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
    },
    hcardlists: {
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: 15,
        backgroundColor: colors.white,
    }

})
export default MyHorCardList;