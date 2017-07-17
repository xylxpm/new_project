/**
 * 某个课程的列表
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class Category_List extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = ({navigation}) => ({
        title: '课程的列表',

    })


    render(){
        return(
            <View style={styles.flex}>
                <Text>课程的列表</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

})




export default Category_List