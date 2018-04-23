<template>
  <div class="app">
      <AppHeader></AppHeader>
      <div class="app-body">
          <Sidebar></Sidebar>
          <main class="main">
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
export default {
  name: 'full2',
  components: {
        AppHeader,
        Sidebar,
        AppFooter,
        Breadcrumb
  },
  computed: {

  }
}
</script>
<style scoped>
    .app{
        width: 100%;
        height: 100%;
    }
    .app-body{
        width: 100%;
        height: 100%;
    }
    .main{
        height: 100%;
        background: #f5f5f5;
        width: 85%;
        float: right;
    }
    .container-fluid{
        height: 80%;
        overflow-y: auto;
        background: #fff;
        margin: 5px 15px;
        padding: 15px;
    }
    .sidebar{
        background: #333!important;
    }
    .app-header{
        background: #000!important;
        border-bottom: 0!important;
    }
</style>
