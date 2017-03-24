/**
 * Sample React Native App
 * https://github.com/react-native-community/react-native-side-menu
 * side-menu组件
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    ScrollView,
    View
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Menu from './Menu.js';



const uri_image_menu = 'http://image18-c.poco.cn/mypoco/myphoto/20160605/09/17351665220160605093956066.png';

export default class SideMenus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: '关于喵星人'
        }
    }

    toggle(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    updateMenuState(isopen){
        this.setState({isOpen:isopen})
    }

    onMenuItemSelected = (item)=>{
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    }

    goBack=()=>{
        const {navigator} =this.props;
        if(navigator){
            navigator.pop();
        }
    }
    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected}/>
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}
                menuPosition='right'
            >

                <View style={styles.container}>
                    <Text style={styles.instructions}>
                        点击的是: {this.state.selectedItem}
                    </Text>
                </View>
                <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <Button style={styles.button} onPress={() => this.toggle()}>
                    <Image
                        source={{uri:uri_image_menu}} style={{width: 50, height: 50}} />
                </Button>
            </SideMenu>
        )
    }
}

class Button extends Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress();
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={this.props.style}
                onPress={this.handlePress.bind(this)}
            >
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }

}



const styles = StyleSheet.create({

    button: {
        position: 'absolute',
        top: 20,
        right:10,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})

