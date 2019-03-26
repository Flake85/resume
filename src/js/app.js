import Vue from 'vue';
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue';
import AppMain from './app-main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRouter } from "../../routes";

Vue.use(BootstrapVue);
require('jquery');
require('popper.js');

const router = createRouter();

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

new Vue({
    el: '#app',
    router,
    render: h => h(AppMain)
});