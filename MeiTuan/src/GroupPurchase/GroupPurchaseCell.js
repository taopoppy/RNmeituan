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
        let {info,onPress}=this.props;
        let imageUrl=info.imageUrl.replace('w.h','160.0')    //从网络上获取的数据字符串w.h的，要换成具体的宽度
        return (
            <TouchableOpacity style={styles.container} onPress={()=>{onPress(info)}}>
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


//(1)numberOfLines={0}表示不限制显示的行数

//(2)带参数的回调函数方法1
//onPress={()=>{this.props.onPress(info)}}
//onPress={this.onCellSelected}
//onCellSelected=(info)=>{}

//(3)带参数的回调方法2
//onPress={(info)=>{this.props.onPress(info)}}
//onPress={(info)=>{this.onCellSelected(info)}}
//onCellSelected(info){}
