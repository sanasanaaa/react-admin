import { useEffect } from 'react'
import { Layout } from 'antd'
import SideNav from './SideNav'
import HeaderView from './Header'
import { Outlet } from 'react-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css';
import './style.scss'
import { observer } from 'mobx-react'



const { Content} = Layout;

NProgress.configure({ showSpinner: false }) 

function LayoutView() {     
    // 使用 NProgress
    NProgress.start();
    NProgress.configure({ easing: 'ease', speed: 1000 });

    useEffect(() => {
        // 使用 NProgress
        NProgress.done();
    }, []) 

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

