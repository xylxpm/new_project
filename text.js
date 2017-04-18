/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    PanResponder,
    ProgressBarAndroid,
    View
} from 'react-native';

import Dimensions from 'Dimensions';

let totalWidth = Dimensions.get('window').width;




export default class text extends Component {
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

    render() {
        return (
            <View style={styles.container}>
                <ProgressBarAndroid
                    styleAttr='Horizontal'
                    style={styles.progressViewStyle}
                    indeterminate={false}
                    progress={this.state.progress}
                />
                <Text style={styles.textStyle}>
                    选择了{Math.round(this.state.progress * 100)}%
                </Text>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    progressViewStyle: {
        width: totalWidth - 40,
        left: 20,
        top: 50
    },
    touchViewStyle: {
        width: totalWidth - 20,
        height: 40,
        backgroundColor: 'transparent',


    },
    textStyle: {
        fontSize: 30,
        left: 20,
        top: 70
    }


})