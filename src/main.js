// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store';
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import _ from 'lodash'


import apiFn from './lib/api.js'
import api from '../static/config/api.json'
import '../static/styles/animate/animate.css'
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

// Views - plugins
import Charts from '@/views/plugins/Charts'
import Editor from '@/views/plugins/Editor'
import Map from '@/views/plugins/Map'
import Animate from '@/views/plugins/Animate'


import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.loadingModel = true
Vue.prototype.$apiFn = apiFn
Vue.prototype.$api = api.api
Vue.prototype.$add = function (config,qryconfig,callback, callbackerr) {
    var name = config+'.p';
    var config = eval('this.'+config);
    var params = config.p;
    this.$refs[name].validate((valid) => {
        if (valid) {
            axios.get(config.url,{
                params:{
                    fn:config.fn,
                    p:params
                }
            }).then((res) => {
                if(res.data.result === 'success'){
                    if(callback){
                        callback(res.data);
                    }else{
                        config.data = {};
                        config.data = res.data;
                        this.$refs[name].resetFields();
                        if(qryconfig){
                            this.$qry(qryconfig);
                        }
                        if(config.model!==undefined){
                            config.model =  false;
                        }
                        this.$Notice.success({
                            title: '成功提示',
                            desc: '新增成功'
                        });
                    }
                }else{
                    config.data = res.data;
                    this.$Modal.error({
                        title: '错误提示',
                        content: res.data.msg
                    });
                }
            }).catch(err => {
                if(callbackerr){
                    callbackerr(err)
                }else{
                    this.$Modal.error({
                        title: '错误提示',
                        content: err.message
                    });
                }
            })
    }else{
        this.$Notice.error({
            title: '错误提示',
            desc: '表单验证失败!'
        });
    }
    })
}
Vue.prototype.$del = function (config,qryconfig,callback, callbackerr) {
    var params = config.p;
    axios.get(config.url,{
        params:{
            fn:config.fn,
            p:params
        }
    }).then((res) => {
        if(res.data.result === 'success'){
            if(callback){
                callback(res.data);
            }else{
                config.data = {};
                config.data = res.data;
                for(var key in params){
                    params[key] = ''
                }
                if(config.model!==undefined){
                    config.model =  false;
                }
                if(qryconfig){
                    this.$qry(qryconfig);
                }
                this.$Notice.success({
                    title: '成功提示',
                    desc: '操作成功'
                });
            }
        }else{
            config.data = res.data;
            this.$Modal.error({
                title: '错误提示',
                content: res.data.msg
            });
        }
    }).catch((err) => {
        if(callbackerr){
        callbackerr(err)
    }else{
        this.$Modal.error({
            title: '错误提示',
            content: err.message
        });
    }
    })
}
Vue.prototype.$get = function (config,{vm},callback, callbackerr) {
    var params = config.p;
    axios.get(config.url,{
        params:{
            fn:config.fn,
            p:params
        }
    }).then((res) => {
        if(res.data.result === 'success'){
            if(callback){
                callback(res.data);
            }else{
                config.data = {};
                config.data = res.data;
                for(var key in params){
                    params[key] = ''
                }
            }
        }else{
            config.data = res.data;
            this.$Modal.error({
                title: '错误提示',
                content: res.data.msg
            });
        }
    }).catch((err) => {
        if(callbackerr){
            callbackerr(err)
        }else{
            this.$Modal.error({
                title: '错误提示',
                content: err.message
            });
        }
    })
}
Vue.prototype.$qry = function (config,callback,callbackerr) {
    var params = config.p;
    if(config.loading!==undefined){
        config.loading = true;
    }
    axios.get(config.url,{
        params:{
            fn:config.fn,
            p:params
        }
    }).then((res) => {
        if(res.data.result === 'success'){
            if(callback){
                callback(res.data);
            }else{
                config.data = {};
                config.data = res.data;
                if(config.loading!==undefined){
                    config.loading = false;
                }
            }
        }else{
            config.data = res.data;
            if(res.data.code==='S006' && config.loading!==undefined){
                config.loading = false;
            }else{
                this.$Modal.error({
                    title: '错误提示',
                    content: res.data.msg
                });
            }
        }
    }).catch((err) => {
        if(callbackerr){
            callbackerr(err)
        }else{
            this.$Modal.error({
                title: '错误提示',
                content: err.message
            });
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
            },
            {
                path: 'components',
                name: 'Components',
                title:'组件',
                component: {
                    render (c) { return c('router-view') }
                },
                children: [
                {
                    path: '/components/button',
                    name: 'Button',
                    title:'按钮',
                    component: Button
                },
                {
                    path: '/component/social-button',
                    name: 'Social Button',
                    title:'图标按钮',
                    component: SocialButton
                },
                {
                    path: '/components/card',
                    name: 'Card',
                    title:'卡片',
                    component: Card
                },
                {
                    path: '/components/form',
                    name: 'Form',
                    title:'表单',
                    component: Form
                },
                {
                    path: '/components/modal',
                    name: 'Modal',
                    title:'模态框',
                    component: Modal
                },
                {
                    path: '/components/switch',
                    name: 'Switch',
                    title:'开关按钮',
                    component: Switch
                },
                {
                    path: '/components/table',
                    name: 'Table',
                    title:'表格',
                    component: Table
                }
            ]
             },
            {
                path: '/plugins',
                    name: 'Plugins',
                title: '第三方库',
                component: {
                render (c) { return c('router-view') }
                },
                children: [
                    {
                        path: '/plugins/Charts',
                        name: 'Charts',
                        title:'图表',
                        component: Charts
                    },
                    {
                        path: '/plugins/Editor',
                        name: 'Editor',
                        title:'编辑器',
                        component: Editor
                    },
                    {
                        path: '/plugins/Map',
                        name: 'Map',
                        title:'地图',
                        component: Map
                    },
                    {
                        path: '/plugins/Animate',
                        name: 'Animate',
                        title:'动画',
                        component: Animate
                    }
                ]
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
    for(var i= 0,len=items.length;i<len;i++){
        routes[0].children.splice(1, 0, items[i]);
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
