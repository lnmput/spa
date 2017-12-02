
require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
import router from './routes';
//import VeeValidate from 'vee-validate';


import zh_CN from './locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

Validator.localize('zh_CN', zh_CN);

import App from './components/App'
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.component('app', App);

new Vue({
    el: '#app',
    router
});
