/**
 * 视频列表  页面
 */

import React, {Component, PropTypes} from 'react';
import { AlertIOS,
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button
} from 'react-native';

import Video from 'react-native-video';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paused: true
        };
    }

    static navigationOptions = ({navigation}) => ({
        title: '喵视频'
    })

    _play() {
        this.setState({
            paused: !this.state.paused
        })
    }


    render() {
        return (
            <View style={{flex:1}}>

                <Video source={require('../res/broadchurch.mp4')} // 视频的URL地址，或者本地地址，都可以.
                       rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                       volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                       muted={false}                // true代表静音，默认为false.
                       paused={this.state.paused}               // true代表暂停，默认为false
                       resizeMode="cover"           // 视频的自适应伸缩铺放行为，
                       repeat={true}                // 是否重复播放
                       playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
                       playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                       onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
                       onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
                       onProgress={this.setTime}    //  进度控制，每250ms调用一次，以获取视频播放的进度
                       onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
                       onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
                       style={styles.backgroundVideo} />

                <Button title={this.state.paused === false ? '暂停' : '播放'} onPress={this._play.bind(this)}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    backgroundVideo: {
        height:160
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controls: {
        backgroundColor: "transparent",
        borderRadius: 5,
        position: 'absolute',
        bottom: 44,
        left: 4,
        right: 4,
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
    },
    innerProgressCompleted: {
        height: 20,
        backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
        height: 20,
        backgroundColor: '#2C2C2C',
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingBottom: 10,
    },
    skinControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ignoreSilentSwitchControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: "white",
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12,
    },
    nativeVideoControls: {
        top: 184,
        height: 300
    }
});

export default Feedback;