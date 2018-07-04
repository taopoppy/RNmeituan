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
    TouchableOpacity,
} from 'react-native';
import {TabNavigator,TabBarBottom } from 'react-navigation'


export default class NavigationItem extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        //下面的style是个数组，如果外部没有传进来titleStyle，就用内部的
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Text style={[styles.title,this.props.titleStyle]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
        
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:15,
        color:'#333333',
        margin:8,
    },
})