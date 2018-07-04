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

export default class HomeScene extends PureComponent{
    static navigationOptions=()=>({
            headerTitle:'团购'
    })
    constructor(props){
        super(props)
    }
    render(){
        return <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('WebScene')
        }}>
            <Text>HomeScene</Text>
        </TouchableOpacity>
        <Image source={require('../../img/tabbar/tabbar_homepage.png')} style={{height:25,width:25}}/>
        <Image source={require('../../img/tabbar/tabbar_homepage_selected.png')} style={{height:25,width:25}}/>
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
})