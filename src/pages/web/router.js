// import Vue from 'vue'
// import Router from 'vue-router'

Vue.use(VueRouter)
import {
    getToken,
    getCookie,
    removeToken
} from '@/utils/cookie'
import {
    Message
} from 'element-ui'
let router = new VueRouter({
    mode: 'history',
    // routes: [{
    //         name: "root",
    //         path: "/",
    //         redirect: "admin",
    //         component: () => import("../App.vue"),
    //         children: [{
    //             path: "/admin",
    //             name: "admin",
    //             component: () => import("../components/Admin.vue"),
    //             children: [{
    //                 path: "/files",
    //                 name: "files",
    //                 component: () => import("../components/main/Files.vue")
    //             }, {
    //                 path: "/download",
    //                 name: "download",
    //                 component: () => import("../components/main/Download.vue")
    //             }]
    //         }, {
    //             path: '/login',
    //             name: 'login',
    //             component: () => import("../components/Login.vue"),
    //         }, ]
    //     },
    //     {
    //         path: '*',
    //         name: '404',
    //         component: () => import("@/components/404.vue"),
    //     }
    // ]
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    // next();
    if (getToken()) {
        if (to.path === '/login') {
            Message({
                message: '您已登录',
                type: 'error',
                duration: 1500
            })
            setTimeout(function() {
                router.go(-1)
            }, 1500)
        }
        next();
    } else {
        if (to.path !== '/login') {
            router.push({
                path: '/login'
            })
        }
        next();
    }
})
router.afterEach((to, from) => {
    NProgress.done()
})

export default router;