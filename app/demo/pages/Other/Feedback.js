/**
 * 列表  页面
 */

import React, {Component} from 'react';
import {
    AppRegistry,

    StyleSheet,
    Text,
    View,
    Button,
    ListView
} from 'react-native';
import RefreshableListView from 'react-native-refreshable-listview';
import delay from 'react-native-refreshable-listview/lib/delay';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import * as USER from '../../actions/UserAction';

var makeSequence = (n) => Array.apply(null, {length: n}).map((v, i) => i)

var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1.text !== r2.text
})


class Feedback extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '喵列表',
        tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
                name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    })

    constructor(props) {
        super(props);

    }

    getInitialState() {
        var rows = makeSequence(100).map((n) => ({text: 'not refreshed '+n}))
        return {dataSource: ds.cloneWithRows(rows)}
    }

    reloadItems() {
        return delay(1000).then(() => {
            var rows = makeSequence(100).map((n) => ({text: 'refreshed '+n}))
            this.setState({dataSource: ds.cloneWithRows(rows)})
        })
    }
    renderItem(item) {
        return (
            <View style={{height: 40, backgroundColor: '#ffffff', borderWidth: 0.5, borderColor: '#d6d7da'}}>
                <Text>
                    {item.text}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{marginTop: 20}}>
                <RefreshableListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem.bind(this)}
                    loadData={this.reloadItems.bind(this)}
                    refreshDescription="Refreshing items"
                    refreshPrompt="Pull down to refresh"
                />
            </View>
        )
    }

}


const styles = StyleSheet.create(
)


export default connect((state) => {
    const {UserReducer} = state;
    const routes = state.nav.routes;
    return {
        UserReducer,
        routes
    };
}, {USER})(Feedback)