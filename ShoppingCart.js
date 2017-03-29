/**
 * Sample React Native App
 * 购物车组件，使用AsyncStorage  api
 * 包括 模拟商品列表，添加至购物车，购物车结算，清空；
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

    View
} from 'react-native';

import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Model = [
    {
        id: '1',
        title: '喵星人-布丁',
        desc: '一只',
        price: 6000,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943540744&di=50d6a12eecaad024fc3d661dbc8555e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f510fb30f2442a71525d087d543ad4bd11302ec.jpg'
    },
    {
        id: '2',
        title: '喵星人-馒头',
        desc: '一只',
        price: 15000,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943561674&di=f8c34d6fb1a4ece7807bde0a2429763e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F07%2F20150807184842_3Yhin.jpeg'
    },
    {
        id: '3',
        title: '喵星人-饼干',
        desc: '一只',
        price: 15000,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943576131&di=3b6f187f402a106feec9eade686fb990&imgtype=0&src=http%3A%2F%2F5.595818.com%2F2014%2Fpic%2F000%2F364%2F883525f3226887a0ad8ce65848c51999.jpg'
    },
    {
        id: '4',
        title: '喵星人-梅梅',
        desc: '一只',
        price: 3000,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943619895&di=ffad3f79e684e0f540dad44cc2636f06&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201511%2F14%2F20151114035004_vFC2J.jpeg'
    },
    {
        id: '5',
        title: '喵星人-cookie',
        desc: '一只',
        price: 3000,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490250004595&di=8f35039a9740bb9dbac7a8123951160d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3Dbc92b01493ef76c6d0d2fb23ad16fdf6%2F9e081812b31bb051a156d11d357adab44aede010.jpg'
    },
    {
        id: '6',
        title: '喵星人-喵喵',
        desc: '一只',
        price: 500,
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490249971337&di=dcf5647527bfa84d469eb0da5731cc02&imgtype=0&src=http%3A%2F%2Fimg.go007.com%2F2017%2F02%2F21%2F094036d74261eeed_6.jpg'
    }
]

export default class ShoppingCart extends Component {

    goBack = () => {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View>
                <Text onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <ShoppingList navigator={this.props.navigator}>

                </ShoppingList>
            </View>
        )
    }
}

class Item extends Component {
    static defaultProps = {
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943561674&di=f8c34d6fb1a4ece7807bde0a2429763e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F07%2F20150807184842_3Yhin.jpeg',
        title: '标题',
    };

    static propTypes = {
        pic: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
    };

    render() {
        return (
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
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        let lists = [];
        for (let i in Model) {
            if (i % 2 === 0) {
                //两个等号 ：不判断类型
                //三个等号：判断类型
                let row = (
                    <View style={styles.row} key={i}>
                        <Item title={Model[i].title}
                              pic={Model[i].pic}
                              press={this.press.bind(this, Model[i]) }

                        ></Item>
                        <Item title={Model[parseInt(i) + 1].title}
                              pic={Model[parseInt(i) + 1].pic}
                              press={this.press.bind(this, Model[parseInt(i) + 1]) }
                        ></Item>
                    </View>
                );
                lists.push(row);
            }
        }

        let count = this.state.count;
        let str = null;
        if (count != 0) {
            str = '，共' + count + '只喵';
        }

        return (
            <ScrollView style={{ marginTop: 10 }}>
                {lists}
                <Text style={styles.btn} onPress={this.goCart.bind(this)} >去结算{str}</Text>
            </ScrollView>
        )
    }

    press(data) {
        this.setState({
            count: this.state.count + 1
        });

        AsyncStorage.setItem('xy-' + this.getGUID() + '-xy', JSON.stringify(data), function (err) {
            if (err) {
                alert(err)
            }
        })
    }

    getGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).toUpperCase();
    }

    goCart() {
        const {navigator} = this.props;
        let _this = this;
        if (navigator) {
            navigator.push({
                name: 'Cart',
                component: Cart,
                param:{
                    /* 这里带上参数传给另一个组件 */
                    fetchData:function () {
                        AsyncStorage.clear(function (err) {
                            if(!err){
                                _this.setState({
                                    count:0
                                })
                            }
                        })
                    }
                }
            })
        }
    }

    componentDidMount() {
        let _this = this;
        AsyncStorage.getAllKeys(
            function (err, key) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('ok:' + key.toString())
                }

                _this.setState({
                    count: key.length
                })
            }
        )
    }

}


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            data: []
        }
    }

    render() {

        let data = this.state.data;
        let price = this.state.price;
        let list = [];
        for (let i in data) {
            price += parseFloat(data[i].price);
            list.push(
                <View style={[styles.row,styles.list_item]} key={i} >
                    <Text style={styles.list_item_desc}>{data[i].title}{data[i].desc}</Text>
                    <Text style={styles.list_item_price}>价格：{data[i].price}</Text>
                </View>
            )
        }
        let num = null;
        if (price) {
            num = '，共' + price.toFixed(2) + '元'
        }

        return (
            <ScrollView style={{marginTop:20}}>
                {list}
                <Text style={styles.btn}>支付{num}</Text>
                <Text style={styles.clear} onPress={this.clearCart.bind(this)}>清空购物车</Text>

            </ScrollView>
        )
    }

    componentDidMount() {
        let _this = this;
        AsyncStorage.getAllKeys(function (e, keys) {
            if (e) {
                return
            }
            AsyncStorage.multiGet(keys, function (e, result) {
                let arr = [];
                for (let i in result) {
                    arr.push(JSON.parse(result[i][1]))
                }
                _this.setState({
                    data: arr
                })

            })
        })
    }


    clearCart() {

        if (this.props.fetchData) {
            this.props.fetchData();
        }
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }


        // let _this = this;
        // AsyncStorage.clear(function (e) {
        //     if (!e) {
        //         _this.setState({
        //             price: 0,
        //             data: null
        //         })
        //         alert('已经清空')
        //     }
        // })

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
        marginTop: 40,
        fontSize: 18,
    },

    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    img: {
        height: 100,
        backgroundColor: 'transparent'
    },
    item_text: {
        backgroundColor: '#000',
        opacity: 0.7,
        color: '#fff',
        height: 25,
        lineHeight: 18,
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