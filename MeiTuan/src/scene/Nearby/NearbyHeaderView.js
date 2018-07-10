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
import {Paragraph} from '../../widget/Text';
import screen from '../../common/screen';
import color from '../../widget/color';
export default class NearbyHeaderView extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        let {titles,onSelected,selectedIndex}=this.props;
        return <View style={styles.container}>
            {titles.map((title,i)=>(
                <TouchableOpacity
                    style={[styles.item,{backgroundColor:selectedIndex==i?'#fe566d':'white'}]}
                    key={i}
                    onPress={()=>onSelected(i)}
                >
                <Paragraph style={{color:selectedIndex==i?'white':'#555555'}}>{title}</Paragraph>
                </TouchableOpacity>
            ))}
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    item:{
        width:screen.width/4-10,
        marginLeft:8,
        marginTop:5,
        marginBottom:5,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:color.border,
    }
})