/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * DatePickerAndroid与TimePickerAndroid 组件
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    DatePickerAndroid,
    TimePickerAndroid,
    View,
} from 'react-native';

export default class DateTimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Date_result: '',
            Time_resule: ''
        }
    }

    componentWillMount() {
    }

    goBack = () => {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _click1() {
        let _this = this;
        let d = new Date();
        let mind = new Date(2017, 1, 1);
        let maxd = new Date(2017, 12, 12);
        let optionDate = {
            date: d,
            minDate: mind,
            maxDate: maxd
        }
        DatePickerAndroid.open(optionDate).then(
            result => {
                if (result.action === DatePickerAndroid.dismissedAction) {
                    _this.setState({
                        Date_result: '用户没有选择日期'
                    })
                } else {
                    _this.setState({
                        Date_result: '用户选择了：' + result.year + '年' + (result.month + 1) + '月' + result.day + '日'
                    })
                }
            }
        ).catch(
            error => {
                _this.setState({
                    Date_result: 'Date出错了'
                })
            }
        );

    }

    _click2() {
        let _this = this;
        let h = 18;
        let m = 55;
        let _is24Hour = true;
        let optionTime = {
            // hour: h,
            // minute: m,
            is24Hour: _is24Hour
        }
        TimePickerAndroid.open(optionTime).then(
            result => {
                if (result.action !== TimePickerAndroid.timeSetAction) {
                    _this.setState({
                        Time_resule: '用户没有选择时间'
                    })
                } else {
                    _this.setState({
                        Time_resule: '用户选择了：' + result.hour + "点" + result.minute + "分"
                    })
                }
            }
        ).catch(
            error => {
                _this.setState({
                    Time_resule: 'Time出错了'
                })
            }
        );
    }


    render() {
        return (
            <View style={[styles.flex,styles.center]}>
                <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
                    返回欢迎页
                </Text>
                <View style={{marginTop:20,marginBottom:20}}>
                    <Text onPress={this._click1.bind(this)}>打开日期选择</Text>
                    <Text onPress={this._click2.bind(this)}>打开时间选择</Text>
                </View>

                <Text style={styles.txt}>{this.state.Date_result}</Text>
                <Text style={styles.txt}>{this.state.Time_resule}</Text>
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
    },
    txt: {
        fontSize: 18,
        color: 'red'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },


})