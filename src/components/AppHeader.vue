<template>
    <div>
        <header class="cj-header">
            <button type="button" class="navbar-toggler" @click="sidebarToggle">☰</button>
            <div class="navbar-right">
                <div class="iconfont icon-index"><span>主页</span></div>
                <div class="iconfont icon-password"> <span>修改密码</span></div>
                <div style="margin-top: 5px;">
                    <span class="iconfont icon-skin"></span>
                    <Select v-model="Selected" style="width:60px;margin-left: 1px;" @on-change="setTheme">
                    <Option v-for="item in themeList" :value="item.name" :key="item.value">{{ item.text }}</Option>
                    </Select>
                </div>
                <div class="iconfont icon-logout logout" @click="$api.logout.model=true"><span>退出</span></div>
            </div>
        </header>
        <Modal v-model="$api.logout.model" width="280px" style="text-align: center;" :loading="loadingModel" :mask-closable="false" title="提示" @on-ok="logout" @on-cancel="$api.logout.model=false">
        <p>您确定要退出?</p>
        </Modal>

    </div>
</template>
<script>
    import {initSkin,setTheme} from "../lib/skin.js"
    export default {
        props: ['showSidebar'],
        data () {
            return {
                selectStyle:{
                    "height":"100%",
                    "font-size":"12px"
                },
                Selected:'',
                themeList: [
                    {
                        text:'蓝色',
                        name: 'b',
                        element: '#23b7e5'
                    },
                    {
                        text:'绿色',
                        name: 'g',
                        element: '#5cb85c'
                    },
                    {
                        text:'黄色',
                        name: 'y',
                        element: '#f0ad4e'
                    },
                    {
                        text:'红色',
                        name: 'r',
                        element: '#d9534f'
                    }
                ]
            }
        },
        created () {
            initSkin();
            this.Selected = this.$store.state.app.mainTheme;
    },
    components: {

    },
    methods: {
    sidebarToggle (e) {
        e.preventDefault();
        e.target.classList.toggle('active');
        this.$emit('sidebarToggle')
    },
    logout(e){
         this.$del(this.$api.logout,'',(data) => {
             this.$api.logout.model =  false;
             this.$router.push({path: '/login'});
         })
    },
    setTheme (val){
        setTheme(val)
    }
    }
    }
</script>
<style lang="scss" scoped="">
.cj-header{
    height: 45px;
    background: #ffffff;
    border-bottom: 2px solid #ddd;
}
.navbar-toggler{
    background: transparent;
    border: 1px solid transparent;
    font-size: 20px;
    outline: none;
    float: left;
    padding: 5px 15px;
    transition: .3s;
}
/*@media screen and (max-width: 768px) {*/
    /*.navbar-toggler{*/
        /*transform: rotate(-90deg);*/
    /*}*/
/*}*/
.navbar-toggler.active{
    transform: rotate(-90deg);
}
.navbar-right{
    float: right;
    line-height: 45px;
    margin-right: 20px;
}
.navbar-right .skin{
    float: left;
    margin-top: 15px;
}
.navbar-right div{
    float: left;
    margin: 0 10px;
}
.navbar-right .iconfont span{
    color: #1a1a1a;
    margin-left: 5px;
    font-size: 12px;
}
.icon-skin:before {
    float: left;
    margin-right: 5px;
    margin-top: -6px;
    font-size: 20px;
}
</style>



