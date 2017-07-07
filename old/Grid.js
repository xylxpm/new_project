/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * listview组件高级模式
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    ListView,
    TouchableHighlight,
    RecyclerViewBackedScrollView,
    View,
} from 'react-native';

var URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


export default class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    }

    goBack = () => {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    加载ing。。。
                </Text>
            </View>
        )
    }


    _renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image style={styles.thumbnail} source={{uri:movie.posters.thumbnail}}/>
                <Text style={styles.title}>{movie.year}</Text>
            </View>
        )
    }

    fetchData() {
        fetch(URL).then((response) => response.json()).then((responseData) => {
            this.setState({
                loaded: true,
                dataSource: this.state.dataSource.cloneWithRows(responseData.movies)
            })
        }).done();
    }

    componentDidMount() {
        this.fetchData()
    }


    render() {
        if (!this.state.loaded) {
            return this._renderLoadingView()
        }

        return (
            <View>
                <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <ListView
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderMovie}
                    contentContainerStyle={styles.list}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:'#f5fcff',
        margin:10,
        alignItems:'center'
    },
    list:{
        justifyContent:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    listView:{
        paddingTop:20,
        backgroundColor:'#f5fcff',
    },
    thumbnail:{
        width:80,
        height:80,
        borderRadius:10
    },
    title:{
        fontSize:14
    },
    container1: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
});