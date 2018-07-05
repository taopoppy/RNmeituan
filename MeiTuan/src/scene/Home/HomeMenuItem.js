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
    Dimensions,
} from 'react-native';
import {TabNavigator,TabBarBottom } from 'react-navigation';
import screen from '../../common/screen';

/**
 *菜单样式组件，三个参数，汉字，图标，单击事件
 */
export default class HomeMenuItem extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        let {title,icon,onPress}=this.props;
        return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={icon} style={styles.icon}/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
       
        )
    }
}


const styles=StyleSheet.create({
    container:{
        height:screen.width/5,
        width:screen.width/5,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        width:screen.width/9,
        height:screen.width/9,
        margin:5,
    },
    text:{
        fontSize:10,
    },
})