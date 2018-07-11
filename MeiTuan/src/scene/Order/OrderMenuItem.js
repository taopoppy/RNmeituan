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
import {Heading3} from '../../widget/Text';
import screen from '../../common/screen';

export default class OrderMenuItem extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        let {onPress,icon,title}=this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image source={icon} resizeMode='contain' style={styles.icon}/>
                <Heading3>{title}</Heading3>
            </TouchableOpacity>
        )
    }
}


const styles=StyleSheet.create({
    container:{
       justifyContent:'center',
       alignItems:'center',
       width:screen.width/4,
       height:screen.width/4,

    },
    icon:{
        width:30,
        height:30,
        margin:5,
    },
})



//resizeMode
// 上面我们说了,Image组件必须在样式中声明图片的款和高。如果没有声明，则图片将不会被呈现在界面上。
// 我们一般将Image定义的宽和高乘以当前运行环境的像素密度称为Image的实际宽高.当Image的实际宽、高与图片的实际宽、高不符时,视图片样式定义中resizeMode的取值不同而分为三种情况, 三个取值分别是: contain, cover和stretch.默认值是cover.

// cover模式只求在显示比例不失真的情况下填充整个显示区域。可以对图片进行放大或者缩小，超出显示区域的部分不显示， 也就是说，图片可能部分会显示不了。
// contain模式是要求显示整张图片, 可以对它进行等比缩小, 图片会显示完整,可能会露出Image控件的底色。 如果图片宽高都小于控件宽高，则不会对图片进行放大。
// stretch模式不考虑保持图片原来的宽,高比.填充整个Image定义的显示区域,这种模式显示的图片可能会畸形和失真。
// center模式, 9月11号的0.33版本才支持，contain模式基础上支持等比放大。