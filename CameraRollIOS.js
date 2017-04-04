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

    goBack() {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    componentDidMount() {
        let _that = this;

        CameraRoll.getPhotos(fetchParams).then(
            (data) => {
                let edges = data.edges;
                //.map 是针对数组里的每一个元素，
                //调用回调函数 ，第一个参数是元素，第二个参数是下标，然后把每次调用的返回值按顺序再组织成一个新的数组
                let images = edges.map((edge) => {
                    return edge.node.image;
                });
                _that.setState({
                    images: images,
                });
            }
        ).catch(error => {
            console.log('出错了:' + error);

        });
    }

    saveImg(img1,img2) {
        let _that = this;
        CameraRoll.saveImageWithTag(img1).then(
            (url) => {
                if (url) {
                    let images = _that.state.images;
                    //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
                    images.unshift(
                        {
                            uri: url,
                        }
                    );
                    _that.setState({
                        images: images,
                    });
                    CameraRoll.saveImageWithTag(img2).then(
                        (url) => {
                            images.unshift(
                                {
                                    uri: url,
                                }
                            );
                            _that.setState({
                                images: images,
                            });
                            alert('图片全部保存成功');
                        }

                    ).catch(
                        error => {
                            alert('保存第二张照片失败-error-' + error);
                        }
                    );
                }
            }
        ).catch(error => {
            alert('保存第一张照片失败-error-' + error);

        });
    }


    render() {
        return (
            <ScrollView>
                <Text style={{marginBottom:20,marginTop:30}} onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <View style={styles.row}>

                    <Image resizeMode='cover'
                           style={[styles.imgHeight, styles.m5]}
                           source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943540744&di=50d6a12eecaad024fc3d661dbc8555e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f510fb30f2442a71525d087d543ad4bd11302ec.jpg' }}
                    />

                    <Image resizeMode='cover'
                           style={[styles.imgHeight, styles.m5]}
                           source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490249971337&di=dcf5647527bfa84d469eb0da5731cc02&imgtype=0&src=http%3A%2F%2Fimg.go007.com%2F2017%2F02%2F21%2F094036d74261eeed_6.jpg' }}
                    />
                </View>

                <View>
                    <Text
                        onPress={this.saveImg.bind(this,  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943540744&di=50d6a12eecaad024fc3d661dbc8555e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f510fb30f2442a71525d087d543ad4bd11302ec.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490249971337&di=dcf5647527bfa84d469eb0da5731cc02&imgtype=0&src=http%3A%2F%2Fimg.go007.com%2F2017%2F02%2F21%2F094036d74261eeed_6.jpg') }
                        style={styles.saveImg}
                    >
                        保存图片到相册
                    </Text>
                </View>

                <View style={styles.imageGrid}>
                    {
                        this.state.images.map((image) =>
                            <Image
                                style={styles.image}
                                resizeMode='stretch'
                                source={image}
                                key={image.uri}
                            />
                        )
                    }
                </View>

            </ScrollView>
        );
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
        height: 170,
        width: 170,
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