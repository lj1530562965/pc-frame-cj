export default () => {
    var map = Object.create(null);
    map['系统管理'] = {
        path: '/SysMana',
        name: 'SysMana',
        title: '系统管理',
        icon:'iconfont icon-sysmana',
        component: {render (c) { return c('router-view') }}
    };
    map['用户管理'] = {
        path:'/SysMana/usermana',
        name: 'UserMana',
        title: '用户管理',
        component: 'UserMana'
    };
    map['角色管理'] = {
        path:'/SysMana/rolemana',
        name: 'RoleMana',
        title: '角色管理',
        component: 'RoleMana'
    };
    map['系统参数'] = {
        path:'/SysMana/syspara',
        name: 'SysPara',
        title: '系统参数',
        component: 'SysPara'
    };
    map['标签管理'] = {
        path:'/SysMana/babelmana',
        name: 'LabelMana',
        title: '标签管理',
        component: 'LabelMana'
    };
    map['日志管理'] = {
        path:'/SysMana/logmana',
        name: 'LogMana',
        title: '日志管理',
        component: 'LogMana'
    };
    map['消息管理'] = {
        path:'/SysMana/mesmana',
        name: 'MesMana',
        title: '消息管理',
        component: 'MesMana'
    };
    map['消息模板'] = {
        path:'/SysMana/mestpl',
        name: 'MesTpl',
        title: '消息模板',
        component: 'MesTpl'
    };
    map['字典管理'] = {
        path:'/dashboard/usermana',
        name: 'UserMana',
        title: '字典管理',
        component: 'UserMana'
    };
    return  function (val) { return map[val]; }
}