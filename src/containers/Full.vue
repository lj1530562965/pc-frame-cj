<template>
  <div class="cj-app">
      <Sidebar></Sidebar>
      <div class="cj-body">
          <main class="main">
              <AppHeader v-on:sidebarToggle="sidebarToggle">></AppHeader>
              <breadcrumb></breadcrumb>
              <div class="container-fluid">
                  <router-view></router-view>
              </div>
              <AppFooter></AppFooter>
          </main>
      </div>
      <div style="clear:both;"></div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import Sidebar from '../components/Sidebar'
import AppFooter from '../components/AppFooter'
import Breadcrumb from '../components/Breadcrumb'
import axios from 'axios'
export default {
  name: 'full',
  data () {
        return {
            showSidebar:true,
            $api:this.$api
        }
  },
  watch:{
      '$api':{
          handler:function(newValue,oldValue){
          },
          deep:true
      }
  },
  created () {
    var docwidth = document.body.clientWidth;
    if(docwidth<768){
        this.showSidebar = false;
    }
//    axios.get('/pallas/sys.do',{
//            params:{
//                    fn:'login',
//                    p:'{"uname":"admin","pass":"111111"}'
//            },
//            headers:{
//                token:'123'
//            }
//        }).then(function(res){
//            console.log(res)
//    }).catch(function (error) {
//        console.log(error)
//    })

  },
  components: {
        AppHeader,
        Sidebar,
        AppFooter,
        Breadcrumb
  },
  computed: {

  },
    methods: {
        sidebarToggle () {
            this.showSidebar = !this.showSidebar;
            var sidebar = document.getElementsByClassName('sidebar')[0];
            var appbody = document.getElementsByClassName('app-body')[0];
            var appfooter = document.getElementsByClassName('app-footer')[0];
            if(this.showSidebar){
                sidebar.style.width = '15%';
                appbody.style.width = '85%';
                appfooter.style.width = '85%';
            }else{
                sidebar.style.width = '0%';
                appbody.style.width = '100%';
                appfooter.style.width = '100%';
            }
        }
    }
}
</script>
<style>
    .cj-app{
        width: 100%;
        height: 100%;
        font-size: 14px;
    }
    .cj-body{
        width: 85%;
        height: 100%;
        float: right;
    }
    .main{
        height: 100%;
        background: #f0eff5;
    }
    .container-fluid{
        height: 80%;
        overflow-y: auto;
        background: #fff;
        margin: 5px 15px;
        padding: 15px;
    }
    @media screen and (max-width: 768px) {
        .cj-body{
            width: 100%;
        }
    }
</style>
