<template>
    <div class="container">
        <h3 class="title">系统登录</h3>
        <i-form ref="form-validate" :model="$api.login.p" :rules="$api.login.ruleValidate" :label-width="80">
            <Form-item label="账号:" prop="uname">
                <i-input v-model="$api.login.p.uname" placeholder="请输入姓名"></i-input>
            </Form-item>
            <Form-item label="密码:" prop="pass">
                <i-input v-model="$api.login.p.pass" placeholder="请输入邮箱"></i-input>
            </Form-item>
            <Form-item label="验证码:" prop="code">
                <i-input style="width: 155px;margin-top: -28px;" v-model="$api.login.p.code" placeholder="请输入邮箱"></i-input>
                <img src="http://localhost:8080/pallas/sys.do?fn=getcode&p=%7B%7D" width="70" height="35" @click="changeImg" />
            </Form-item>
            <Form-item>
                <i-button style="width: 100%;margin-left: -58px;" type="primary" @click="$get($api.login,{vm:self})">登录</i-button>
            </Form-item>
        </i-form>
    </div>
</template>

<script>
    import Input from '@/views/components/Input.vue'
    import {initSkin} from "../lib/skin.js"
    export default {
        name: 'buttons',
        data () {
            return {
                login:this.$api.login,
                path:'',
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
//            handleSubmit(name){
//                console.log(this.$refs)
//                console.log(name)
//                this.$refs[name].validate((valid) => {
//                    if (valid) {
//                        this.$Message.success('提交成功!');
//                    }else{
//                        this.$Message.error('表单验证失败!');
//                    }
//            })
//        },
//        handleReset (name) {
//            this.$refs[name].resetFields();
//        },
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
