/**
 * Copyright (c) 2018-7-3
 * All rights reserved
 * 
 * @flow taopoppy
 */

import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import {TabNavigator,TabBarBottom } from 'react-navigation'

export default class WebScene extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return <View style={styles.container}>
        <Text>WebScene</Text>
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
})