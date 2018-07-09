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

export default class Button extends PureComponent{
    static defaultProps={
        disabled:false,
        activeOpacity:0.8,
    }                              //设置一些默认的属性，和默认的样式一个道理
    constructor(props){
        super(props)
    }
    render(){
        let  {onPress,disabled,style,title,titleStyle,activeOpacity}=this.props;
        return (
            <TouchableOpacity
                style={[styles.container,style]}
                onPress={onPress}
                disabled={disabled}
                activeOpacity={activeOpacity}
            >
                <Text style={titleStyle}>{title}</Text>
            </TouchableOpacity>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
})