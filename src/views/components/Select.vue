<template>
    <div class="select-box">
        <span class="select-box-name">{{title}}</span>
        <select  v-model="initVal" :name="name" :style="selectStyle" @change="$emit('on-change', $event.target.value)">
            <option v-for="(item,index) in itemList" :key="index" :value="item[value]">{{item[text]}}</option>
        </select>
    </div>
</template>
<script>
    export default {
        name: 'Input',
        props: ['itemList','Selected','title','value','text','name','selectStyle'],
        data ()
        {
            return {
                initVal:this.Selected
            }
        }
    }
</script>
<style scoped>
    .select-box{
        width: 100%;
        height: 50px;
        line-height: 50px;
    }
    .select-box span{
        font-size: 14px;
        padding-right: 10px;
        display: inline-block;
        float: left;
        color: #1a1a1a;
    }
    .select-box select{
        height: 30px;
        border: 1px solid #dddee1;
        border-radius: 4px;
        color: #495060;
        transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        padding-left: 2px;
        float: left;
        margin-top: 10px;
    }
</style>