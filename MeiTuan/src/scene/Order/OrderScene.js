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
import DetailCell from '../../widget/DetailCell';
import OrderMenuItem from './OrderMenuItem';
import SpacingView from '../../widget/SpacingView';
import RefreshListView,{RefreshState} from 'react-native-refresh-list-view';
import * as api from '../../api';
import GroupPurchaseCell from '../../GroupPurchase/GroupPurchaseCell';


export default class OrderScene extends PureComponent{
    static navigationOptions=({navigation})=>({
        headerTitle:'订单',
        headerTitleStyle:{alignSelf:'center',fontSize:17},
        headerLeft:null,
    })
    constructor(props){
        super(props)
        this.state={
            data:[],
            refreshState:RefreshState.Idle
        }
    }
    componentDidMount(){
        this.requestFirstPage()
    }
    loadMoreData(){
        this.requestFirstPage()
    }
    requestData=async()=>{
        let response=await fetch(api.recommend);
        let json=await response.json();
        let datalist=json.data.map((info)=>({
            id:info.id,
            imageUrl:info.squareimgurl,
            title:info.mname,
            subtitle:`[${info.range}${info.title}]`,
            price:info.price,
        }))
        datalist.sort(()=>(0.5-Math.random()))          
        return datalist;
    }
    requestFirstPage=async()=>{
        try {
            this.setState({refreshState:RefreshState.HeaderRefreshing})
            let dataList =await this.requestData();
            this.setState({data:dataList,refreshState:RefreshState.Idle})
        } catch (error) {
            this.setState({refreshState:RefreshState.Failure})   
        }
    }
    requestNextPage=async()=>{
        try {
            this.setState({refreshState:RefreshState.FooterRefreshing})
            let dataList =await this.requestData();
            this.setState({
                data:[...this.state.data,...dataList],
                refreshState:this.state.data.length>50?RefreshState.NoMoreData:RefreshState.Idle,
            })
        } catch (error) {
            this.setState({refreshState:RefreshState.Failure})   
        }
    }
    renderItem=(rowData)=>{
        return (
            <GroupPurchaseCell
                info={rowData.item}
                onPress={()=>{
                   this.props.navigation.navigate('GroupPurchaseScene',{info:rowData.item})
                }}
            />
        )
    }
    renderHeader(){
        return <View>
            <DetailCell 
                title={'我的订单'}
                subtitle={'全部订单'}
                style={{height:38}}       //这里是外部传进去的高度，会覆盖默认定义的高度44
            />    
            <View style={styles.itemContainer}>
                <OrderMenuItem title='待付款' icon={require('../../img/order/order_tab_need_pay.png')}/>
                <OrderMenuItem title='待使用' icon={require('../../img//order/order_tab_need_use.png')}/>
                <OrderMenuItem title='待评价' icon={require('../../img/order/order_tab_need_review.png')}/>
                <OrderMenuItem title='退款/售后' icon={require('../../img/order/order_tab_needoffer_aftersale.png')}/>
            </View>
            <SpacingView />

            <DetailCell
                title={'我的收藏'}
                subtitle={'查看全部'}
            />
        </View>
    }
    render(){
        return <View style={styles.container}>
        <RefreshListView
                ListHeaderComponent={()=>this.renderHeader()}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>item.id+''}
                refreshState={this.state.refreshState}
                onHeaderRefresh={()=>this.loadMoreData()}
                onFooterRefresh={this.requestNextPage}
            />
       </View>
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    itemContainer:{
        flexDirection:'row',
    },
})