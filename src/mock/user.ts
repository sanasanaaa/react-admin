//导入mock
import Mock from 'mockjs';
//mock 用户接口
function userMock() { 

    Mock.mock('/user/login', 'post', (options) => {
        const ret = Mock.mock({
            'user': { username: '@cname' },
            'token': Mock.mock('@string("lower",32)')
        })
        return {
            status:200,
            data:ret
        }
    })
}

export default userMock

