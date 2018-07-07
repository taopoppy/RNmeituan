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
import {Heading2,Paragraph} from '../widget/Text';
import color from '../widget/color';

export default class GroupPurchaseCell extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        let {info}=this.props;
        let imageUrl=info.imageUrl.replace('w.h','160.0')    //从网络上获取的数据字符串w.h的，要换成具体的宽度
        return (
            <TouchableOpacity style={styles.container}>
                <Image style={styles.icon} source={{uri:imageUrl}}/>
                <View style={styles.rightContainer}>
                    <Heading2>{info.title}</Heading2>
                    <Paragraph numberOfLines={0} style={{marginTop:8}}>{info.subtitle}</Paragraph>   
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                        <Heading2 style={styles.price}>{info.price}元</Heading2>
                    </View>
                </View>
            </TouchableOpacity>    
        )
       
    }
}


const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:color.border,
        backgroundColor:'white',
    },
    icon:{
        width:80,
        height:80,
        borderRadius:5,
    },
    rightContainer:{
        flex:1,
        paddingLeft:20,
        paddingRight:10,
    },
    price:{
        color:color.primary,
    },
})


//numberOfLines={0}表示不限制显示的行数