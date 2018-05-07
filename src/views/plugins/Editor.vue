<template>
    <div class="components-container">
        <div class="editor-container">
            <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
        </div>
        <button style="margin-top: 10px;" @click="getUEContent()">获取内容</button>
        <div class="info">备注：需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。</div>
    </div>
</template>
<script>
    import UE from '../../components/ue.vue'
    export default {
        components: {UE},
        data() {
            return {
                defaultMsg: '这里是UE测试',
                config: {
                    initialFrameWidth: null,
                    initialFrameHeight: 350
                }
            }
        },
        methods: {
            getUEContent() {
                let content = this.$refs.ue.getUEContent();
                this.$Modal.success({
                    title: content
                });
                console.log(content)
            }
        }
    };
</script>
<style scoped>
    .info{
        border-radius: 10px;
        line-height: 20px;
        padding: 10px;
        margin: 10px;
        background-color: #ffffff;
    }
</style>