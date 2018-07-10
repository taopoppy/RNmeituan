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
import NearbyHeaderView from './NearbyHeaderView';

export default class NearbyListScene extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            typeIndex:0,
        }
    }
    requestData(){
        
    }
    render(){
        return <View style={styles.container}>
        <NearbyHeaderView 
            titles={this.props.types}
            selectedIndex={this.state.typeIndex}
            onSelected={(index)=>{
                if(index!=this.state.typeIndex){
                    this.setState({
                        typeIndex:index
                    })
                    this.requestData()
                }
            }}
        />
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
})