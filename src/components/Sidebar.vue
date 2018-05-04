<template>
    <div class="sidebar">
        <div class="iconfont icon-person photo" style="color: #ffffff;font-size: 55px;"></div>
        <nav class="sidebar-nav" id="sidebar-nav">
            <ul class="nav" v-for='menuItem in data'>
                <my-tree :model="menuItem"></my-tree>
            </ul>
        </nav>
    </div>
</template>
<script>
    import router from '../router'
    import myTree from './treeMenu.vue'
    export default {
        name: 'sidebar',
        data (){
            return {
                data:[]
            }
        },
        components: {
            myTree
        },
        created(){
            this.data = this.$router.options.routes[0].children
//            console.log(this.$router.options.routes[0].children)
//            console.log(this.$store.state.app.menuList)
        },
        methods: {
//            handleClick (e) {
//                e.preventDefault();
//                e.target.parentElement.classList.toggle('open');
//            }
        }
    }
</script>


<style scoped>
    .sidebar{
        width: 15%;
        height: 100%;
        float: left;
        padding: 0;
        overflow: hidden;
        color: #fff;
        background: #1a1a1a;
    }
    .photo{
        height: 80px;
        line-height: 80px;
        font-size: 18px;
        border-bottom: 1px solid #999;
    }
    @media screen and (max-width: 768px) {
        .sidebar {
            width: 0%;
        }
    }
</style>



