import axios from 'axios'
function init(config){
    var params = config.p;
    var p = {};
    for(var key in params) {
        var dom = document.getElementsByName(params[key])
        for(var i= 0,len=dom.length;i<len;i++){
            var node = dom[i];
            var nodeName = node.nodeName
            if(nodeName === 'INPUT'){
                var type = node.type
                if(node.value){
                    if(type === 'radio' || type === 'checkbox'){
                        if(node.checked){
                            p[key] = node.value
                        }
                    }else{
                        p[key] = node.value
                    }
                }else{
                    p[key] = ''
                }
            }else if(nodeName === 'SELECT'){
                var index = node.selectedIndex;
                if(node.options[index].value){
                    p[key] = node.options[index].value
                }else{
                    p[key] = ''
                }
            }else if(nodeName === 'TEXTAREA'){
                if(node.value){
                    p[key] = node.value
                }else{
                    p[key] = ''
                }
            }else{
                if(node.innerHTML){
                    p[key] = node.innerHTML
                }else{
                    p[key] = ''
                }
            }
        }
    }
    return p
}
var apiFn = {
    initget: function (config,callback, callbackerr) {
        var p = config.p
        axios.get(config.url,{
            params:{
                fn:config.fn,
                p:p
            }
        }).then(function (res){
            if(callback){
                callback(res);
            }else{
                if(res.data.result === 'success'){
                    config.data = {};
                    config.data = res.data;
                }else{
                    alert(res.data.msg)
                    config.data = res.data;
                }
            }
        }).catch(function (err) {
            if(callbackerr){
                callbackerr(err)
            }else{
                alert(err.message)
                console.log(err)
            }
        })
    },
    get: function (config,callback, callbackerr) {
        var p = init(config);
        axios.get(config.url,{
            params:{
                fn:config.fn,
                p:p
            }
        }).then(function (res){
            if(callback){
                callback(res);
            }else{
                if(res.data.result === 'success'){
                    config.data = {};
                    config.data = res.data;
                }else{
                    alert(res.data.msg)
                    config.data = res.data;
                }
            }
        }).catch(function (err) {
            if(callbackerr){
                callbackerr(err)
            }else{
                alert(err.message)
                console.log(err)
            }
        })
    },
    post: function (config, callback, callbackerr) {
        var p = init(config)
        axios.post(config.url,{
            fn:config.fn,
            p:p
        }).then(function(res){
            if(callback){
                callback(res);
            }else{
                if(res.data.result === 'success'){
                    config.data = {};
                    config.data = res.data;
                }else{
                    alert(res.data.msg)
                    config.data = {};
                }
            }
        }).catch(function (err) {
            if(callbackerr){
                callbackerr(err)
            }else{
                console.log(err)
                alert(err.message)
            }
        })
    }
//    query:function(config, callback, callbackerr){
//        this.get(config,function(res){
//            if(callback){
//                callback(res);
//            }else{
//                config.data = {};
//                config.data = res.data.data;
//
//            }
//        },function(err){
//            if(callbackerr){
//                callbackerr(err);
//            }else{
//                console.log(err)
//            }
//        })
//    },
//    add:function(config, callback, callbackerr){
//        this.post(config,function(res){
//            if(callback){
//                callback(res);
//            }else{
//                config.data = {};
//                config.data = res.data.data;
//            }
//        },function(err){
//            if(callbackerr){
//                callbackerr(err);
//            }else{
//                console.log(err)
//            }
//        })
//    },
//    edit:function(config, callback, callbackerr){
//        this.post(config,function(res){
//            if(callback){
//                callback(res);
//            }else{
//                config.data = {};
//                config.data = res.data.data;
//            }
//        },function(err){
//            if(callbackerr){
//                callbackerr(err);
//            }else{
//                console.log(err)
//            }
//        })
//    },
//    del:function(config, callback, callbackerr){
//        this.post(config,function(res){
//            if(callback){
//                callback(res);
//            }else{
//                config.data = {};
//                config.data = res.data.data;
//            }
//        },function(err){
//            if(callbackerr){
//                callbackerr(err);
//            }else{
//                console.log(err)
//            }
//        })
//    }
}
export default apiFn