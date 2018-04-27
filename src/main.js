// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store';
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'

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
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.$apiFn = apiFn
Vue.prototype.$api = api.api
Vue.prototype.$get = function (config,{vm},callback, callbackerr) {
    var params = config.p;
    var p = {};
    console.log(vm)
    for(var key in params) {
        if(vm[params[key]]){
            p[key] = vm[params[key]];
        }else if(config.formValidate[params[key]]){
            p[key] = config.formValidate[params[key]];
        }else{
            p[key] = ''
        }
    }
    axios.get(config.url,{
        params:{
            fn:config.fn,
            p:p
        }
    }).then(function (res){
        if(callback){
            callback(res);
        }else{
            if(res.data.result === 'success'){
                config.data = {};
                config.data = res.data;
            }else{
                alert(res.data.msg)
                config.data = res.data;
            }
        }
    }).catch(function (err) {
        if(callbackerr){
            callbackerr(err)
        }else{
            alert(err.message)
            console.log(err)
        }
    })
}

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
//            {
//                path: 'components',
//                name: 'Components',
//                title:'组件',
//                component: {
//                    render (c) { return c('router-view') }
//                },
//                children: [
//                {
//                    path: '/components/button',
//                    name: 'Button',
//                    title:'按钮',
//                    component: Button
//                },
//                {
//                    path: '/component/social-button',
//                    name: 'Social Button',
//                    title:'图标按钮',
//                    component: SocialButton
//                },
//                {
//                    path: '/components/card',
//                    name: 'Card',
//                    title:'卡片',
//                    component: Card
//                },
//                {
//                    path: '/components/form',
//                    name: 'Form',
//                    title:'表单',
//                    component: Form
//                },
//                {
//                    path: '/components/modal',
//                    name: 'Modal',
//                    title:'模态框',
//                    component: Modal
//                },
//                {
//                    path: '/components/switch',
//                    name: 'Switch',
//                    title:'开关按钮',
//                    component: Switch
//                },
//                {
//                    path: '/components/table',
//                    name: 'Table',
//                    title:'表格',
//                    component: Table
//                }
//            ]
//        }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]
store.dispatch('updateMenuList',function(result,items){
    for(var i= 0,len=items.length;i<len;i++){
        routes[0].children.push(items[i]);
    }
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
