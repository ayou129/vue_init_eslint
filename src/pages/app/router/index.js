import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
    mode: 'history'
})

router.beforeEach((to, from, next) => {

})
router.afterEach(() => {
    NProgress.done()
})

export default router;