/**
 * 视频列表  页面
 */

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Video from 'react-native-video';

class Feedback extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '喵视频'
    })




    render() {
        return (
            <View>
                <Video
                    repeat
                    resizeMode='cover'
                    source={{ uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0', type: 'mpd' }}
                    style={styles.backgroundVideo}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default Feedback;