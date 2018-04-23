import Vue from 'vue';
import apiFn from '@/lib/api.js'
import api from '../../../static/config/api.json'
import MenuUtils from '@/utils/MenuUtils'
import transData from '@/utils/transData'
import getMenuConfig from '@/utils/getMenuConfig'
const app = {
    state: {
        mainTheme: 'g',
        userName:'',
        menuList:[]
    },
    mutations: {
        changeMainTheme (state, newMainTheme) {
            state.mainTheme = newMainTheme;
        },
        updateUserName (state,newUserName) {
            state.userName = newUserName;
        },
        getMenuList (state,newMenuList) {
            state.menuList = newMenuList;
        }
    },
    actions: {
        updateNameAction (context) {
            apiFn.get(api.api.logined,function(res){
                if(res.data.result==='success'){
                    context.commit('updateUserName', res.data.data.uname)
                }
            })
        },
        updateMenuList (context,callback) {
            apiFn.get(api.api.getmenu,function(res){
                var data = res.data.data;
                var menulist = [];
                var result = res.data.result;
                if(result==='success'){
                    for(var i= 0,len=data.length;i<len;i++){
                        var menuConfig = getMenuConfig();
                        var menu = menuConfig(data[i].title);
                        for(var key in data[i]){
                            menu[key] = data[i][key]
                        }
                        menulist.push(menu)
                    }
                    for(var i= 0,len=menulist.length;i<len;i++){
                        var code = menulist[i].code;
                        menulist[i].pcode = code.substring(0,code.length-1);
                    }
                }
                var menus = transData(menulist, 'code', 'pcode', 'children');
                var items = []
                MenuUtils(items,menus)
                context.commit('getMenuList', items)
                if(callback){
                    callback(result,items)
                }
            })
        }
    }
};
export default app;
