// import Vue from 'vue';
import App from './App.vue';
import store from './store';
// import router from './router';
// import './plugins/element.js'
import '@/assets/css/reset.css'
import './assets/css/base.css'
new Vue({
    store,
    // router,
    render: h => h(App),
}).$mount('#app');