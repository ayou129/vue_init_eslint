import axios from 'axios'
import qs from 'qs';
import store from '../store'
import router from '../router'
import {
    Message
} from 'element-ui'
import {
    getToken,
    removeToken
} from './cookie';

const instance = axios.create({
    baseURL: 'http://student.dengji.com/',
    timeout: 5000
})
instance.interceptors.request.use(
    config => {
        if (config.method === 'PUT' || config.method === 'put') {
            config.data = qs.stringify(config.data);
        } else if (config.method === 'DELETE' || config.method === 'delete') {
            config.data = qs.stringify(config.data);
        }
        if (getToken()) {
            config.headers['token'] = getToken()
        }
        // config.data = qs.stringify(config.FormData);
        return config
    },
    error => {
        Promise.reject(error)
    }
)
instance.interceptors.response.use(
    response => {
        if (response.data.msg) {
            Message({
                message: response.data.msg,
                type: 'success',
                duration: 2000
            })
        }
        return response.data
    },
    error => {
        if (error.response) {
            if (error.response.data.client_code == -3) {
                //token is not found
                removeToken();
                Message({
                    message: error.response.data.msg,
                    type: 'error',
                    duration: 1000
                })
                setTimeout(function() {
                    router.push({
                        name: '登录',
                    })
                    return Promise.reject(error.response.data.msg)
                }, 1500)
            } else if (error.response.data.client_code == -2) {
                //token已过期
                removeToken();
                Message({
                    message: error.response.data.msg,
                    type: 'error',
                    duration: 1000
                })
                setTimeout(function() {
                    router.push({
                        name: '登录',
                    })
                    return Promise.reject(error.response.data.msg)
                }, 1500)
            } else if (error.response.data.client_code == -1) {
                //正常錯誤
            }
            Message({
                message: error.response.data.msg,
                type: 'error',
                duration: 1500
            })
            return Promise.reject(error.response.data.msg)
        } else if (error.request) {
            Message({
                message: '您所访问的资源不存在或无响应',
                type: 'error',
                duration: 1500
            })
        } else {
            // Something happened in setting up the request that triggered an Error
            // console.log('设置有误，err:', error.message);
        }
        return Promise.reject(error)
    }
)

export default instance