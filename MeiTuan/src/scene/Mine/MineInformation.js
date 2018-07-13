import {AsyncStorage} from 'react-native';


export function saveUserName(name){
    AsyncStorage.setItem('USER_NAME',name,(error)=>{
        if(!error){
            console.log('用户昵称保存成功')
        }else{
            alert('用户昵称保存失败')
            console.log('用户昵称保存失败')
        }
    })
}

export function saveUserAddress(address){
    AsyncStorage.setItem('USER_ADDRESS',address,(error)=>{
        if(!error){
            console.log('用户地址保存成功')
        }else{
            alert('用户地址保存失败')
            console.log('用户地址保存失败')
        }
    })
}

export function saveUserHeaderImage(image){
    AsyncStorage.setItem('USER_IMAGE',image,(error)=>{
        if(!error){
            console.log('用户头像保存成功')
            alert('用户头像保存成功')
        }else{
            alert('用户头像保存失败')
            console.log('用户头像保存失败')
        }
    })
}

export function saveUserGender(gender){
    AsyncStorage.setItem('USER_GENDER',gender,(error)=>{
        if(!error){
            console.log('用户性别保存成功')
        }else{
            alert('用户性别保存失败')
            console.log('用户性别保存失败')
        }
    })
}

export function getUserName(){
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem('USER_NAME',(error,result)=>{
            if(!error){
                if(result!==''&&result!==null){
                    resolve(result)
                }else{
                    console.log('没有数据')
                }
            }else{
                reject(error)
            }
        })
    })
}

export function getUserAddress(){
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem('USER_ADDRESS',(error,result)=>{
            if(!error){
                if(result!==''&&result!==null){
                    resolve(result)
                }else{
                    console.log('没有数据')
                }
            }else{
                reject(error)
            }
        })
    })
}

export function getHeaderImage(){
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem('USER_IMAGE',(error,result)=>{
            if(!error){
                if(result!==''&&result!==null){
                    resolve(result)
                }else{
                    console.log('没有数据')
                    resolve('null')
                }
            }else{
                reject(error)
            }
        })
    })
}

export function getUserGender(){
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem('USER_GENDER',(error,result)=>{
            if(!error){
                if(result!==''&&result!==null){
                    resolve(result)
                }else{
                    console.log('没有数据')
                }
            }else{
                reject(error)
            }
        })
    })
}