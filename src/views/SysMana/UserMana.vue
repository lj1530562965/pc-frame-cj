<template>
    <div>
        <form>
            <div class="form-group"><Button type="info" @on-click="showModal">新增账号</Button></div>
            <div class="form-group"><Input :spanStyle="spanStyle" :text="'管理员账号:'"></Input></div>
            <div class="form-group" style="margin-right: 10px;"><Button type="info">搜索</Button></div>
            <div class="form-group"> <Button type="info">重置</Button></div>
        </form>

        <Table :itemList="$api.qryuser.data.data" :itemField="itemField"></Table>
        <div>
        </div>
        <Modal :modalData="modalData" @on-sure="sureFn">
            <div class="form-group"><Input :text="'账   号:'" :name="$api.newuser.p.uname"></Input></div>
            <div class="form-group"><Input :text="'密   码:'" :name="$api.newuser.p.password"></Input></div>
            <div class="form-group"><Input :text="'昵   称:'" :name="$api.newuser.p.nick"></Input></div>
            <div class="form-group"><Input :text="'邮   箱:'" :name="$api.newuser.p.email"></Input></div>
            <div class="form-group"><Input :text="'手机号码:'" :name="$api.newuser.p.mobile"></Input></div>
            <div class="form-group"><Input :text="'用户类型:'" :name="$api.newuser.p.utype"></Input></div>
        </Modal>
        <Pagination :currentPage="currentPage" :pageSize="pageSize" :totalPage="totalPage" :totalCount="totalCount" :changeCallback="changeCallback"></Pagination>
    </div>
</template>
<script>
    import Table from '@/views/components/Table.vue'

    import Input from '@/views/components/Input.vue'
    import Modal from '@/views/components/Modal'
    import Pagination from '@/views/components/Pagination'

    export default {
        name: 'usermana',
        data () {
            return {
                spanStyle:{
                    width:'35%'
                },
                currentPage:1,
                pageSize:10,
                totalPage:20,
                totalCount:20,
                modalData:{
                    isShow:false,
                    title:'新增账号'
                },
                itemList: [
                ],
                itemField:[{
                    title:"序号",
                    field:"index"
                },{
                    title:"用户名",
                    field:"userName"
                },{
                    title:"昵称",
                    field:"nick"
                },{
                    title:"角色",
                    field:"roles"
                },{
                    title:"联系电话",
                    field:"mobile"
                },{
                    title:"状态",
                    field:"stateName"
                },{
                    title:"操作",
                    field:["分配角色","冻结","删除"]
                }]
            }
        },
        created(){
            var self = this;
//            self.$api.qryfield.p={
//                "code":"S004"
//            }
//            self.$apiFn.initget(self.$api.qryfield,function(res){
//                if(res.data.result==='success'){
//                    self.$api.qryfield.data.data =res.data.data
//                }
//            })
            self.$api.qryuser.p={
                "page":self.currentPage,
                "pagesize":self.pageSize
            }
            self.$apiFn.initget(self.$api.qryuser,function(res){
                if(res.data.result==='success'){
                    self.totalCount = res.data.rows;
                    self.totalPage = Math.ceil(res.data.rows / self.pageSize);
                    self.$api.qryuser.data.data =res.data.data
                }
            })
        },
        mounted(){
        },
        components: {
            Table,Input,Modal,Pagination
        },
        methods:{
            picked(year, month, date) {
                console.warn(`你选择了${year}年${month}月${date}日`)
            },
            showModal(){
                this.modalData.isShow = true;
            },
            sureFn(){
                var self = this;
                self.$apiFn.get(self.$api.newuser,function(res){
                    self.$api.qryuser.p={
                        "page":self.currentPage,
                        "pagesize":self.pageSize
                    }
                    self.$apiFn.initget(self.$api.qryuser)
                    self.modalData.isShow = false;
                })
            },
            changeCallback(cPage,pageSize){
                var self = this;
                self.currentPage = cPage;
                self.pageSize = pageSize;
                self.$api.qryuser.p={
                    "page":self.currentPage,
                    "pagesize":self.pageSize
                }
                self.$apiFn.initget(self.$api.qryuser)
            }
        }
    }
</script>
<style scoped="">

</style>
