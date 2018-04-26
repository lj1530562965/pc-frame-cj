<template>
    <div class="container">
        <h3 class="title">系统登录</h3>
        <label>账号:</label><i-input v-model="login_uname"></i-input>
        <label>密码:</label><i-input v-model="login_pass"></i-input>
        <label>验证码:</label><i-input v-model="login_code"></i-input>
        <img src="http://localhost:8080/pallas/sys.do?fn=getcode&p=%7B%7D" width="70" height="35" @click="changeImg" />
        <Button type="info" @click="$get($api.login,{vm:self})">登录</Button>
    </div>
</template>

<script>
    import Input from '@/views/components/Input.vue'
    import {initSkin} from "../lib/skin.js"
    export default {
        name: 'buttons',
        data () {
            return {
                login_uname:'admin',
                login_pass:'111111',
                login_code:'',
                login:this.$api.login,
                path:'',
                inputStyle1:{
                    width:'70%'
                },
                inputStyle2:{
                    width:'45%'
                },
                self:this
            }
        },
        created () {
            initSkin()
            //this.$apiFn.gets(this.$api.login,{vm:this})
    },
        components: {
           Input
        },
        mounted(){

        },
        watch:{
            login:{
                handler:function(newValue,oldValue){
                    if(newValue.data.result==='success'){
                        window.location.reload();
                        this.$router.push({path: '/dashboard'})
                    }
                },
                deep:true
            }
        },
        methods:{
            aa(){
                this.$get(this.$api.login,{vm:this})
            },
            onInput:function(val){
                console.log(val)
            },
            changeImg(e){
                var timestamp = Date.parse(new Date());
                e.currentTarget.src = e.currentTarget.src+'&timestamp='+timestamp;
            }
        }
    }
</script>
<style lang="scss" scoped="">
    .container{
        border: 1px solid #eaeaea;
        border-radius: 5px;
        box-shadow: 0 0 0.33rem #cac6c6;
        margin: 3.3rem auto;
        width: pxTorem(500px);
        padding: 0.46rem 0.46rem 0.26rem 0.46rem;
        background: #fff;
        display: inline-block;
    }
    .container img{
        /*position: absolute;*/
        /*top: 0.13rem;*/
        /*right: 0.6rem;*/
    }
    .container h3{
        margin: 0px auto 0.5rem auto;
        text-align: center;
        color: #505458;
        font-weight: 500;
        font-size: 0.37rem;
    }
</style>
