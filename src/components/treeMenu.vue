<template>
    <div>
        <li class="nav-item" v-if='!model.children' v-show='model.title' @click="activeClick">
            <router-link :to="model.path" class="nav-link"><i v-bind:class="model.icon"></i> {{model.title}} </router-link>
        </li>
        <li class="nav-item nav-dropdown" v-if='model.children' v-show='model.title' @click="handleClick">
            <a class="nav-link nav-dropdown-toggle" href="#"><i v-bind:class="model.icon"></i> {{model.title}}</a>
            <ul class="nav-dropdown-items">
                <tree-menu v-for="(item,key) in model.children" :key="key" :model="item"></tree-menu>
            </ul>
        </li>
    </div>
</template>

<script>
export default {
    name: 'treeMenu',
    props: ['model'],
    data() {
        return {
        }
    },
    mounted () {
    },
    computed: {
    },
    methods: {
        handleClick (e){
            e.stopPropagation();
            e.preventDefault();
//            for(var i= 0,len=dom.length;i<len;i++){
//                dom[i].classList.remove("open");
//            }
            e.target.parentElement.classList.toggle('open');
        },
        activeClick(e){
            var dom = e.target.parentElement.parentElement.parentElement.children;
            for(var i= 0,len=dom.length;i<len;i++){
                dom[i].childNodes[0].childNodes[0].style.color = '#8aa4af'
            }
            e.target.style.color = '#ffffff';
        }
    }
}
</script>

<style>
    .icon.folder {
        background-image: url(/src/assets/folder.png);
    }
    .icon.folder-open {
        background-image: url(/src/assets/folder-open.png);
    }
    .icon.file-text {
        background-image: url(/src/assets/file-text.png);
    }
    .sidebar .iconfont{
        color: #8aa4af;
        margin-right: 10px;
    }
    .sidebar-nav ul{
        list-style: none;
        margin: 0;
        padding-left: 0;
    }
    .sidebar-nav ul li a{
        color: #8aa4af;
        text-decoration: none;
        display: block;
        padding: 10px 0px;
        text-align: left;
    }
    .nav-dropdown-items .nav-link:focus {
        color: #ffffff;
    }
    .nav-dropdown-items .nav-link:hover {
        color: #ffffff;
    }
    /*.sidebar-nav ul li a:hover{*/
        /*background: #20a8d8 !important;*/
    /*}*/
    .sidebar .nav .nav-item{
        padding-left: 20px;
    }
    .sidebar .nav div > .nav-dropdown.open {
        background: rgba(0, 0, 0, 0.2);
        border-left: 4px solid #19a9d5;
    }
    .sidebar .nav .nav-item ul {
        max-height: 0;
        margin: 0;
        overflow-y: hidden;
        transition: max-height .3s ease-in-out;
    }
    .sidebar .nav .nav-item.nav-dropdown.open > ul, .sidebar .nav .nav-item.nav-dropdown.open > ol {
        max-height: 1000px;
    }
    /*.sidebar .nav .nav-item .nav-link.nav-dropdown-toggle::before, .sidebar .nav .nav-item .navbar .nav-dropdown-toggle.dropdown-toggle::before, .navbar .sidebar .nav .nav-item .nav-dropdown-toggle.dropdown-toggle::before {*/
        /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVQ4T2NkoBAwUqifYSQY0NXVZfD3798PlZWVD7CFF94wAGlmYGDYwMDAEFBWVnaBJAOI0QwyEKcLOjs7AxgYGBYwMjI64LIdrwEgya6uroT///9PwGcIwXQAcsm/f/8ukBWIxKRSgi4gZMgwMAAAo+MnEcdI5DsAAAAASUVORK5CYII=");*/
        /*transition: .3s;*/
    /*}*/
    /*.sidebar .nav .nav-item.nav-dropdown.open > .nav-link.nav-dropdown-toggle::before, .sidebar .nav .navbar .nav-item.nav-dropdown.open > .nav-dropdown-toggle.dropdown-toggle::before, .navbar .sidebar .nav .nav-item.nav-dropdown.open > .nav-dropdown-toggle.dropdown-toggle::before {*/
        /*transform: rotate(-90deg);*/
    /*}*/
    /*.nav-dropdown-items:nth-child(n){*/
        /*padding-left: -moz-calc(n * 25px)!important;*/
        /*padding-left: -webkit-calc(n * 25px)!important;*/
        /*padding-left: -o-calc(n * 25px)!important;*/
        /*padding-left: -ms-calc(n * 25pxx)!important;*/
        /*padding-left: calc(n * 25px)!important;*/
    /*}*/
    /*45+20*n*/
</style>