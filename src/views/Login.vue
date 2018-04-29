<template>
    <div class="container">
        <h3 class="title">系统登录</h3>
        <Form ref="$api.login.p" :model="$api.login.p" :rules="$api.login.ruleValidate" :label-width="80">
            <FormItem label="账号:" prop="uname">
                <Input v-model="$api.login.p.uname" placeholder="请输入账号"></Input>
            </FormItem>
            <FormItem label="密码:" prop="pass">
                <Input v-model="$api.login.p.pass" placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem label="验证码:" prop="code">
                <Input style="width: 125px;display: inherit;" v-model="$api.login.p.code" placeholder="请输入验证码"></Input>
                <img src="http://localhost:8080/pallas/sys.do?fn=getcode&p=%7B%7D" width="70" height="35" @click="changeImg" />
            </FormItem>
            <FormItem>
                <Button style="width: 90%;float: left;" type="primary" @click="login">登录</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import {initSkin} from "../lib/skin.js"
    export default {
        name: 'buttons',
        data () {
            return {
//                login:this.$api.login,
                path:''
            }
        },
        created () {
            initSkin()
        },
        mounted(){

        },
//        watch:{
//            login:{
//                handler:function(newValue,oldValue){
//                    if(newValue.data.result==='success'){
//                        window.location.reload();
//                        this.$router.push({path: '/dashboard'})
//                    }
//                },
//                deep:true
//            }
//        },
        methods:{
            login(){
                this.$add('$api.login','',(data) => {
                    window.location.reload();
                    this.$router.push({path: '/dashboard'})
                })
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
        padding-right: 50px;
    }
    .container img{
        position: absolute;
        top: -0.01rem;
        right: 0rem;
    }
    .container h3{
        margin: 0px auto 0.5rem auto;
        text-align: center;
        color: #505458;
        font-weight: 500;
        font-size: 0.37rem;
        padding-left: 30px;
    }
</style>
