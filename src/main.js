// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routerFn from './router';
import axios from 'axios'
import _ from 'lodash'


import api from '../static/config/api.json'
import '../static/styles/animate/animate.css'
import '../static/font/iconfont.css'
import '../static/styles/style.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.loadingModel = true
Vue.prototype.$api = api.api

routerFn();
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
                for(var i= 0,len=res.data.data.length;i<len;i++){
                    if(res.data.data[i].content){
                        res.data.data[i].content = decodeURIComponent(res.data.data[i].content);
                    }
                    if(res.data.data[i].title){
                        res.data.data[i].title = decodeURIComponent(res.data.data[i].title);
                    }
                }
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

