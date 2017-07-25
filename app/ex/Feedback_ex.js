/**
 * 列表  页面
 */

import React, {Component} from 'react';
import {
    View,
    ListView,
    Image,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    Alert,
    ScrollView,
    Dimensions,
    InteractionManager,
    AppRegistry,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import * as USER from '../../actions/UserAction';
import PullRefreshScrollView from 'react-native-pullrefresh-scrollview';

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
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.data = ['有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊'];
        this.state = {
            dataSource: ds.cloneWithRows(this.data),
        }
    }

    onRefresh(PullRefresh) {
        console.log('refresh');
        // var self = this;
        setTimeout(function () {
            // self.data = self.data.concat(['有种你滑我啊(下拉)']);
            // self.setState({
            //     dataSource: self.state.dataSource.cloneWithRows(self.data)
            // });
           PullRefresh.onRefreshEnd();
        }, 2000);

    }

    onLoadMore(PullRefresh) {
        var self = this;
        setTimeout(function () {
            self.data = self.data.concat(['有种你滑我啊(上拉)']);
            self.setState({
                dataSource: self.state.dataSource.cloneWithRows(self.data)
            });
        }, 2000);
        console.log('onLoadMore');
    }


    render() {
        return (

            <ListView

                renderScrollComponent={(props) => <PullRefreshScrollView
                    onRefresh={(PullRefresh)=>this.onRefresh(PullRefresh)}
                    onLoadMore={(PullRefresh)=>this.onLoadMore(PullRefresh)}
                    useLoadMore={1}{...props} />}

                dataSource={this.state.dataSource}
                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
                renderRow={(rowData) => <View style={styles.rowItem}><Text style={{fontSize:16}}>{rowData}</Text></View>}
            />
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 64,
        backgroundColor: '#293447',
    },
    rowItem: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
});

export default connect((state) => {
    const {UserReducer} = state;
    const routes = state.nav.routes;
    return {
        UserReducer,
        routes
    };
}, {USER})(Feedback)