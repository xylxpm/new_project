/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * PanResponder api（触摸api）
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    PanResponder,
    ProgressViewIOS,
    View
} from 'react-native';

import Dimensions from 'Dimensions';

let totalWidth = Dimensions.get('window').width;

export default class PanResponderIOS extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0
        }
    }

    componentWillMount() {
        this.watcher = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: this._onPanResponderGrant,
            onPanResponderMove: this._onPanResponderMove
        })
    }

    _onPanResponderGrant = (e, gestureState) => {
        let touchPonitX = gestureState.x0;
        let progress;
        if (touchPonitX < 20) {
            progress = 0;
        } else {
            if (touchPonitX > (totalWidth - 20)) {
                progress = 1
            } else {
                progress = (touchPonitX - 20) / (totalWidth - 40)
            }
        }
        this.setState({
            progress:progress
        })
    }

    _onPanResponderMove = (e, gestureState) => {
        let touchPonitX = gestureState.moveX;
        let progress;
        if (touchPonitX < 20) {
            progress = 0;
        } else {
            if (touchPonitX > (totalWidth - 20)) {
                progress = 1
            } else {
                progress = (touchPonitX - 20) / (totalWidth - 40)
            }
        }
        this.setState({
            progress:progress
        })
    }
    goBack = () => {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <ProgressViewIOS
                    style={styles.progressViewStyle}
                    progress={this.state.progress} />
                <Text style={styles.textStyle}>你选择了{Math.round(this.state.progress * 100) }%</Text>
                <View style={styles.touchViewStyle}
                    {...this.watcher.panHandlers} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome:{
        marginTop:20,
    },
    progressViewStyle: {
        width: totalWidth - 40,
        left: 20,
        top: 40
    },
    touchViewStyle: {
        width: totalWidth - 20,
        height: 40,
        backgroundColor: 'transparent',

        position: 'absolute',
        left: 10,
        top: 55,
        // opacity:0.5
    },
    textStyle: {
        fontSize: 30,
        left: 20,
        top: 70
    }
})


