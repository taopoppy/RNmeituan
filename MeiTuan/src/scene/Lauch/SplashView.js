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
    StatusBar,
} from 'react-native';
import screen from '../../common/screen';

export default class SplashView extends PureComponent{
    static navigationOptions=({navigation})=>({
        header:null
    })
    constructor(props){
        super(props)
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('LoginView')
        },3000)
    }
    render(){
        return <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Image source={require('../../img/public/icon_startView.jpg')} style={styles.startView}/>
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    startView:{
        width:screen.width,
        height:screen.height+50,
    },
})