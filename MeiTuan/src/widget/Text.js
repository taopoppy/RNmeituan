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
import {TabNavigator,TabBarBottom } from 'react-navigation';
import color from './color';

export function Heading1({style,...props}){             //这里写法是除了style其他的属性都放在...props中
    return <Text style={[styles.h1,style]} {...props}/>  //另外这里使用的是function来重构text
}
export function Heading2({style,...props}){             
    return <Text style={[styles.h2,style]} {...props}/>
}
export function Heading3({style,...props}){             
    return <Text style={[styles.h3,style]} {...props}/>
}
export function Heading4({style,...props}){             
    return <Text style={[styles.h4,style]} {...props}/>
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    h1:{
        fontSize:40,
        color:color.primary,
    },
    h2:{
        fontSize:15,
        fontWeight:'bold',
        color:'#222222',
    },
    h3:{
        fontSize:14,
        color:'#222222',
    },
    h4:{
        fontSize:13,
        color:'#777777',
    },
})