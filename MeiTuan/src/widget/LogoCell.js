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
import screen from '../common/screen';
import color from './color';
import {Heading2} from '../widget/Text';

export default class LogoCell extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        let {title,onPress,style}=this.props;
        return (
            <TouchableOpacity style={[styles.container,style]} onPress={onPress}>  
                <Heading2 style={{color:color.primary}}>{title}</Heading2>
            </TouchableOpacity>
        )
    }
}


const styles=StyleSheet.create({
    container:{
       width:screen.width*0.75,
       height:44,
       borderWidth:1,
       borderColor:color.primary,
       borderRadius:22,
       alignItems:'center',
       justifyContent:'center',
    },  
})