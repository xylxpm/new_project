/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * listview组件
 */

import React, { Component } from 'react';
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


export default class ListViews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded:false,
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=> row1 !== row2,
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
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    }

    fetchData() {
        fetch(URL).then((response)=>response.json()).then((responseData)=>{
            this.setState({
                loaded:true,
                dataSource:this.state.dataSource.cloneWithRows(responseData.movies)
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
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 10,
        marginBottom: 10
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
        marginBottom: 20
    },
    thumbnail: {
        width: 53,
        height: 81,

    },

    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
});