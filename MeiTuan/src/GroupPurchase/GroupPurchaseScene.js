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
    InteractionManager,
} from 'react-native';
import NavigationItem from '../widget/NavigationItem';
import {Heading1,Heading2,Heading3,Paragraph} from '../widget/Text';
import screen from '../common/screen';
import color from '../widget/color';
import Button from '../widget/Button';
import Separator from '../widget/Separator';
import api,{recommendUrlWithId, groupPurchaseDetailWithId} from '../api';
import RefreshListView,{RefreshState} from 'react-native-refresh-list-view';
import SpacingView from '../widget/SpacingView';
import GroupPurchaseCell from './GroupPurchaseCell';

export default class GroupPurchaseScene extends PureComponent{
    static navigationOptions=({navigation})=>({
        headerTitle:'团购详情',
        headerTitleStyle:{alignSelf:'center',fontSize:17}, //默认的标题字的大小是20
        headerRight:(
            <NavigationItem
                icon={require('../img/public/icon_navigation_item_share.png')}
                onPress={()=>{
                    alert('share')
                }}
            />
        )
    })
    constructor(props){
        super(props)
        this.info=this.props.navigation.state.params.info;
        this.state={
            data:[],
            refreshState:RefreshState.Idle,  //列表刷新状态，加载成功（普通状态）
        }
    }
    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            this.requestData();
        })
    }
    requestData(){
        this.requestRecommend();
    }
    requestRecommend=async()=>{
        try {
            this.setState({refreshState:RefreshState.HeaderRefreshing}) //开始下拉刷新
            let info =this.info;
            let response=await fetch(recommendUrlWithId(info.id));
            let json=await response.json();

            let dataList=json.data.deals.map((info)=>{
                return {
                    id:info.id,
                    imageUrl:info.imgurl,
                    title:info.brandname,
                    subtitle:`[${info.range}]${info.title}`,
                    price:info.price
                }
            })

            this.setState({
                data:dataList,
                refreshState:RefreshState.NoMoreData,//加载全部的数据
            })
        } catch (error) {
            this.setState({
                refreshState:RefreshState.Failure,//加载数据失败
            })
        }
    }
    renderCell=(rowData)=>{
        return (
            <GroupPurchaseCell
                info={rowData.item}
                onPress={()=>{
                   this.props.navigation.navigate('GroupPurchaseScene',{info:rowData.item})
                }}
            />
        )
    }
    renderHeader(imageUrl,price){
        return (
            <View>
                <View>
                    <Image
                        source={{uri:imageUrl}}
                        style={styles.banner}
                    />
                    <View style={styles.TopContainer}>
                        <Heading2 style={{color:color.primary}}>¥</Heading2>
                        <Heading1 style={{marginBottom:-8}}>{price}</Heading1>
                        <Paragraph style={{marginLeft:10}}>门市价：¥{(price * 1.1).toFixed(0)}</Paragraph> 
                        <View style={{flex:1}}/>
                        <Button 
                            title={'立即抢购'} 
                            tilteStyle={{color:'white',fontSize:18}}
                            style={styles.buyButton}
                        />
                    </View>
                </View>

                <Separator/>

                <View style={styles.tagContainer}>
                    <Image style={{width:20,height:20}} source={require('../img/home/icon_deal_anytime_refund.png')}/>
                    <Paragraph style={{color:'#89B24F'}}> 随时退</Paragraph>
                    <View style={{flex:1}}/>
                    <Paragraph>已售123</Paragraph>
                </View>

                <SpacingView />
                <View style={styles.tipHeader}>
                    <Heading3>看了本团购的用户还看了</Heading3>
                </View>
            </View>
        )
    }
    render(){
        let info=this.info;
        let imageUrl=info.imageUrl.replace('w.h','480.0');
        let price=info.price;
        return(
            <View style={styles.container}>
                <RefreshListView
                    data={this.state.data}      //同FlatList中的data属性
                    renderItem={this.renderCell}           //每一行的渲染方式
                    ListHeaderComponent={()=>this.renderHeader(imageUrl,price)}   //头部组件(头部组件中好像找不到this.props.navigation)
                    keyExtractor={(item,index)=>item.id+''}    //每一行都有唯一的key
                    refreshState={this.state.refreshState}   //更新状态
                    onHeaderRefresh={()=>this.requestData()}      //下来刷新的回调函数
                />
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    banner:{
        width:screen.width,
        height:screen.width/2,
    },
    TopContainer:{
        padding:10,
        flexDirection:'row',
        alignItems:'flex-end',
    },
    tagContainer:{
        flexDirection:'row',
        padding:10,
        alignItems:'center',
    },
    buyButton:{
        backgroundColor:'#fc9e28',
        width:94,
        height:36,
        borderRadius:7,
    },
    tipHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    }
    
})


//(number).toFixed(0) 保留整数

//如果是这样写的onHeaderRefresh={()=>this.requestData()}  回调函数可以这样写requestData(){}
//如果是这样写的onHeaderRefresh={this.requestData}   回调函数应该这样写   requestData = () => {}