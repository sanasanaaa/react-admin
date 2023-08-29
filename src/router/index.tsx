import {  createHashRouter } from "react-router-dom";
import {  Navigate, useLocation, useMatch } from "react-router"
import { Suspense } from "react";

import LoginPage from "../views/login/index";
import ErrorPage404 from '../views/errorPage/404'
import Layout from "../layout/index";
import DashBoard from "../views/dashboard/index";
import { useStore } from "@/store";


const routerMap: { [key: string]: any } = {
  '/login': { name: '登录', icon: 'icon-login', static: true},
  '/404': { name: '404',  static: true },
  '/dashboard': { name: '首页',  static: true },
  '/guide': { name: '引导页', static: true },
  '/permission': { name: '权限测试页', static: true },
  '/components': { name: '组件', static: true },
};




// 检查权限
function checkPermission(pathname:string) { 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let { user } = useStore();
  let { permissions } = user;
  if (routerMap[pathname]?.static) { 
    return true
  } else { 
    return permissions.includes(pathname)
  }
}

let routerConfig = [
  {
    path: '/login',
    title: '登录',
    Component: ()=><LoginPage></LoginPage>
  },
  {
    path: '/404',
    title: '404',
    Component: ()=><ErrorPage404/>
  },
  {
    path: '/',
    name:'初始',
    Component() {
      let location = useLocation()
      let  store = useStore();
      let { user } = store;
      let a = useMatch(location.pathname)
      console.log(a)
      //根据router中的title 更换页面document 的title
      



      if (!user.isLogin && checkPermission(location.pathname)) {
        return <Navigate to = '/login'></Navigate>
      } else { 
        if (checkPermission(location.pathname)) { 
          return <Layout/>
        }else{ 
          return <Navigate to = '/404'></Navigate>
        }
      }
      //路由守卫
    },
    children: [
      {
        path: 'dashboard',
        title: '首页',
        Component: DashBoard,
      },
      {
      
        path: 'guide',
        title:'引导页',
        Component: () => <div>guide</div>,
      },
      {
        path: 'permission',
        Component: () => <div>permission</div>,
      },
      {
        path: 'components',
        Component: () => <div>components</div>,
      }
    ]
  },
  {
    path: '*',
    element:<Navigate to = '/404'></Navigate>
  },
]

// 




export const routes = createHashRouter(routerConfig)





