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
        let titleElement=this.props.title && (
            <Text style={[styles.title,this.props.titleStyle]}>{this.props.title}</Text>
        )
        let iconElement=this.props.icon && (
            <Image source={this.props.icon} style={[styles.icon,this.props.iconStyle]}/>
        )
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                {titleElement}
                {iconElement}
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
    icon:{
        width:27,
        height:27,
        margin:8,
    },
})