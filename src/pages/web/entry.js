// import Vue from 'vue';
import Entry from './Entry.vue';
import store from './store.js';
import router from './router.js';
// import './plugins/element.js'
new Vue({
    store,
    router,
    render: h => h(Entry),
}).$mount('#entry');