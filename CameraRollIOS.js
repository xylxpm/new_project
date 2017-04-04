/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * CameraRoll api  图片的操作（IOS）
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    CameraRoll,
    Image,
    ListView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

let fetchParams = {
    first: 10,
    assetType: 'Photos'
}

let imgUrl = 'http://www.reactnative.vip/img/';


export default class CameraRollIOS extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        let _this =this;
        CameraRoll.getPhotos(fetchParams).then(
            (data)=>{
                let edges = data.edges;
                let images = edges.map((edge)=>{
                    return edge.node.image;
                });
                _this.setState({
                    images:images
                })
            }
        ).catch(
            (err)=>{
                alert(err);
            }
        )
    }

    saveImg(img) {
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.row}>
                    <View style={styles.flex}>
                        <Image resizeMode='stretch' style={[styles.m5,styles.imgHeight]}
                               source={{uri:imgUrl+'reactnative.png'}}/>
                    </View>
                </View>

                <Text style={styles.saveImg} onPress={this.saveImg.bind(this,'reactnative.png')}>保存到相册</Text>


                <View style={styles.imageGrid}>
                    {this.state.images.map((image) => <Image style={styles.image} resizeMode='stretch' key={image.url} source={image}/>)}
                </View>

            </ScrollView>
        )
    }


}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    m5: {
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    row: {
        flexDirection: 'row'
    },
    imageGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 10
    },
    imgHeight: {
        height: 180
    },
    saveImg: {
        flex: 1,
        height: 30,
        textAlign: 'center',
        marginTop: 20,
        color: '#FFF',
        lineHeight: 20,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold',
        backgroundColor: '#3BC1FF',
    }
})