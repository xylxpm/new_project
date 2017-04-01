/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    ScrollView,
    AsyncStorage,
    AlertIOS,
    Navigator,
    DatePickerIOS,
    View
} from 'react-native';

import Dimensions from 'Dimensions';
import DateIOS from './DateIOS.js';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Model = [
    {
        id: '1',
        title: '喵星人布丁',
        desc: '一只',
        price: 6000,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943540744&di=50d6a12eecaad024fc3d661dbc8555e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f510fb30f2442a71525d087d543ad4bd11302ec.jpg'
    },
    {
        id: '2',
        title: '喵星人馒头',
        desc: '一只',
        price: 15000,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943561674&di=f8c34d6fb1a4ece7807bde0a2429763e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F07%2F20150807184842_3Yhin.jpeg'
    },
    {
        id: '3',
        title: '喵星人饼干',
        desc: '一只',
        price: 15000,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943576131&di=3b6f187f402a106feec9eade686fb990&imgtype=0&src=http%3A%2F%2F5.595818.com%2F2014%2Fpic%2F000%2F364%2F883525f3226887a0ad8ce65848c51999.jpg'
    },
    {
        id: '4',
        title: '喵星人梅梅',
        desc: '一只',
        price: 3000,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943619895&di=ffad3f79e684e0f540dad44cc2636f06&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201511%2F14%2F20151114035004_vFC2J.jpeg'
    },
    {
        id: '5',
        title: '喵星人cookie',
        desc: '一只',
        price: 3000,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490250004595&di=8f35039a9740bb9dbac7a8123951160d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3Dbc92b01493ef76c6d0d2fb23ad16fdf6%2F9e081812b31bb051a156d11d357adab44aede010.jpg'
    },
    {
        id: '6',
        title: '喵星人喵喵',
        desc: '一只',
        price: 500,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490249971337&di=dcf5647527bfa84d469eb0da5731cc02&imgtype=0&src=http%3A%2F%2Fimg.go007.com%2F2017%2F02%2F21%2F094036d74261eeed_6.jpg'
    }
]

class Item extends Component {
    static defaultProps = {
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943561674&di=f8c34d6fb1a4ece7807bde0a2429763e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F07%2F20150807184842_3Yhin.jpeg',
        title: '标题',
    };

    static propTypes = {
        pic:React.PropTypes.string.isRequired,
        title:React.PropTypes.string.isRequired,
    };

    render(){
        return(
            <View style={styles.item}>
                <TouchableOpacity onPress={this.props.press}>
                    <Image
                        style={styles.img}
                        resizeMode='cover'
                        source={{uri:this.props.pic}}

                    />
                    <Text style={styles.item_text}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

}


class ShoppingList extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    render(){
        let lists=[];
        for(let i in Model){
            if (i % 2 === 0) {
                let row = (
                    <View style={styles.row} key={i}>
                        <Item title={Model[i].title}
                              pic={Model[i].pic}

                        ></Item>


                        <Item title={Model[parseInt(i) + 1].title}
                              pic={Model[parseInt(i) + 1].pic}
                        ></Item>
                    </View>
                );
                lists.push(row);
            }
        }

        return(
            <ScrollView style={{ marginTop: 10 }}>
                {lists}
                <Text  style={styles.btn} onPress={this._click1.bind(this)}>弹框试试1</Text>
                <Text  style={styles.btn} onPress={this._click2.bind(this)}>弹框试试2</Text>
                <Text  style={styles.btn} onPress={this._click3.bind(this)}>日期选择</Text>
            </ScrollView>
        )
    }

    _click1(){
        AlertIOS.alert("提示","欢迎猫猫",[
            {
                text:'取消',
                onPress:()=>{
                    alert('取消')
                }
            },
            {
                text:'确定',
                onPress:()=>{
                    alert('确定')
                }
            }
        ])
    }
    _click2(){
        AlertIOS.prompt("提示","欢迎猫猫",[
            {
                text:'取消',
                onPress:()=>{
                    alert('取消')
                }
            },
            {
                text:'确定',
                onPress:(text)=>{
                    alert(text)
                }
            }
        ])
    }
    _click3(){
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'DateIOS',
                component: DateIOS
            })
        }
    }

}


class new_project extends Component {
    constructor(props) {
        super(props);
    }

    goBack = () => {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }




    render() {

        let defaultName = 'ShoppingList';
        let defauleComponent = ShoppingList;
        return (
            <Navigator
                initialRoute={{name:defaultName,component:defauleComponent}}
                ref='navigator'
                configureScene={
                    (route)=>{
                        return Navigator.SceneConfigs.FloatFromRight;
                    }
                }
                renderScene={
                    (route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.param}  navigator={navigator}/>
                    }
                }

            />

        );


        // return (
        //     <View>
        //         <Text onPress={this.goBack.bind(this)}>
        //             返回欢迎页
        //         </Text>
        //         <ShoppingList navigator={this.props.navigator} >
        //
        //         </ShoppingList>
        //     </View>
        // )
    }
}

const styles = StyleSheet.create({

    list_item: {
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        borderWidth: 1,
        height: 30,
        borderRadius: 3,
        borderColor: '#ddd',
    },


    list_item_desc: {
        flex: 2,
        fontSize: 15,
    },

    list_item_price: {
        flex: 1,
        fontSize: 15,
        textAlign: 'right',
    },

    clear: {
        marginTop: 10,
        backgroundColor: '#FF7200',
        color: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft: 20,
        marginRight: 10,
        lineHeight: 24,
        height: 33,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    btn: {
        flex: 1,
        backgroundColor: '#FF7200',
        height: 33,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 24,
        marginTop: 10,
        fontSize: 18,
    },

    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    img: {
        height:100,
        backgroundColor:'transparent'
    },
    item_text: {

        backgroundColor: '#000',
        opacity: 0.7,
        color: '#fff',
        height: 26,
        lineHeight: 26,
        textAlign: 'center',

    },
    item: {
        flex: 1,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 5,
        height: 126,
    },
    list: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    container: {

        flex: 1,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius: 16,


    },
    //让rightContainer在父容器中占据Image之外剩下的全部空间。

    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        marginBottom: 8,

    },
    year: {
        fontSize: 14,

    },
})

AppRegistry.registerComponent('new_project', () => new_project);
