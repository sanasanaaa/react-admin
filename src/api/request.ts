import axios from "axios";
import { Button, message } from 'antd';
import  envConfig  from '@/env';

let request = axios.create({
    baseURL: envConfig.baseUrl,
    timeout: 3000,
});

// request.interceptors.request.use((config) => { 
//     //设置token
//     // config.headers.Authorization = localStorage.getItem('token');
//     return config;
// })


request.interceptors.response.use(async (response) => { 
    if (response.data.code === 200) {
        console.log('请求正常')
        return response.data.data;
    } else { 
        console.log('请求失败')
        throw new Error(response.data.msg);
    }
  
})


export default request;