<template>
    <div>
        <form>
            <div class="form-group"><Input :spanStyle="spanStyle" :text="'接收账号:'"></Input></div>
            <div class="form-group" style="width: 38%;">
                <label style="width: 8%;float: left;display: inline-block;margin-top: 15px;">日期:</label>
                <Datepicker style="float: left;" v-on:picked="picked"></Datepicker>
                <label style=" width: 3%;float: left;margin-top: 15px;">-</label>
                <Datepicker v-on:picked="picked2"></Datepicker>
            </div>
            <div class="form-group" style="margin-right: 10px;"><Button style="width: 100px;">搜索</Button></div>
            <div class="form-group"> <Button style="width: 100px;">重置</Button></div>
            <div class="form-group"> <Button style="width: 100px;">删除已选</Button></div>
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
        <Pagination :currentPage="currentPage" :pageSize="pageSize" :totalPage="totalPage" :totalCount="totalCount" :changeCallback="changeCallback"></Pagination>
    </div>
</template>
<script>
    import Table from '@/views/components/Table.vue'
    import Button from '@/views/components/Button.vue'
    import Input from '@/views/components/Input.vue'
    import Modal from '@/views/components/Modal'
    import Datepicker from '@/views/components/Datepicker'
    import Pagination from '@/views/components/Pagination'
    export default {
        name: 'mesmana',
                data () {
            return {
                spanStyle:{
                    width:'35%'
                },
                modalData:{
                    isShow:false,
                    title:'新增账号'
                },
                inputStyle:{
                    width:'50%'
                },
                currentPage:1,
                pageSize:10,
                totalPage:20,
                totalCount:20,
                itemList:[],
                itemField:[{
                    title:"序号",
                    field:"index"
                },{
                    title:"标题",
                    field:"title"
                },{
                    title:"模板名称",
                    field:"msgTypeName"
                },{
                    title:"收信人",
                    field:"receiver"
                },{
                    title:"内容",
                    field:"content"
                },{
                    title:"发送时间",
                    field:"sendTime"
                },{
                    title:"状态",
                    field:"stateName"
                },{
                    title:"操作",
                    field:["删除"]
                }]
            }
        },
        created(){
            var self = this;
            self.$api.qrynotify.p={
                "page":self.currentPage,
                "pagesize":self.pageSize
            }
            self.$apiFn.initget(self.$api.qrynotify,function(res){
                if(res.data.result==='success'){
                    self.totalCount = res.data.rows;
                    self.totalPage = Math.ceil(res.data.rows / self.pageSize);
                    self.itemList = res.data.data;
                }
            })
        },
        mounted(){
        },
        components: {
            Table,Button,Input,Modal,Datepicker,Pagination
        },
        methods:{
            picked(year, month, date) {
                console.warn(`你选择了${year}年${month}月${date}日`)
            },
            picked2(year, month, date) {
                console.warn(`你选择了${year}年${month}月${date}日`)
            },
            changeCallback(cPage,pageSize){
                var self = this;
                self.currentPage = cPage;
                self.pageSize = pageSize;
                self.$api.qrynotify.p={
                    "page":self.currentPage,
                    "pagesize":self.pageSize
                }
                self.$apiFn.initget(self.$api.qrynotify,function(res){
                    if(res.data.result==='success'){
                        self.itemList = res.data.data;
                    }
                })
            },
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
