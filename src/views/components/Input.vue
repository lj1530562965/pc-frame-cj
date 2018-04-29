<template>
    <div class="cj-input-box">
        <span class="input-box-name" :style="spanStyle">{{text}}</span>
        <input type="text" ref="input" :value="value" :style="inputStyle" :name="name" @blur="blurFn" @input="$emit('on-input', $event.target.value)">
        <!--<span style="color: red;" v-if="showMsg">* 111</span>-->
        <slot />
    </div>
</template>
<script>
    export default {
        name: 'Input',
        props: ['text', 'value','name','inputStyle','spanStyle'],
        data (){
            return {
                //showMsg:false
            }
        },
        methods:{
            blurFn(){
                //this.showMsg = true
            }
        }
    }
</script>
<style scoped>
    .cj-input-box{
        width: 100%;
        height: 30px;
        line-height: 30px;
        position: relative;
    }
    .cj-input-box input{
        width: 50%;
        height: 30px;
        border: 1px solid #dddee1;
        border-radius: 4px;
        color: #495060;
        transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        padding-left: 5px;
        float: left;
        font-size: 14px;
    }
    .cj-input-box span{
        text-align: right;
        font-size: 14px;
        padding-right: 10px;
        display: inline-block;
        float: left;
        color: #1a1a1a;
    }
    .cj-input-box input:focus {
        border-color: #57a3f3;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
    }
    .cj-input-box input:hover {
        border-color: #57a3f3;
    }
</style>