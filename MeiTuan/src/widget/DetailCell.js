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
import Separator from '../widget/Separator';
import {Heading3,Paragraph} from '../widget/Text';

export default class DetailCell extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        let {image,title,subtitle,style}=this.props;
        let iconElement=image&&(<Image style={styles.icon} source={image}/>)
        return (
            <TouchableOpacity>
                <View style={[styles.container,style]}>
                    {iconElement}
                    <Heading3>{title}</Heading3>
                    <View style={{flex:1}}/>
                    <Paragraph style={{color:'#999999'}}>{subtitle}</Paragraph>
                    <Image style={styles.arrow} source={require('../img/public/cell_arrow.png')}/>
                </View>    
                <Separator/>

            </TouchableOpacity>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:44,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:10,
    },
    icon:{
        width:25,
        height:25,
        marginRight:10,
    },
    arrow:{
        width:14,
        height:14,
        marginLeft:5,
    },
})