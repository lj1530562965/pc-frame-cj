<template>
    <div>
        <form>
        <div class="form-group"><Button type="info" @on-click="showModal">新增模板</Button></div>
        <div class="form-group"><Input :text="'标题:'"></Input></div>
            <div class="form-group">
                <Select :title="'类型: '" :Selected="Selected" :name="$api.qrytemplate.p.msgType" :value="'constId'" :text="'constValue'"  :itemList="$api.qryconst.data.data" @on-change="$apiFn.get($api.qrytemplate)"></Select>
            </div>
        <div class="form-group" style="margin-right: 10px;"><Button type="info">搜索</Button></div>
            <div class="form-group" style="margin-right: 10px;"><Button type="info">重置</Button></div>
        </form>
        <Table :itemList="$api.qrytemplate.data.data" :itemField="itemField"></Table>
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
    import Select from '@/views/components/Select'
    export default {
        name: 'mestpl',
                data () {
            return {
                Selected:0,
                modalData:{
                    isShow:false,
                    title:'新增账号'
                },
                inputStyle:{
                    width:'50%'
                },
                itemField:[{
                    title:"序号",
                    field:"index"
                },{
                    title:"模板名称",
                    field:"tempName"
                },{
                    title:"标题",
                    field:"title"
                },{
                    title:"内容",
                    field:"content"
                },{
                    title:"操作",
                    field:["删除","修改"]
                }]
            }
        },
        created(){
            var self = this;
            self.$api.qryconst.p={
                'code':'S006',
                'name':'msgType'
            }
            self.$apiFn.initget(self.$api.qryconst);
            self.$api.qrytemplate.p={
                'msgType':self.$api.qryconst.data.data[0].constId
            }
            self.$apiFn.initget(self.$api.qrytemplate,function(res){
                self.Selected = res.data.data[0].msgType;
                self.$api.qrytemplate.data.data = res.data.data;
            })
        },
        mounted(){
        },
        components: {
            Table,Input,Modal,Select
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
