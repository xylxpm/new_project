/**
 * DateTimePicker 的api见GitHub https://github.com/mmazzarolo/react-native-modal-datetime-picker
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Picker,
    TouchableOpacity,
    View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';

var PickerData = [
    '11',
    '22',
    '33',
    '44',
    '55',
    '66'
]
var SecondData = [
    '11a',
    '22a',
    '33a',
    '44a',
    '55a',
    '66a'
]
var ThirdData = [
    '111',
    '222',
    '333',
    '444',
    '555',
    '666'
]

let jsonData = require('../res/allprovinces.json');

class HomeScreen extends Component {
    static navigationOptions = {
        title: '主页',
    };

    render() {
        return (
            <View  style={[styles.flex]}>
                <MyPickerFour></MyPickerFour>
            </View>
        );
    }
}


class MyPickerOne extends Component{
    constructor(props){
        super(props);
        this.state={
            language:null
        }
    }

    render(){

        return(
            <View style={styles.flex}>
                <Text>初级picker</Text>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={lang=>this.setState({language:lang})}
                    mode='dialog'
                >
                    <Picker.Item label="java1" value="java1" />
                    <Picker.Item label="java2" value="java2" />
                    <Picker.Item label="java3" value="java3" />
                </Picker>

            </View>
        )
    }

}


class MyPickerTwo extends Component{
    constructor(props){
        super(props);
        this.state={
            firstPickerValue:'1',
            secondPickerValue:PickerData[0]
        }
    }

    upDateFContent(obj){
        this.setState({
            firstPickerValue:obj
        })
    }

    upDateCContent(obj){
        this.setState({
            secondPickerValue:obj
        })
    }


    renderPicker(key,i){
        return <Picker.Item label={key} value={key} key={i}/>
    }

    render(){
        return(
            <View style={styles.flex}>
                <Text>高级一点的。</Text>
                <Text>{this.state.firstPickerValue}</Text>
                <Picker
                    ref='firstPicker'
                    selectedValue={this.state.firstPickerValue}
                    onValueChange={(obj)=>this.upDateFContent(obj)}
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                </Picker>
                <Text>{this.state.secondPickerValue}</Text>
                <Picker
                    selectedValue={this.state.secondPickerValue}
                    onValueChange={(obj)=>this.upDateCContent(obj)}
                >
                    {PickerData.map((key,i)=>this.renderPicker(key,i))}
                </Picker>
            </View>
        )
    }
}


class MyPickerThree extends Component{
    constructor(props){
        super(props);
        this.state={
            firstPickerValue: PickerData[0],
            secondPickerValue: SecondData[0],
            thirdPickerValue: ThirdData[0]
        }
    }
    upDateFContent(obj){
        this.setState({
            firstPickerValue:obj
        })
    }

    upDateSContent(obj){
        this.setState({
            secondPickerValue:obj
        })
    }


    upDateCContent(obj){
        this.setState({
            thirdPickerValue:obj
        })
    }

    renderPicker(key,i){
        return <Picker.Item label={key} value={key} key={i}/>
    }

    render(){
        return(
            <View style={styles.flex}>
                <Text>多列</Text>
                <Text>{this.state.firstPickerValue},{this.state.secondPickerValue},{this.state.thirdPickerValue}</Text>
                <View style={styles.pickerView}>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.state.firstPickerValue}
                        onValueChange={(obj)=>this.upDateFContent(obj)}
                    >
                        {PickerData.map((key,i)=>this.renderPicker(key,i))}
                    </Picker>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.state.secondPickerValue}
                        onValueChange={(obj)=>this.upDateSContent(obj)}
                    >
                        {SecondData.map((key,i)=>this.renderPicker(key,i))}
                    </Picker>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.state.thirdPickerValue}
                        onValueChange={(obj)=>this.upDateCContent(obj)}
                    >
                        {ThirdData.map((key,i)=>this.renderPicker(key,i))}
                    </Picker>
                </View>
            </View>
        )
    }
}

class MyPickerFour extends  Component{
    constructor(props){
        super(props);
        this.state={
            isDateTimePickerVisible: false,
        }
    }


    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        //  console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    render () {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <Text>Show TimePicker</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({

    flex: {
        flex: 1,
    },
    margin25: {
        marginTop: 25,
    },

    pickerView: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 30
    },
    pickerStyle: {
        flex: 1
    }

});


const Root = StackNavigator({
    Home: {screen: HomeScreen}
});


module.exports = Root;
