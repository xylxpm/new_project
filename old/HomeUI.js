/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 首页组件
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
    View
} from 'react-native';

var URL='https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class HomeUI extends Component{

    constructor(props){
        super(props);
        this.state={
            movies:null
        }
    }

    goBack=()=>{
        const {navigator} =this.props;
        if(navigator){
            navigator.pop();
        }
    }

    _renderLoadingView(){
         return(
             <View style={styles.container}>
                 <Text style={styles.welcome} >
                     加载ing。。。
                 </Text>
             </View>
         )
    }


    _renderMovie(movie){

        return(
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <Image style={styles.thumbnail} source={{uri:movie.posters.profile}}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    }

    fetchData(){
        fetch(URL).then((response)=>response.json()).then((responseData)=>{
            this.setState({
                movies:responseData.movies[4]
            })
        }).done();
    }

    componentDidMount(){
        this.fetchData()
    }


    render() {
        if(!this.state.movies){
            return this._renderLoadingView()
        }
        var movie = this.state.movies;
        return this._renderMovie(movie)
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    thumbnail: {
        width: 53,
        height: 81,

    },

    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },

});