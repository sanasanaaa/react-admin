import { Button, Form, Input, message } from 'antd'
import './style.scss'
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react';
import { useStore } from '@/store';
import React from 'react';
import crypto from 'crypto-js';

function LoginPage() {
    const [form] = Form.useForm();
    const navigate=useNavigate();
    let { user } = useStore();
    // const [messageApi,message, contextHolder] = message.useMessage()

    

    //跳转到
    async function login(formValues: { password: string, username: string }) {

        if (!formValues.username || !formValues.password) return false;

        formValues.password = crypto.MD5(formValues.password).toString();

        const loginRes = await user.login(formValues).catch((err: any) => { 
            let errMsg = <span>{ `${err}`}</span>
            message.error(errMsg)
        })
        if (loginRes) {
            navigate('/dashboard');
        }
    }

    return (
        <div className='login-container'>
        	<div className='login-form'>
                <h3 className='login-title'>系统登录</h3>
                <Form form={form} onFinish={login}>
                <Form.Item name='username'>
                    <Input size="large" placeholder="username" className='login-username' />
				</Form.Item>
				<Form.Item name='password'>
					<Input size="large" placeholder="password" className='login-password' type='password' />
				</Form.Item>
                <Button className='login-bt' type="primary" htmlType="submit" >登录</Button>
                </Form>
            </div>
         
        </div>
    )
}

export default observer(LoginPage)