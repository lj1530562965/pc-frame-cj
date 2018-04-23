import Vue from 'vue'
import Router from 'vue-router'
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




Vue.use(Router)
export default new Router({
    routes: [
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
})
