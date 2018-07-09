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

export default class GroupPurchaseScene extends PureComponent{
    constructor(props){
        super(props)
        alert(JSON.stringify(this.props.navigation.state.params.info))
    }
    render(){
        return <View style={styles.container}>
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
})