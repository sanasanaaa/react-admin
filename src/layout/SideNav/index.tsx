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
      getMenuItem({ label: '文档', key: 'document', icon: <FileTextOutlined /> }),
      getMenuItem({ label: '引导页', key: 'guide', icon: <BarsOutlined /> }),
      getMenuItem({
        label: '组件',
        key: 'components',
        icon: <AppstoreAddOutlined />,
        children: [
          {
            label: '表格',
            key:'table'
          }
      ]}),
      getMenuItem({
        label: '图表',
        key: 'charts',
        icon: <BarChartOutlined />,
        children: [
          {
            label: '折线图',
            key:'linechart'
          },
          {
            label: '饼图',
            key:'piechart'
          },
          {
            label: '柱状图',
            key:'barchart'
          }
        ]
      }),
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