import {  createHashRouter } from "react-router-dom";
import {  Navigate,redirect, Outlet, useLocation, useMatch, useNavigate } from "react-router"
import LoginPage from "../views/login/index";
import ErrorPage404 from '../views/errorPage/404'
import Layout from "../layout/index";
import DashBoard from "../views/dashboard/index";
import BarChart from "../views/charts/barchart/index";
import LineChart from "../views/charts/linechart/index";
import PieChart from "../views/charts/piechart/index";
import { useStore } from "@/store";

// NProgress Configuration
const routerMap: { [key: string]: any } = {
  '/login': { name: '登录', icon: 'icon-login', static: true},
  '/': { name: '404',  static: true },
  '/dashboard': { name: '首页',  static: true },
  '/guide': { name: '引导页', static: true },
  '/permission': { name: '权限测试页', static: true },
  '/components': { name: '组件', static: true },
};



let ignorePaths=['/login','/error','/nopermission']

// 检查权限
function checkPermission(pathname:string) { 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (ignorePaths.includes(pathname)) {
    return true
  }
  return true
}


let routerConfig = [
  {
    path: '/login',
    title: '登录',
    Component: ()=><LoginPage></LoginPage>
  },
  {
    path: '/',
    name:'初始',
    Component() {
      let location = useLocation()
      const navigate = useNavigate();
      let  store = useStore();
      let { user } = store;
      if (!user.isLogin) {
        return <Navigate to = '/login'></Navigate>
      } else { 
        if (!checkPermission(location.pathname)) {
          navigate('/nopermission', {replace:true})
        } 
        return <Layout />
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
      
        path: 'document',
        title: '引导页',
        Component: () => <div>document</div>,
      },
      {
      
        path: 'guide',
        title: '引导页',
        Component: () => <div>guide</div>,
      },
      {
        path: 'nopermission',
        Component: () => <div>无权限 </div>,

      },
      {
        path: 'components',
        title:'组件',
        Component: () => <div> <Outlet></Outlet> </div>,
        children: [
          {
            path: 'table',
            Component:()=> <div>table</div>
          }
        ]
      },
      {
        path: 'charts',
        title:'图表',
        Component: () => <div> <Outlet></Outlet> </div>,
        children: [
          {
            path: 'linechart',
            Component:()=> <LineChart/>
          },
          {
            path: 'barchart',
            Component:()=> <BarChart/>
          },
          {
            path: 'piechart',
            Component:()=><PieChart/>
          }
        ]
      },
      {
        path: '/404',
        title: '404',
        Component: ()=><ErrorPage404/>
      },
    ]
  },
  {
    path: '*',
    element:<Navigate to = '/404'></Navigate>
  },
]

// 


export const routes = createHashRouter(routerConfig)





