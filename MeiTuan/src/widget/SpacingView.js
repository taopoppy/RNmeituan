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
import color from './color';

export default class SpacingView extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return <View style={styles.container}/>
    }
}


const styles=StyleSheet.create({
    container:{
        backgroundColor:color.paper,
        height:14,
    },
})