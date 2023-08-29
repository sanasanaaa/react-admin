import request from './request';
 

function login(data: any) { 
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

const userApi = {
    login
}

export default userApi