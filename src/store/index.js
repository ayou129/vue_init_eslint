import Vue from 'vue'
import Vuex from 'vuex'
import {
    getBanjiList,
    postBanji,
    putBanji,
    deleteBanji,

    getStudentList,
    postStudent,
    putStudent,
    deleteStudent,

    getKemuList,
    postKemu,
    putKemu,
    deleteKemu,

    getXueqiList,
    postXueqi,
    putXueqi,
    deleteXueqi,

    getChengjiList,
    postChengji,
    putChengji,
    deleteChengji,

    login
} from '../api/teacher.js'
import {
    setToken,
    getToken,
    removeToken
} from '../utils/cookie';
Vue.use(Vuex)

const state = {
    // token: null
};

const mutations = {
    setToken: (state, token) => {
        state.token = token
    },
};
const actions = {
    login({
        commit
    }, userInfo) {
        const username = userInfo.username.trim();
        return new Promise((resolve, reject) => {
            login(username, userInfo.password).then(response => {
                setToken(response.data.token)
                resolve(response)
            }).catch(res => {
                reject(res)
            })
        })
    },
    //Student
    getStudentList() {
        return new Promise((resolve, reject) => {
            getStudentList().then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    postStudent({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            postStudent(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    putStudent({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            putStudent(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    deleteStudent({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            deleteStudent(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },

    //Banji
    getBanjiList() {
        return new Promise((resolve, reject) => {
            getBanjiList().then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    postBanji({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            postBanji(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    putBanji({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            putBanji(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    deleteBanji({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            deleteBanji(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },

    //Kemu
    getKemuList() {
        return new Promise((resolve, reject) => {
            getKemuList().then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    postKemu({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            postKemu(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    putKemu({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            putKemu(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    deleteKemu({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            deleteKemu(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    //Xueqi
    getXueqiList() {
        return new Promise((resolve, reject) => {
            getXueqiList().then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    postXueqi({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            postXueqi(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    putXueqi({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            putXueqi(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    deleteXueqi({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            deleteXueqi(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    //Chengji
    getChengjiList() {
        return new Promise((resolve, reject) => {
            getChengjiList().then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    postChengji({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            postChengji(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    putChengji({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            putChengji(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    deleteChengji({
        commit
    }, formData) {
        return new Promise((resolve, reject) => {
            deleteChengji(formData).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
})