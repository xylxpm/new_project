/**
 * Sample React Native App
 * https://github.com/exponent/react-native-tab-navigator
 * TabNavigator组件
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    ListView,
    TouchableHighlight,
    RecyclerViewBackedScrollView,
    View,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

export default class TabNavigators extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedTab:'home'
        }
    }

    goBack = () => {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        var homeView=(
            <View style={[styles.flex,styles.center]}>
                <Text style={styles.text}>这里是首页</Text>
                <Text onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
            </View>
        );
        var settingView=(
            <View style={[styles.flex,styles.center]}>
                <Text style={styles.text}>这里是设置</Text>
                <Text onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
            </View>
        );
        return (
            <TabNavigator
                tabBarStyle={{height:60}}
            >
                <TabNavigator.Item
                    selected={this.state.selectedTab==='home'}
                    title="首页"
                    renderIcon={()=><Image style={styles.img} source={require('./img/home_tab_home_normal.png') }/>}
                    renderSelectedIcon={()=><Image style={styles.img} source={require('./img/home_tab_home_pressed.png') }/>}
                    onPress={()=>this.setState({selectedTab:'home'})}
                >
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab==='profile'}
                    title="设置"
                    renderIcon={()=><Image style={styles.img} source={require('./img/home_tab_setting_normal.png') }/>}
                    renderSelectedIcon={()=><Image style={styles.img} source={require('./img/home_tab_setting_pressed.png') }/>}
                    onPress={()=>this.setState({selectedTab:'profile'})}
                >
                    {settingView}
                </TabNavigator.Item>
            </TabNavigator>
        )
    }

}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    img:{
        width:40,
        height:33
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:16
    }
});