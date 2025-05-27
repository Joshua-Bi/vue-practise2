import instance from "../http";


// 注册
export const register = (date:any) => {
    const {
        account,
        password
    } = date
    return instance({
        url: 'api/register',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}

// 登录
export const login = (date:any) => {
    const {
        account,
        password
    } = date
    return instance({
        url: 'http://121.4.55.140:3000/api/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}