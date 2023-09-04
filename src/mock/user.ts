//导入mock
import Mock from 'mockjs';
//mock 用户接口
function userMock() { 

    Mock.mock('/user/login', 'post', (options) => {
        let { body } = options;
        let { username='' }  = body
        const ret = Mock.mock({
            'user': { username: '@cname' },
            'token': Mock.mock('@string("lower",32)'),
            'roles':username === 'admin' ? ['admin'] : ['editor']
        })
        return {
            status:200,
            data:ret
        }
    })

    Mock.mock('/user/roles', 'post', () => { 

    })
}

export default userMock

