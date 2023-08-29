import { Layout } from 'antd'
import SideNav from './SideNav'
import HeaderView from './Header'
import { Outlet } from 'react-router'

import './style.scss'
import { useStore } from '@/store'
import { observer } from 'mobx-react'


const { Content} = Layout;

function LayoutView() {     
    return (
        <>
            <div className='app-wrapper'>
               <Layout>
                    <SideNav></SideNav>
                    <Layout>
                        <HeaderView></HeaderView>
                        <Content style={{ margin: '24px 16px', padding: 24,minHeight: 280,}}>
                            <Outlet></Outlet>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </>
    )
}

export default observer( LayoutView )

