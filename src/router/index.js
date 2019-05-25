import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/index',
            component: () => import("@/components/Web.vue"),
            children: [{
                path: "/index",
                name: "index",
                component: () => import("@/components/Index.vue")
            }, {
                path: "/admin",
                name: "admin",
                component: () => import("@/components/Admin.vue"),
                children: [{
                    path: "/jiaoxue",
                    name: "jiaoxue",
                    component: () => import("@/components/admin/Jiaoxue.vue"),
                }, {
                    path: "/other",
                    name: "other",
                    component: () => import("@/components/admin/Other.vue"),
                }]
            }, ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("@/components/public/Login.vue"),
        },
        {
            path: '*',
            name: '404',
            component: () => import("@/components/public/404.vue"),
        }
    ]
})

router.beforeEach((to, from, next) => {
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
router.afterEach(() => {
    NProgress.done()
})

export default router;