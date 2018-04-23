import {storage} from "./storage.js"
import config from '../../config'
import store from '../store';
function changeSkin(themeColor){
    let path = '';
    if (config.dev) {
        path = './static/styles/theme/';
    } else {
        path = './dist/';
    }
    let stylesheetPath;
    let themeLink = document.querySelector('link[name="theme"]');
    if (themeColor) {
        stylesheetPath = path + themeColor + '.css';
    }else{
        stylesheetPath = '';
    }
    themeLink.setAttribute('href', stylesheetPath);
}
export let initSkin = function initSkin(){
    var mainTheme = store.state.app.mainTheme;
    let userName = store.state.app.userName;
    if (storage("theme")) {
        let hasThisUser = storage("theme").some(item => {
            if (item.userName === userName) {
            store.commit('changeMainTheme', item.mainTheme);
            return true;
        }else{
            return false;
        }
        });
        if (!hasThisUser){
            store.commit('changeMainTheme', 'b');
        }
    }else{
        store.commit('changeMainTheme', 'b');
    }
    changeSkin(store.state.app.mainTheme);
}
export let setTheme = function setTheme(val){
    let mainTheme = val;
    let userName = store.state.app.userName;
    let index = 0;
    if (storage("theme")) {
        let themeList = storage("theme");
        let hasThisUser = themeList.some((item, i) => {
            if(item.userName === userName){
            index = i;
            return true;
        }else{
            return false;
        }
    });
    if (hasThisUser) {
        themeList[index].mainTheme = mainTheme;
    }else{
        themeList.push({
            userName: userName,
            mainTheme: mainTheme
        });
    }
    storage("theme",themeList)
    }else{
        var items = [{
            userName: userName,
            mainTheme: mainTheme
        }];
        storage("theme",items)
    }
    changeSkin(mainTheme);
}