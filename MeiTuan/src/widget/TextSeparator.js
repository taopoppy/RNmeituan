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
import screen from '../common/screen';
import color from './color';
import {Heading4} from './Text';

export default class TextSeparator extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        let {title}=this.props;
        return (
            <View style={styles.container}>
                <View style={styles.sperator}/>
                <View style={styles.text}>
                    <Heading4>{title}</Heading4>
                </View>
                <View style={styles.sperator}/>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    separator:{
        height:StyleSheet.hairlineWidth,
        width:screen.width,
        backgroundColor:color.border,
    },
    sperator:{
        flex:1,
        height:StyleSheet.hairlineWidth,
        backgroundColor:color.border,
    },
    text:{
        alignItems:'center',
        justifyContent:'center',
    },
})