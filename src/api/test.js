import request from '../utils/request'

export function login(username, password) {
    const data = {
        username,
        password
    }
    return request({
        url: 'api/token/signin',
        method: 'POST',
        data
    })
}