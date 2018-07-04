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

export default class TabBarItem extends PureComponent{
    render(){
        let selectedImage=this.props.selectedImage?this.props.selectedImage:this.props.normalImage;
        return (
            <Image
                source={this.props.focused
                    ?selectedImage
                    :this.props.normalImage
                }
                style={{tintColor:this.props.tintColor,height:25,width:25}}
            />
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
})