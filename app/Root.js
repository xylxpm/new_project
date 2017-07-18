import React, {Component} from 'react';
import {
    AppRegistry,

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
                <App></App>
        )
    }
}

AppRegistry.registerComponent('new_project', () => Root);

