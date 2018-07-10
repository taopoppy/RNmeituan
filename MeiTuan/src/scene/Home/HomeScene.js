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
    FlatList,
    Alert,
} from 'react-native';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import * as api  from '../../api';
import HomeMenuView from './HomeMenuView';
import screen from '../../common/screen';
import HomeGirdView from './HomeGirdView';
import SpacingView from '../../widget/SpacingView';
import {Heading3} from '../../widget/Text';
import GroupPurchaseCell from '../../GroupPurchase/GroupPurchaseCell';

export default class HomeScene extends PureComponent{
    static navigationOptions=()=>({
        headerStyle:{backgroundColor:color.primary},
        headerTitle:(
            <TouchableOpacity style={styles.seachBar}>
                <Image style={styles.seachIcon} source={require('../../img/home/icon_homepage_search.png')}/>
                <Text style={styles.seachText}>搜索</Text>
            </TouchableOpacity>
        ),
        headerTitleStyle:{alignSelf:'center'},
        headerLeft:(
            <NavigationItem 
                title='定位' 
                titleStyle={{color:'white'}} 
                onPress={()=>{}}
            />
        ),
        headerRight:(
            <NavigationItem 
                icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                onPress={()=>{}}
            />
        ),
    })
    constructor(props){
        super(props)
        this.state={
            discount:[],                             //打折对象
            dataList:[],                             //推荐对象
            refreshing:false,
        }
    }
    componentDidMount(){
        this.requestData();
    }
    requestData=async()=>{
        this.requestDiscount();
        this.requestRecommend();
    }
    requestRecommend=async()=>{
        try {
            this.setState({
                refreshing:true,
            })
            let response=await fetch(api.recommend)    
            let json=await response.json()           
            let datalist=json.data.map((info)=>({
                id:info.id,
                imageUrl:info.squareimgurl,
                title:info.mname,
                subtitle:`[${info.range}${info.title}]`,
                price:info.price,
            }))

            this.setState({
                dataList:datalist,
                refreshing:false,
            })
        } catch (error) {
            alert('error'+error)
            this.setState({refreshing:false,})
        }
    }
    requestDiscount=async()=>{
        try {
            //这里的api.discount貌似已经失效
            let response=await fetch(api.discount)    //这里是异步的写法，首先fetch返回的是promise对象，现在使用await就是直接返回的网络请求结果
            let json=await response.json()            //将请求的结果形成json对象，json格式化
            this.setState({
                discount:json.data
            })
        } catch (error) {
            alert('error'+error)
        }
    }
    onGirdSelected=(index)=>{                        //实际上这里 onGirdSelected=(index)=>{} 与下面的  onPress={this.onGirdSelected}可以换成onGirdSelected(index){}和 onPress={(index)=>{this.onGirdSelected(index)}}  
        let discount=this.state.discount[index];
        if(discount.type==1){
            let location=discount.tplurl.indexOf('http') //从discount的字符串获取http的位置
            let url=discount.tplurl.slice(location)
            this.props.navigation.navigate('WebScene',{url:url})
        }
    }
    renderHeader=()=>{
        return(
            <View>
                <HomeMenuView
                    menuInfos={api.menuInfos}
                    onMenuSelected={(index)=>{
                        alert(index)
                    }}
                /> 
                <SpacingView />
                <HomeGirdView infos={this.state.discount} onPress={this.onGirdSelected}/> 
                <SpacingView />
                <View style={styles.recommendHeader}>
                    <Heading3>猜你喜欢</Heading3>
                </View>
            </View>
        )
    }
    onCellSelected=(info)=>{
        //alert(JSON.stringify(info))
        this.props.navigation.navigate('GroupPurchaseScene',{info:info})
    }
    renderItem=({item})=>{
        return (
            <GroupPurchaseCell info={item} onPress={this.onCellSelected}/>
        )
    }
    render(){
        return <View style={styles.container}>
        <FlatList
            ListHeaderComponent={()=>this.renderHeader()}
            data={this.state.dataList}
            renderItem={this.renderItem}
            keyExtractor={(item,index)=>index+''}         
            //官方的说法是keyExtractor: (item: ItemT, index: number) => string ，就是说key必须是个string，如果直接写index就会出现类型错误
            refreshing={this.state.refreshing}
            onRefresh={this.requestData}
        />
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    seachBar:{
        flexDirection:'row',
        width:screen.width*0.68,
        height:30,
        borderRadius:19,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    seachIcon:{
        width:20,
        height:20,
        margin:5,
        tintColor:'gray',
    },
    seachText:{
        fontSize:14,
    },
    recommendHeader:{
        height:35,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:color.border,
        paddingVertical:8,
        paddingLeft:20,
        backgroundColor:'white',
    },
})