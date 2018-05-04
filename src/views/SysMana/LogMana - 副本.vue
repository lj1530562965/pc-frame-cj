<template>
    <div>
        <form>
            <div class="form-group"><Input :spanStyle="spanStyle" :text="'访问账号:'"></Input></div>
            <div class="form-group" style="width: 38%;">
                <label style="margin-top: 5px;">日期:</label>
                <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                <label>-</label>
                <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            </div>
            <div class="form-group" style="margin-right: 10px;"><Button type="info">搜索</Button></div>
            <div class="form-group"> <Button type="info">重置</Button></div>
            <div class="form-group"> <Button type="info">删除已选</Button></div>
        </form>
        <Table :itemList="$api.qryvisit.data.data" :itemField="itemField"></Table>
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
        <Pagination :currentPage="currentPage" :pageSize="pageSize" :totalPage="totalPage" :totalCount="totalCount" :changeCallback="changeCallback"></Pagination>
    </div>
</template>
<script>
    import Table from '@/views/components/Table.vue'
    import Input from '@/views/components/Input.vue'
    import Modal from '@/views/components/Modal'
    import Pagination from '@/views/components/Pagination'
    export default {
        name: 'logmana',
                data () {
            return {
                spanStyle:{
                    width:'35%'
                },
                modalData:{
                    isShow:false,
                    title:'新增账号'
                },
                currentPage:1,
                pageSize:10,
                totalPage:20,
                totalCount:20,
                inputStyle:{
                    width:'50%'
                },
                itemList: [
                ],
                itemField:[{
                    title:"序号",
                    field:"index"
                },{
                    title:"访问账号",
                    field:"visitor"
                },{
                    title:"账号身份",
                    field:"vtypeName"
                },{
                    title:"模块",
                    field:"module"
                },{
                    title:"事件",
                    field:"event"
                },{
                    title:"访问IP",
                    field:"visitIp"
                },{
                    title:"访问时间",
                    field:"visitTime"
                },{
                    title:"操作",
                    field:["删除"]
                }]
            }
        },
        created(){
            var self = this;
            self.$api.qryvisit.p={
                "page":self.currentPage,
                "pagesize":self.pageSize
            }
            self.$apiFn.initget(self.$api.qryvisit,function(res){
                if(res.data.result==='success'){
                    self.totalCount = res.data.rows;
                    self.totalPage = Math.ceil(res.data.rows / self.pageSize);
                    self.$api.qryvisit.data.data =res.data.data;
                }
            })
        },
        mounted(){
        },
        components: {
            Table,Input,Modal,Pagination
        },
        methods:{
            showModal(){
                this.modalData.isShow = true;
            },
            changeCallback(cPage,pageSize){
                var self = this;
                self.currentPage = cPage;
                self.pageSize = pageSize;
                self.$api.qryvisit.p={
                    "page":self.currentPage,
                    "pagesize":self.pageSize
                }
                self.$apiFn.initget(self.$api.qryvisit)
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
