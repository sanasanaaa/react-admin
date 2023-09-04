import { Dropdown, Layout, Space } from 'antd';
import { useStore } from '@/store';
import { observer } from 'mobx-react';
import { DownOutlined, ExpandOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import './style.scss'

//导入userlogo
// import userlogo from '@/assets/images/user_logo.jpg';

const { Header } = Layout;


function HeaderView() { 

    let { system } = useStore();
    let { sidebar } = system;
    let { opened } = sidebar;
    let iconstyle = {fontSize:'150%'}

    return (
        <Header style={{ padding: 0 }} className='header-container'>
            <div className='header-left' >
                <span onClick={() => { sidebar.opened = !sidebar.opened }} >
                    {opened ? <MenuUnfoldOutlined style={iconstyle}/>:<MenuFoldOutlined style={iconstyle}/>}
                </span>
               
            </div>
            <div className='header-right'>
                <span>
                    <SearchOutlined style={iconstyle}/>
                </span>
                <span>
                    <ExpandOutlined style={iconstyle}/>
                </span>
                <span className='user-logo-container'>
                <Dropdown
                    menu={{
                            items: [
                                {
                                    label: '个人中心',
                                    key:'userCenter'
                                },
                                {
                                    label: '首页',
                                    key:'dashboard'
                                },
                                {
                                    label: '项目地址',
                                    key:'github'
                                },
                                {
                                    label: 'Docs',
                                    key:'docs'
                            },
                            {
                                type:'divider'
                            },
                            {
                                label: '退出登录',
                                key:'logout'
                            }
                        ]
                    }}
                    >
                    <img src='../../assets/images/user_logo.jpg' className='user-logo' />
                      
                </Dropdown>
                </span>
            </div>
        </Header>
    )
}

export default observer(HeaderView);