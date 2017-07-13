/**
 * 方形卡片列表
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import MyCard from '../components/MyCard';

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

    }

})
export default MyCardList;