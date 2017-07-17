import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

import App from './demo/App';




export default class Root extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.flex} >
                <App></App>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
});

AppRegistry.registerComponent('new_project', () => Root);

