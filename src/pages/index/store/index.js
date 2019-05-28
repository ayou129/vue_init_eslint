// import Vue from 'vue'
// import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    token: null
};

const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
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
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
})