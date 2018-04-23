import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
// Views - Components
import Buttons from '@/views/components/Buttons'
import SocialButtons from '@/views/components/SocialButtons'
import Cards from '@/views/components/Cards'
import Forms from '@/views/components/Forms'
import Modals from '@/views/components/Modals'
import Switches from '@/views/components/Switches'
import Tables from '@/views/components/Tables'
import Input from '@/views/components/Input'
// Views - SysMana
import LabelMana from '@/views/sysmana/LabelMana'
import LogMana from '@/views/sysmana/LogMana'
import MesMana from '@/views/sysmana/MesMana'
import MesTpl from '@/views/sysmana/MesTpl'
import RoleMana from '@/views/sysmana/RoleMana'
import SysPara from '@/views/sysmana/SysPara'
import UserMana from '@/views/sysmana/UserMana'



Vue.use(Router)
export default new Router({
  routes: [
      {
          path: '/',
          redirect: '/dashboard',
          name: 'full',
          component: Full,
          children: [
              {
                  path: '/dashboard',
                  name: 'Dashboard',
                  title: '首页',
                  component: Dashboard
              },
              {
                  path: '/dashboard',
                  name: 'SysMana',
                  title: '系统管理',
                  component: {render (c) { return c('router-view') }},
                  children:[
                    {
                        path: '/sysmana/usermana',
                        name: 'UserMana',
                        title: '用户管理',
                        component: UserMana,
                        children:[{
                            path: '/sysmana/usermana',
                            name: 'UserMana',
                            title: '用户管理',
                            component: UserMana}]
                    },
                    {
                        path: '/sysmana/rolemana',
                        name: 'RoleMana',
                        title: '角色管理',
                        component: RoleMana
                    },
                    {
                        path: '/sysmana/syspara',
                        name: 'SysPara',
                        title: '系统参数',
                        component: SysPara
                    },
                    {
                        path: '/sysmana/babelmana',
                        name: 'LabelMana',
                        title: '标签管理',
                        component: LabelMana
                    },
                    {
                        path: '/sysmana/logmana',
                        name: 'LogMana',
                        title: '日志管理',
                        component: LogMana
                    },
                    {
                        path: '/sysmana/mesmana',
                        name: 'MesMana',
                        title: '消息管理',
                        component: MesMana
                    },
                    {
                        path: '/sysmana/mestpl',
                        name: 'MesTpl',
                        title: '消息模板',
                        component: MesTpl
                    }
                 ]
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
                    path: '/components/buttons',
                    name: 'Buttons',
                    title:'按钮',
                    component: Buttons
                },
                {
                    path: '/components/social-buttons',
                    name: 'Social Buttons',
                    title:'图标按钮',
                    component: SocialButtons
                },
                {
                    path: '/components/cards',
                    name: 'Cards',
                    title:'卡片',
                    component: Cards
                },
                {
                    path: '/components/forms',
                    name: 'Forms',
                    title:'表单',
                    component: Forms
                },
                {
                    path: '/components/modals',
                    name: 'Modals',
                    title:'模态框',
                    component: Modals
                },
                {
                    path: '/components/switches',
                    name: 'Switches',
                    title:'开关按钮',
                    component: Switches
                },
                {
                    path: '/components/tables',
                    name: 'Tables',
                    title:'表格',
                    component: Tables
                }
              ]
        }
          ]
      },
    {
        path: '/pages',
        redirect: '/pages/login',
        name: 'Pages',
        component: {
        render (c) { return c('router-view') }
        },
        children: [
            {
                path: '/pages/Full2',
                name: 'full2',
                component: Full2
            },
            {
                path: '/pages/login',
                name: 'Login',
                component: Login
            }
        ]
    }
  ]
})
