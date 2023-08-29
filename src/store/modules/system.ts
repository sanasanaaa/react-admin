import { makeAutoObservable } from 'mobx'

class systemStore {
    rootStore: any;
    constructor(rootStore: any) {
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }
    //左侧菜单栏设置
    sidebar = {
        opened:true,
    }
  
}


export default systemStore