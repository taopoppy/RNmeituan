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

export default class Separator extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={styles.separator}/>
        )
    }
}


const styles=StyleSheet.create({
    separator:{
        height:StyleSheet.hairlineWidth,
        width:screen.width,
        backgroundColor:color.border,
    },
})