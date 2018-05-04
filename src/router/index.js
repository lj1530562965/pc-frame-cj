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

import FuncMana from '@/views/SysMana/FuncMana'

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
                icon:'iconfont icon-index',
                component: Dashboard
            },
            {
                path: '/funcmana',
                name: 'FuncMana',
                component: FuncMana
            },
            {
                path: 'components',
                name: 'Components',
                title:'组件',
                icon:'iconfont icon-components',
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
    icon:'iconfont icon-plugins',
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
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import store from '../store';
Vue.use(VueRouter)
var routerFn = function(callback){
    store.dispatch('updateMenuList',(result,items) =>{
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
}
export default routerFn