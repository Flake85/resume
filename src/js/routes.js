import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/main-home';
import About from './views/About/main-about';
import Contact from './views/Contact/main-contact';
import Resume from './views/About/resume/main-resume';
import Builder from './views/resume-creator/resume-builder-main';

Vue.use(Router);

export function createRouter(){
    return new Router({
        routes: [
            {
            path: '/',
            component: Home,
            meta: {
                title: 'Home'
            } },
            {
            path: '/creator',
            component: Builder,
            meta: {
                title: "Resume Creator"
            } },
            {
            path: '/about',
            component: About,
            meta: {
                title: 'About'
            } },
            {
            path: '/contact',
            component: Contact,
            meta: {
                title: 'Contact'
            } },
            {
            path: '/resume',
            component: Resume,
            meta: {
                title: "Flechas's Resume",
            } }
        ]
    });
}