<template>
    <div class="cj-button-box">
        <button :name="name" @click="$emit('on-click')"><slot /></button>
    </div>
</template>
<script>
    export default {
        name: 'Buttons',
        props: ['name'],
    }
</script>
<style scoped>
    .cj-button-box{
        width: 100%;
        margin: 0 auto;
        height: 50px;
        line-height: 50px;
    }
    .cj-button-box button{
        width: 100%;
        cursor: pointer;
        color: #fff;
        padding: 6px 15px;
        font-size: 12px;
        border-radius: 4px;
        outline: none;
        transition: color 0.2s linear, background-color 0.2s linear, border 0.2s linear;
    }
</style>