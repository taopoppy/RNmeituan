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
import RefreshListView,{RefreshState} from 'react-native-refresh-list-view';
import * as api from '../../api';
import GroupPurchaseCell from '../../GroupPurchase/GroupPurchaseCell';

export default class NearbyListScene extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            typeIndex:0,
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
        datalist.sort(()=>(0.5-Math.random()))           //将得来的数据打乱，显的更逼真
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
                data:[...this.state.data,...dataList],//将从服务器上获得的数据添加到后面,下拉刷新后面的数据
                refreshState:this.state.data.length>50?RefreshState.NoMoreData:RefreshState.Idle,
            })
        } catch (error) {
            this.setState({refreshState:RefreshState.Failure})   
        }
    }
    renderHeader(){
        return<View>
                <NearbyHeaderView 
                    titles={this.props.types}
                    selectedIndex={this.state.typeIndex}
                    onSelected={(index)=>{
                        if(index!=this.state.typeIndex){
                            this.setState({
                                typeIndex:index
                            })
                           this.requestFirstPage();
                        }
                    }}
                />
            </View>
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
    render(){
        return (
            <RefreshListView
                ListHeaderComponent={()=>this.renderHeader()}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>item.id+''}
                refreshState={this.state.refreshState}
                onHeaderRefresh={()=>this.loadMoreData()}
                onFooterRefresh={this.requestNextPage}
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


//ListHeaderComponent={()=>this.renderHeader()}    这样写那么renderHeader中要这样写
// renderHeader(){return<View>  ...  </View>}

//listHeaderComponent ={this.renderHeader}     这样写那么renderHeader中要这样写
// renderHeader=()=>{return ...}     这里的return就不用包裹View