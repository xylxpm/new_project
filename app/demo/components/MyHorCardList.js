/**
 * 横向卡片列表
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import MyHorCard from '../components/MyHorCard';
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


class MyHorCardList extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        let viewList = [];
        for (let i in lists2) {
            let row = (
                <MyHorCard key={i}  bgColor={lists2[i].bgColor} name={lists2[i].name}
                           introduce={lists2[i].introduce} count={lists2[i].count}></MyHorCard>
            );
            viewList.push(row);
        }

        return (
            <View style={styles.hcardlists} >
                {viewList}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    hcardlists: {
        marginTop:20,
        marginBottom:20,
        paddingBottom:15,
        backgroundColor:colors.white,
    }

})
export default MyHorCardList;