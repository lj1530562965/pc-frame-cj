import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
// Views - Components
import Scroll from '@/views/components/Scroll'
import Upload from '@/views/components/Upload'
import Transfer from '@/views/components/Transfer'
import Rate from '@/views/components/Rate'
import Cascader from '@/views/components/Cascader'
import Carousel from '@/views/components/Carousel'
import Slider from '@/views/components/Slider'
import Tree from '@/views/components/Tree'

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
        path: '/components/scroll',
        name: 'Scroll',
        title:'scroll 无限滚动',
        component: Scroll
    },
    {
        path: '/components/upload',
        name: 'Upload',
        title:'upload 上传',
        component: Upload
    },
    {
        path: '/components/transfer',
        name: 'Transfer',
        title:'transfer 穿梭框',
        component: Transfer
    },
    {
        path: '/components/rate',
        name: 'Rate',
        title:'rate 评分',
        component: Rate
    },
    {
        path: '/components/cascader',
        name: 'Cascader',
        title:'cascader 级联选择',
        component: Cascader
    },
    {
        path: '/components/carousel',
        name: 'Carousel',
        title:'carousel 走马灯',
        component: Carousel
    },
    {
        path: '/components/slider',
        name: 'Slider',
        title:'slider 滑块',
        component: Slider
    },
    {
        path: '/components/tree',
        name: 'Tree',
        title:'tree 树形控件',
        component: Tree
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