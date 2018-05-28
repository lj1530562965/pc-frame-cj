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
import Circle from '@/views/components/Circle'
import Steps from '@/views/components/Steps'
import Tabs from '@/views/components/Tabs'
import Timeline from '@/views/components/Timeline'
import Tag from '@/views/components/Tag'
import Collapse from '@/views/components/Collapse'
import Progress from '@/views/components/Progress'
import ColorPicker from '@/views/components/ColorPicker'
import AutoComplete from '@/views/components/AutoComplete'

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
    },
    {
        path: '/components/circle',
        name: 'Circle',
        title:'circle 进度环',
        component: Circle
    },
    {
        path: '/components/steps',
        name: 'Steps',
        title:'steps 步骤条',
        component: Steps
    },
    {
        path: '/components/tabs',
        name: 'Tabs',
        title:'tabs 标签页',
        component: Tabs
    },
    {
        path: '/components/timeline',
        name: 'Timeline',
        title:'timeline 时间轴',
        component: Timeline
    },
    {
        path: '/components/tag',
        name: 'Tag',
        title:'tag 标签',
        component: Tag
    },
    {
        path: '/components/collapse',
        name: 'Collapse',
        title:'collapse 折叠面板',
        component: Collapse
    },
    {
        path: '/components/progress',
        name: 'Progress',
        title:'progress 进度条',
        component: Progress
    },
    {
        path: '/components/colorpicker',
        name: 'ColorPicker',
        title:'colorpicker 颜色选择器',
        component: ColorPicker
    },
    {
        path: '/components/autocomplete',
        name: 'autocomplete',
        title:'AutoComplete 自动完成',
        component: AutoComplete
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
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
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
    router.beforeEach((to, from, next) => {
        iView.LoadingBar.start();
    next();
});
router.afterEach(route => {
    iView.LoadingBar.finish();
});
        if(result==='failure'){
            router.push({path: '/login'})
        }
})
}
export default routerFn