<template>
    <div class="modal-box" v-show="modalData.isShow">
        <div class="mask"></div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    {{modalData.title}}
                    <span class="iconfont icon-del close" @click="cancel"></span>
                </div>
                <div class="modal-body">
                    <slot />
                </div>
                <div class="modal-footer">
                    <Button style="width: 60px;float: right;margin: 0 10px;" @on-click="cancel">取消</Button>
                    <Button style="width: 60px;float: right;margin: 0 10px;" @on-click="$emit('on-sure')">确定</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/views/components/Button.vue'
export default {
  name: 'modal',
  props: ['modalData'],
  data () {
    return {

    }
  },
    mounted(){
    },
    components: {
       Button
    },
    methods:{
        cancel(){
            this.modalData.isShow = false
        }
    }
}
</script>
<style>
    .modal-box{
        position: relative;
    }
    .modal-box .mask{
        position: fixed;
        height: 100%;
        background: #000000;
        z-index: 10000;
        top: 75px;
        left: -moz-calc(15% + 15px);
        left: -webkit-calc(15% + 15px);
        left: -o-calc(15% + 15px);
        left: -ms-calc(15% + 15px);
        left: calc(15% + 15px);
        opacity: 0.5;
        right: 15px;
    }
    .modal-box .modal-dialog{
        width: 600px;
        margin: 30px auto;
        position: fixed;
        top: 20%;
        z-index: 10000;
        left: -moz-calc(15% + (85% - 630px) / 2);
        left: -webkit-calc(15% + (85% - 630px) / 2);
        left: -o-calc(15% + (85% - 630px) / 2);
        left: -ms-calc(15% + (85% - 630px) / 2);
        left: calc(15% + (85% - 630px) / 2);
        height: 100%;
    }
    .modal-box .modal-content{
        background-clip: padding-box;
        background-color: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        outline: 0 none;
        position: absolute;
        width: 100%;
    }
    .modal-box .modal-header {
        padding: 15px;
        border-bottom: 1px solid #e5e5e5;
        text-align: left;
    }
    .modal-box .modal-body {
        padding: 20px 30px 0px 30px;
        min-height: 450px;
    }
    .modal-box .modal-header .close{
        float: right;
        color: #999;
    }
    .modal-box .modal-header .close:hover{
        color: #1a1a1a;
    }
    .modal-box .modal-footer {
        position: absolute;
        bottom: 0;
        width: 600px;
        text-align: right;
        border-top: 1px solid #e5e5e5;
    }
    @media screen and (max-width: 768px) {
        .modal-box .mask{
            left: 15px;
        }
        .modal-box .modal-dialog{
            width: 300px;
            left: -moz-calc((100% - 330px) / 2);
            left: -webkit-calc((100% - 330px) / 2);
            left: -o-calc((100% - 330px) / 2);
            left: -ms-calc((100% - 330px) / 2);
            left: calc((100% - 330px) / 2);
        }
        .modal-box .modal-footer{
            width: 300px;
        }
    }
</style>
