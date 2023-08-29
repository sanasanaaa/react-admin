import React from 'react';
import user from './modules/user'
import system from './modules/system';
import { configure } from 'mobx';

configure({ enforceActions: 'never' });


class RootStore { 
    user: user;
    system: system;
    constructor() {
        this.user = new user(this);
        this.system = new system(this);
    }
}

// 实例化操作
const rootStore = new RootStore();
// 使用 context 机制，完成统一方法封装
// 查找机制：useContext 优先从 Provider value 找，如果找不到就会找 createContext 方法传递过来的默认参数
const context = React.createContext(rootStore);
// 通过 useContext 拿到 rootStore 实例对象，然后返回
// 只要在业务组件中调用 useStore() 方法
const useStore:any = () => React.useContext(context);
export { useStore };

