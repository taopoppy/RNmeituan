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
import screen from '../../common/screen';

export default class HomeGridItem extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <TouchableOpacity style={styles.container}>
                <View>
                    <Text style={styles.titleText}>吃吃喝喝</Text>
                    <Text style={styles.text}>年底聚会</Text>
                </View>
                <Image style={styles.icon}/>
            </TouchableOpacity>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:screen.width/2-StyleSheet.hairlineWidth,
        height:screen.width/4,
    },
    titleText:{
        fontSize:15,
        marginBottom:10,
        color:'red'
    },
    text:{
        fontSize:15,
        color:'#333333'
    },
    icon:{
        width:screen.width/5,
        height:screen.width/5,
        backgroundColor:'blue',
    },
})