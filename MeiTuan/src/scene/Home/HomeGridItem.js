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
import color from '../../widget/color';
import {Heading2,Heading3} from '../../widget/Text';

export default class HomeGridItem extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        // let {info}=this.props;
        // let title=info.maintitle;
        // let color =info.typeface_color;
        // let subtitle=info.deputytitle;
        // let imageUrl=info.imageurl.replace('w.h','120.0');
        return (
            <TouchableOpacity style={styles.container}>
                <View>
                    <Heading2 style={[styles.titleText,{color:color}]}>{title}</Heading2>
                    <Heading3 >{subtitle}</Heading3>
                </View>
                <Image style={styles.icon} source={{uri:imageUrl}}/>
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
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderRightWidth:StyleSheet.hairlineWidth,
        borderColor:color.border,
    },
    titleText:{
        marginBottom:10,
    },
    icon:{
        width:screen.width/5,
        height:screen.width/5,
        backgroundColor:'blue',
    },
})