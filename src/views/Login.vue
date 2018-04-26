<template>
    <div class="container">
        <h3 class="title">系统登录</h3>

        <Input  :text="'账号:'" :inputStyle="inputStyle1" :name="$api.login.p.uname" v-model="login_uname" @on-input="onInput"></Input>
        <Input  :text="'密码:'" :inputStyle="inputStyle1" :name="$api.login.p.pass" v-model="login_pass"></Input>
        <Input  :inputStyle="inputStyle2" :text="'验证码:'" :name="$api.login.p.code">
        <img src="http://localhost:8080/pallas/sys.do?fn=getcode&p=%7B%7D" width="70" height="35" @click="changeImg" />
        </Input>
        <i-input v-model="login_uname" style="margin-top: 100px"></i-input>
        <i-input v-model="login_pass"></i-input>
        <i-input v-model="login_code"></i-input>
        <Button @on-click="$get($api.login,{vm:self})">登录</Button>
    </div>
</template>

<script>
    import Input from '@/views/components/Input.vue'
    import Button from '@/views/components/Button.vue'
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
           Input,Button
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
    }
    .container img{
        position: absolute;
        top: 0.13rem;
        right: 0.6rem;
    }
    .container h3{
        margin: 0px auto 0.5rem auto;
        text-align: center;
        color: #505458;
        font-weight: 500;
        font-size: 0.37rem;
    }
</style>
