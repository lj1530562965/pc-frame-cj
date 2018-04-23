// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store';
import App from './App'
import VueRouter from 'vue-router'

import apiFn from './lib/api.js'
import api from '../static/config/api.json'

import '../static/font/iconfont.css'
import '../static/styles/style.css'

import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
// Views - Components
import Button from '@/views/components/Button'
import SocialButton from '@/views/components/SocialButton'
import Card from '@/views/components/Card'
import Form from '@/views/components/Form'
import Modal from '@/views/components/Modal'
import Switch from '@/views/components/Switch'
import Table from '@/views/components/Table'
import Input from '@/views/components/Input'

Vue.config.productionTip = false
Vue.prototype.$apiFn = apiFn
Vue.prototype.$api = api.api

Vue.use(VueRouter)
const routes =  [
    {
        path: '/',
        name: 'full',
        redirect: '/dashboard',
        component: Full,
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                title: '首页',
                component: Dashboard
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]
store.dispatch('updateMenuList',function(result,items){
    routes[0].children = items;
    var router = new VueRouter({
        routes
    });
    router.addRoutes(items)
    new Vue({
        el: '#app',
        router,
        store: store,
        template: '<App/>',
        components: { App }
    })
    if(result==='failure'){
        router.push({path: '/login'})
    }
})
