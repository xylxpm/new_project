/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


class new_project extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>23423</Text>
        );
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
        height: 100,
        backgroundColor: 'transparent'
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
