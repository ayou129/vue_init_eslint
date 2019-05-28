// import Vue from 'vue'
// import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
    mode: 'history'
})

router.beforeEach((to, from, next) => {

})
router.afterEach(() => {
    NProgress.start()
    next()
    // if (getToken()) {
    //     if (to.path === '/login') {
    //         Message({
    //             message: '您已登录',
    //             type: 'error',
    //             duration: 1500
    //         })
    //         setTimeout(function() {
    //             router.go(-1)
    //         }, 1500)
    //     }
    //     next();
    // } else {
    //     if (to.path !== '/login') {
    //         router.push({
    //             path: '/login'
    //         })
    //     }
    //     next();
    // }
})

export default router;