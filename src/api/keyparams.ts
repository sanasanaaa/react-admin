import request from './request';
 

function getAll() { 
    return request({
        url: '/keyparams/all',
        method: 'get',
    })
}

function add(data: any) { 
    return request({
        url: '/keyparams/add',
        method: 'post',
        data
    })
}

function del(id:any) { 
    return request({
        url: '/keyparams/del',
        method: 'post',
        data: {id}
    })
}

const keyparamsApi = {
    getAll,
    add,
    del
}

export default keyparamsApi