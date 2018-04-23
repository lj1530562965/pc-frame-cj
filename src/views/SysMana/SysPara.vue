<template>
    <div>
        <form>
            <div class="form-group">
                <Select :title="'配置类型: '" :Selected="Selected" :name="$api.qryparam.p.ptype" :value="'ptype'" :text="'pname'"  :itemList="$api.typeparam.data.data" @on-change="$apiFn.get($api.qryparam)"></Select>
            </div>
        </form>
        <Table :itemList="$api.qryparam.data.data" :itemField="itemField"></Table>
        <div>
        </div>
    </div>
</template>
<script>
    import Table from '@/views/components/Table.vue'
    import Button from '@/views/components/Button.vue'
    import Select from '@/views/components/Select'
    export default {
        name: 'syspara',
                data () {
            return {
                Selected:"0",
                typeList:{},
                itemList: [
                ],
                itemField:[{
                    title:"序号",
                    field:"index"
                },{
                    title:"参数名称",
                    field:"pname"
                },{
                    title:"参数值",
                    field:"pvalue"
                },{
                    title:"参数描述",
                    field:"remark"
                },{
                    title:"操作",
                    field:["设置"]
                }]
            }
        },
        created(){
            var self = this;
            self.$apiFn.get(self.$api.typeparam)
            self.$api.qryparam.p={
                'ptype':'0'
            }
            self.$apiFn.initget(self.$api.qryparam,function(res){
                self.$api.qryparam.data.data = res.data.data;
                self.Selected = self.$api.qryparam.data.data[0].ptype;
            })
        },
        mounted(){

        },
        components: {
            Table,Button,Select
        },
        methods:{

        }
    }
</script>
<style scoped="">

</style>
