// import Vue from 'vue';
import Entry from './Entry.vue';
import store from './store';
// import router from './router';
// import './plugins/element.js'
import './assets/css/base.css'
new Vue({
    store,
    // router,
    render: h => h(Entry),
}).$mount('#entry');