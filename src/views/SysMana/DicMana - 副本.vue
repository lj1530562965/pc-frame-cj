<template>
    <div>
        <form>
            <div class="form-group">
                <Select :title="'类型: '" :Selected="Selected" :name="$api.qrytable.p.ttype" :value="'ttype'" :text="'tname'"  :itemList="$api.typetable.data.data" @on-change="$apiFn.get($api.qrytable)"></Select>
            </div>
        </form>
        <Table :itemList="$api.qrytable.data.data" :itemField="$api.qryfield.data.data" :btnList="btnList"></Table>
        <div>
        </div>
    </div>
</template>
<script>
    import Table from '@/views/components/Table2.vue'
    import Button from '@/views/components/Button.vue'
    import Input from '@/views/components/Input.vue'
    import Modal from '@/views/components/Modal'
    import Select from '@/views/components/Select'
    export default {
        name: 'usermana',
        data () {
            return {
                Selected:"0",
                spanStyle:{
                    width:'35%'
                },
                btnList:['查看'],
                modalData:{
                    isShow:false,
                    title:'新增账号'
                }
            }
        },
        created(){
            var self = this;
            self.$apiFn.get(self.$api.typetable);
            self.$api.qryfield.p={
                "code":"D001"
            }
            self.$apiFn.initget(self.$api.qryfield,function(res){
                if(res.data.result==='success'){
                    self.$api.qryfield.data.data =res.data.data
                }
            })
            self.$api.qrytable.p={
                'ttype':'0'
            }
            self.$apiFn.initget(self.$api.qrytable,function(res){
                self.$api.qrytable.data.data = res.data.data;
                self.Selected = self.$api.qrytable.data.data[0].ttype;
            })
        },
        mounted(){
        },
        components: {
            Table,Button,Input,Modal,Select
        },
        methods:{
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
