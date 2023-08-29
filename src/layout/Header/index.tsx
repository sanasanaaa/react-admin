import { Layout } from 'antd';
import { useStore } from '@/store';
import { observer } from 'mobx-react';
import './style.scss'

const { Header } = Layout;

function HeaderView() { 

    let { system } = useStore();
    let { sidebar } = system;
    let { opened } = sidebar;

    return (
        <Header style={{ padding: 0 }} className='header-container'>
            <div className='header-left' >
                <span onClick={() => { sidebar.opened = !sidebar.opened }} style={{ color: '#fff' }}>
                    {opened ? '打开' : '关闭'}
                </span>
               
            </div>
            <div className='header-right'>
                <span>search</span>
                <span>F11</span>
                <span>Logo</span>
            </div>
        </Header>
    )
}

export default observer(HeaderView);