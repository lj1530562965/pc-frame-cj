<template>
    <div>
        <form>
            <div class="form-group"><Button type="info" @on-click="showModal">新增角色</Button></div>
        </form>
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
    import Input from '@/views/components/Input.vue'
    import Modal from '@/views/components/Modal'
    export default {
        name: 'rolemana',
                data () {
            return {
                modalData:{
                    isShow:false,
                    title:'新增角色'
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
                    title:"角色名",
                    field:"roleName"
                },{
                    title:"中文名",
                    field:"roleCName"
                },{
                    title:"备注",
                    field:"remark"
                },{
                    title:"操作",
                    field:["权限设置","删除","修改"]
                }]
            }
        },
        created(){
            var self = this;
            self.$apiFn.get(self.$api.qryrole,function(res){
                var data = res.data;
                if(data.result==='success'){
                    console.log(data)
                    self.itemList = data.data;
                }
            })
        },
        mounted(){
        },
        components: {
            Table,Input,Modal
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
