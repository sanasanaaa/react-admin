import { makeAutoObservable } from 'mobx'

import userApi from '@/api/user'

class userStore {
    rootStore: any; 
    userInfo = {} // 用户信息
    permissions = []; // 用户权限
    isLogin = false   //是否登录
    constructor(rootStore: any) {
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }
   
    // 修改用户信息
    changeUserInfo = (userInfo: any) => {
        this.userInfo = userInfo
    }
    //登录
    login = (loginForm: { password: string, username: string }) => {
        return new Promise((resolve, reject) => {
            userApi.login(loginForm).then((res: any) => {
                let { roles } = res;
                this.isLogin = true
                this.permissions = roles;
                resolve(true)
            }).catch((err: any) => { 
                console.log(err)
                reject(err)
            })
        })
    }

    getUserInfo = () => { 
        return new Promise((resolve, reject) => {
            // userApi.getUserInfo().then((res: any) => {
            //     this.userInfo = res.data
            //     resolve(res)
            // }).catch((err: any) => { 
            //     reject(err)
            // })
        })
    }
}


export default userStore