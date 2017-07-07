

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
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
    buttons: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: 300,
        height: 200,
        padding: 20,
    },

    startupButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 5,
        margin: 8,
        padding: 8,
        alignItems: 'center',
    },


    progressBarContainer: {
        height: 10,
        margin: 10,
        borderColor: '#eeeeee',
        borderWidth: 2,
    },
    progressBar: {
        alignSelf: 'flex-start',
        flex: 1,
        backgroundColor: '#ff0000',
    },
    viewPager: {
        flex: 1,
    },
    buttonText: {
        color: 'white',
    },
});

AppRegistry.registerComponent('new_project', () => new_project);
