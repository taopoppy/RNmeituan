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
import color from './color';
import {Heading4} from './Text';

export default class ThirdPartLogin extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        let {icon,title,onPress}=this.props;
        return <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={icon} style={styles.icon}/>
            <Heading4>{title}</Heading4>
        </TouchableOpacity>
    }
}


const styles=StyleSheet.create({
    container:{
       alignItems:'center',
       justifyContent:'center',
       marginHorizontal:20,
    },
    icon:{
        width:40,
        height:40,
        borderRadius:20,
        marginBottom:5,
        tintColor:'#777777',
    },
})