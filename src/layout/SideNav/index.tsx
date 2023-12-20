import { Menu, MenuProps } from "antd";
import { AppstoreAddOutlined, AppstoreOutlined, BarChartOutlined, BarsOutlined, DashboardOutlined, FileTextOutlined, MailOutlined, QrcodeOutlined, SettingOutlined } from '@ant-design/icons';
import { useStore } from "@/store";
import { observer } from "mobx-react";
import { Layout } from 'antd';

import './style.scss'
import { useNavigate } from "react-router";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]| null,
    type?: 'group'| null,
    onClick?:Function
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
      onClick
    } as MenuItem;
  }


function getMenuItem(option:any) { 
  return {...option} as MenuItem
}

  


function SideNav() { 
    const navigate = useNavigate();
    let { system,user } = useStore();
    let { sidebar } = system;
    let { opened } = sidebar;
    let { permissions } = user
  
   
    const items: MenuProps['items'] = [
      getMenuItem({ label: '首页', key: 'dashboard', icon: <DashboardOutlined /> }),
      getMenuItem({ label: '推荐管理', key: 'document', icon: <FileTextOutlined /> }),
      getMenuItem({ label: '内容管理', key: 'guide', icon: <BarsOutlined /> }),
      getMenuItem({ label: '运营位设置', key: 'systemSet', icon: <BarsOutlined /> }),
      getMenuItem({ label: '模型管理', key: 'models', icon: <BarsOutlined /> }),
      getMenuItem({ label: '我的商品', key: 'shop', icon: <BarsOutlined /> }),
      getMenuItem({ label: '顾客列表', key: 'custom', icon: <BarsOutlined /> }),
      getMenuItem({ label: '错误页面', key: '404',  }),
    ];
  
  function handleMenuItem(info: any) {
    let {keyPath=[]} = info;
    if (keyPath?.length) { 
      let goPath = '/' + keyPath.reverse().join('/')
      navigate(goPath)
    }
  }


    return (

        <Sider trigger={null} collapsible collapsed={opened}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={ handleMenuItem}
        />
      </Sider>

    )
}


export default observer( SideNav);