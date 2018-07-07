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
import color from '../../widget/color';
import HomeGridItem from './HomeGridItem';
export default class HomeGirdView extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        let {infos,onGirdSelected}=this.props;
        return <View style={styles.gridContainer}>
            {infos.map((info,index)=>{
                <HomeGridItem
                    key={index}
                    info={info}
                    onPress={()=>{
                        onGirdSelected(index)
                    }}
                />
            })}
        </View> 
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    gridContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderTopWidth:StyleSheet.hairlineWidth,
        borderLeftWidth:StyleSheet.hairlineWidth,
        borderColor:color.border
    },
})