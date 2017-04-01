/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * DatePickerIOS 组件
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    DatePickerIOS,
    TouchableHighlight,
    View,
} from 'react-native';

import CustomActionSheet from 'react-native-custom-action-sheet';

export default class DateIOS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datePickerModalVisible: false,
            chooseDate: new Date(),
            date1: new Date(),
            date2: new Date(),
            date3: new Date(),
        };
    }
    onDateChange1(date){
        this.setState({
            date1:date,
        });
    }
    onDateChange2(date){
        this.setState({
            date2:date,
        });
    }
    onDateChange3(date){
        this.setState({
            date3:date,
        });
    }

    goBack = () => {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _showDatePicker() {
        this.setState({datePickerModalVisible: !this.state.datePickerModalVisible});
    };

    _onDateChange(date) {
        this.setState({
            chooseDate: date
        });
    };


    render() {
        let datePickerModal = (   //日期选择器组件 (根据标记赋值为 选择器 或 空)
            this.state.datePickerModalVisible ?
                <CustomActionSheet
                    modalVisible={this.state.datePickerModalVisible}  //显隐标记
                    onCancel={()=>this._showDatePicker()}>
                    <View style={styles.datePickerContainer}>
                        <DatePickerIOS style={styles.flex}
                            mode={"date"}   //选择器模式: 'date'(日期), 'time'(时间), 'datetime'(日期和时间)
                            minimumDate={new Date()}  //最小时间 (这里设置的是当前的时间)
                            minuteInterval={1} //最小时间间隔 (这里设置的是30分钟)
                            date={this.state.chooseDate}  //默认的时间
                            onDateChange={this._onDateChange.bind(this)}  //日期被修改时回调此函数
                        />
                    </View>
                </CustomActionSheet> : null
        );

        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <TouchableHighlight
                    style={{backgroundColor:'cyan', padding:5}}
                    onPress={()=>this._showDatePicker()}  //按钮: 点击触发方法
                    underlayColor='gray'
                >
                    <Text >show DatePick</Text>
                </TouchableHighlight>
                {datePickerModal}
            </View>
        )

    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    txt: {
        fontSize: 18,
        color: 'red'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },

    item: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 30,
        borderWidth: 1,
        padding: 6,
        borderColor: '#ddd',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    datePickerContainer: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 10,
    },
})