

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    ScrollView,
    Text,
    Image,
    View,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489943540744&di=50d6a12eecaad024fc3d661dbc8555e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f510fb30f2442a71525d087d543ad4bd11302ec.jpg';



export default class Menu extends Component {

  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri:uri }}/>
          <Text style={styles.name}>喵星人cookie</Text>
        </View>

        <Text
          onPress={() => this.props.onItemSelected('关于喵星人')}
          style={styles.item}>
          关于喵星人
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('我是cookie')}
          style={styles.item}>
            我是cookie
        </Text>
          <Text
              onPress={() => this.props.onItemSelected('小疯子和小公主')}
              style={styles.item}>
              小疯子和小公主
          </Text>
      </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'gray',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 20,
    },
    item: {
        fontSize: 16,
        fontWeight: '300',
        paddingTop: 10,
    },
});