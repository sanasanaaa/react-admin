import axios from "axios";

import  envConfig  from '@/env';

let request = axios.create({
    baseURL: envConfig.baseURL,
    timeout: 3000,
});

request.interceptors.request.use((config) => { 
    //设置token
    config.headers.Authorization = localStorage.getItem('token');
    return config;
})


request.interceptors.response.use((response) => { 
    return response;
})


export default request;