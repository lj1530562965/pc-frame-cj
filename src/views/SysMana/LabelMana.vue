<template>
    <div>
        <!--<form>-->
        <!--<div class="form-group"><Button style="width: 100px;" @on-click="showModal">新增账号</Button></div>-->
        <!--<div class="form-group"><Input :text="'管理员账号:'"></Input></div>-->
        <!--<div class="form-group" style="margin-right: 10px;"><Button style="width: 100px;">搜索</Button></div>-->
        <!--<div class="form-group"> <Button style="width: 100px;">重置</Button></div>-->
        <!--</form>-->
        <Table :itemList="itemList" :itemField="itemField"></Table>
        <div>
        </div>
        <Modal :modalData="modalData" @on-sure="sureFn">
        <div class="form-group"><Input :text="'管理员账号:'" :inputStyle="inputStyle" ></Input></div>
        <div class="form-group"><Input :text="'管理员账号:'" :inputStyle="inputStyle" ></Input></div>
        <div class="form-group"><Input :text="'管理员账号:'" :inputStyle="inputStyle" ></Input></div>
        <div class="form-group"><Input :text="'管理员账号:'" :inputStyle="inputStyle" ></Input></div>
        <div class="form-group"><Input :text="'管理员账号:'" :inputStyle="inputStyle" ></Input></div>
        <div class="form-group"><Input :text="'管理员账号:'" :inputStyle="inputStyle" ></Input></div>
        <div class="form-group"><Input :text="'管理员账号:'" :inputStyle="inputStyle" ></Input></div>
        </Modal>
    </div>
</template>
<script>
    import Table from '@/views/components/Table.vue'
    import Button from '@/views/components/Button.vue'
    import Input from '@/views/components/Input.vue'
    import Modal from '@/views/components/Modal'
    export default {
        name: 'labelmana',
                data () {
            return {
                modalData:{
                    isShow:false,
                    title:'新增账号'
                },
                inputStyle:{
                    width:'50%'
                },
                itemList: [
                ],
                itemField:[{
                    title:"序号",
                    field:"index"
                },{
                    title:"标签名",
                    field:"name"
                },{
                    title:"标签",
                    field:"tag"
                },{
                    title:"操作",
                    field:["修改"]
                }]
            }
        },
        created(){
            var self = this;
            self.$apiFn.get(self.$api.qrylabel,function(res){
                var data = res.data;
                if(data.result==='success'){
                    self.itemList = data.data;
                    console.log(self.itemList)
                }
            })
        },
        mounted(){
        },
        components: {
            Table,Button,Input,Modal
        },
        methods:{
            showModal(){
                this.modalData.isShow = true;
            },
            sureFn(){
                alert(1)
                this.modalData.isShow = false;
            }
        }
    }
</script>
<style scoped="">

</style>
