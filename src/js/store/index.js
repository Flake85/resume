import Vue from 'vue';
import Vuex from 'vuex';
import contact from './modules/contact';
import education from './modules/education';
import employment from './modules/employment';
import references from './modules/references';
import darkmode from './modules/darkmode';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        contact,
        education,
        employment,
        references,
        darkmode
    }
})