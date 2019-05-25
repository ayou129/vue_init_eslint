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
export function getStudentList() {
    return request({
        url: 'api/student/list',
        method: 'GET'
    })
}
export function putStudent(data) {
    return request({
        url: 'api/student',
        method: 'PUT',
        data
    })
}
export function postStudent(data) {
    return request({
        url: 'api/student',
        method: 'POST',
        data
    })
}
export function deleteStudent(data) {
    return request({
        url: 'api/student',
        method: 'DELETE',
        data
    })
}

export function getBanjiList() {
    return request({
        url: 'api/banji/list',
        method: 'GET'
    })
}
export function postBanji(data) {
    return request({
        url: 'api/banji',
        method: 'POST',
        data
    })
}
export function putBanji(data) {
    return request({
        url: 'api/banji',
        method: 'PUT',
        data
    })
}
export function deleteBanji(data) {
    return request({
        url: 'api/banji',
        method: 'DELETE',
        data
    })
}

export function getKemuList() {
    return request({
        url: 'api/kemu/list',
        method: 'GET'
    })
}
export function postKemu(data) {
    return request({
        url: 'api/kemu',
        method: 'POST',
        data
    })
}
export function putKemu(data) {
    return request({
        url: 'api/kemu',
        method: 'PUT',
        data
    })
}
export function deleteKemu(data) {
    return request({
        url: 'api/kemu',
        method: 'DELETE',
        data
    })
}

export function getXueqiList() {
    return request({
        url: 'api/xueqi/list',
        method: 'GET'
    })
}
export function postXueqi(data) {
    return request({
        url: 'api/xueqi',
        method: 'POST',
        data
    })
}
export function putXueqi(data) {
    return request({
        url: 'api/xueqi',
        method: 'PUT',
        data
    })
}
export function deleteXueqi(data) {
    return request({
        url: 'api/xueqi',
        method: 'DELETE',
        data
    })
}

export function getChengjiList() {
    return request({
        url: 'api/chengji/list',
        method: 'GET'
    })
}
export function postChengji(data) {
    return request({
        url: 'api/chengji',
        method: 'POST',
        data
    })
}
export function putChengji(data) {
    return request({
        url: 'api/chengji',
        method: 'PUT',
        data
    })
}
export function deleteChengji(data) {
    return request({
        url: 'api/chengji',
        method: 'DELETE',
        data
    })
}