/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 引导页
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Navigator,
    Platform,
    BackAndroid,
    ToastAndroid,
    ViewPagerAndroid
} from 'react-native';

import LikeCount from './LikeCount.js';
import Button from './Button.js';
import HomeUI from './HomeUI.js';
import Swpiers from './Swpiers.js';
import WebViews from './WebViews.js';
import ListViews from './ListViews.js';
import Grid from './Grid.js';
import TabNavigator from './TabNavigators.js';
import SideMenu from './SideMenus.js';
import ShoppingCart from './ShoppingCart.js';
import DateTimePicker from './DateTimePicker.js';
import NetInfoRN from './NetInfoRN.js';
import CameraRollAndroid from './CameraRollAndroid.js';
import Timer from  './Timer.js'



const PAGES = 5;
const BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];
const IMAGELIST = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943540744&di=50d6a12eecaad024fc3d661dbc8555e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f510fb30f2442a71525d087d543ad4bd11302ec.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943561674&di=f8c34d6fb1a4ece7807bde0a2429763e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F07%2F20150807184842_3Yhin.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943576131&di=3b6f187f402a106feec9eade686fb990&imgtype=0&src=http%3A%2F%2F5.595818.com%2F2014%2Fpic%2F000%2F364%2F883525f3226887a0ad8ce65848c51999.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1489933504&di=a5f7e81f3279d59b0ccc2dc56f6e965c&src=http://img.t.388g.com/6/images/201610/1477037503228025.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943619895&di=ffad3f79e684e0f540dad44cc2636f06&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201511%2F14%2F20151114035004_vFC2J.jpeg',
];


class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var fractionalPosition = (this.props.progress.position + this.props.progress.offset);
        var progressBarSize = (fractionalPosition / (PAGES - 1) ) * this.props.size;

        return (
            <View style={[styles.progressBarContainer,{width:this.props.size}]}>
                <View style={[styles.progressBar,{width:progressBarSize}]}></View>
            </View>
        )
    }
}


class WelcomeUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            animationAreEnabled: true,
            progress: {
                position: 0,
                offset: 0
            }
        }
    }

    render() {
        var pages = [];
        for (var i = 0; i < PAGES; i++) {
            var pageStyles = {
                backgroundColor: BGCOLOR[i % BGCOLOR.length],
                alignItems: 'center',
                padding: 20
            }

            if (i < PAGES - 1) {
                pages.push(
                    <View key={i} style={pageStyles} collapsable={false}>
                        <Image style={styles.image} source={{uri:IMAGELIST[i % BGCOLOR.length]}}/>
                        <LikeCount/>
                    </View>
                )
            } else {
                pages.push(
                    <View key={i} style={pageStyles} collapsable={false}>
                        <Image style={styles.image} source={{uri:IMAGELIST[i % BGCOLOR.length]}}/>
                        <LikeCount/>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={this._click} style={styles.startupButton}>
                                <Text style={styles.likeText}>HomeUI</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._click2} style={styles.startupButton}>
                                <Text style={styles.likeText}>Swpier</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._click3} style={styles.startupButton}>
                                <Text style={styles.likeText}>webview</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={this._click4} style={styles.startupButton}>
                                <Text style={styles.likeText}>listview</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._click5} style={styles.startupButton}>
                                <Text style={styles.likeText}>Grid</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._click6} style={styles.startupButton}>
                                <Text style={styles.likeText}>TabBar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this._click7} style={styles.startupButton}>
                                <Text style={styles.likeText}>SideMenu</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={this._click8} style={styles.startupButton}>
                                <Text style={styles.likeText}>购物车</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._click9} style={styles.startupButton}>
                                <Text style={styles.likeText}>日期时间</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this._click10} style={styles.startupButton}>
                                <Text style={styles.likeText}>网络请求</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._click11} style={styles.startupButton}>
                                <Text style={styles.likeText}>图片api</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={this._click12} style={styles.startupButton}>
                                <Text style={styles.likeText}>timer</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                )
            }
        }

        var {page, animationAreEnabled} = this.state;


        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    onPageScroll={this.onPageScroll}
                    onPageSelected={this.onPageSelected}
                    ref={viewPager=>{this.viewPager = viewPager}}
                >
                    {pages}
                </ViewPagerAndroid>
                <View style={styles.buttons}>
                    { animationAreEnabled ?
                        <Button text="关闭动画" enabled={true} onPress={()=>this.setState({animationAreEnabled:false})}/> :
                        <Button text="开启动画" enabled={false} onPress={()=>this.setState({animationAreEnabled:true})}/>
                    }
                </View>


                <View style={styles.buttons}>
                    <Button text="首屏" enabled={page > 0} onPress={() => this.go(0)}/>
                    <Button text="上屏" enabled={page > 0} onPress={() => this.move(-1)}/>

                    <Text style={styles.buttonText}>页：{page + 1} / {PAGES}</Text>
                    <ProgressBar size={100} progress={this.state.progress}/>

                    <Button text="下屏" enabled={page < PAGES - 1} onPress={() => this.move(1)}/>
                    <Button text="末屏" enabled={page < PAGES - 1} onPress={() => this.go(PAGES - 1)}/>
                </View>
            </View>

        )
    }

    _click = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'HomeUI',
                component: HomeUI
            })
        }
    }

    _click2 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'Swpiers',
                component: Swpiers
            })
        }
    }

    _click3 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'WebViews',
                component: WebViews
            })
        }
    }

    _click4 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'ListViews',
                component: ListViews
            })
        }
    }

    _click5 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'Grid',
                component: Grid
            })
        }
    }

    _click6 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'TabNavigator',
                component: TabNavigator
            })
        }
    }

    _click7 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'SideMenu',
                component: SideMenu
            })
        }
    }

    _click8 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'ShoppingCart',
                component: ShoppingCart
            })
        }
    }

    _click9 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'DateTimePicker',
                component: DateTimePicker
            })
        }
    }

    _click11 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'CameraRollAndroid',
                component: CameraRollAndroid
            })
        }
    }

    _click10 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'NetInfoRN',
                component: NetInfoRN
            })
        }
    }

    _click12 = () => {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'Timer',
                component: Timer
            })
        }
    }

    move(delta) {
        var page = this.state.page + delta;
        if (page < 0) {
            page = 0
        }
        if (page >= PAGES) {
            page = PAGES
        }
        this.go(page);
    }


    go(page) {
        if (this.state.animationAreEnabled) {
            this.viewPager.setPage(page);
        } else {
            this.viewPager.setPageWithoutAnimation(page);
        }
        this.setState({page});
    }

    onPageSelected = (e) => {
        this.setState({
            page: e.nativeEvent.position
        })
    }


    onPageScroll = (e) => {
        this.setState({
            progress: e.nativeEvent
        })
    }
}


class new_project extends Component {
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener("handwareBackPress", this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener("handwareBackPress", this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const navigator = this.refs.navigator;
        const routers = navigator.getCurrentRoutes();
        if (routers.length > 2) {
            navigator.pop();
            return true
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
            return true;
        }
    }

    render() {
        let defaultName = 'WelcomeUI';
        let defauleComponent = WelcomeUI;
        return (
            <Navigator
                initialRoute={{name:defaultName,component:defauleComponent}}
                ref='navigator'
                configureScene={
                    (route)=>{
                        return Navigator.SceneConfigs.FloatFromRight;
                    }
                }
                renderScene={
                    (route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.param}  navigator={navigator}/>
                    }
                }

            />

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
