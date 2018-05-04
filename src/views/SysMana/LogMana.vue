<template>
    <div>
        <Form :model="$api.qryvisit" inline>
            <FormItem label="访问帐号:">
                <Input v-model="$api.qryvisit.p.visitor" style="display: table-cell;width: 200px;" placeholder="请输入访问帐号"></Input>
            </FormItem>
            <FormItem>
                <label style="margin-top: 5px;">日期:</label>
                <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" v-model="$api.qryvisit.p.fromtime" placeholder="请输入开始日期" style="width: 200px"></DatePicker>
                <label>-</label>
                <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" v-model="$api.qryvisit.p.endtime" placeholder="请输入结束日期" style="width: 200px"></DatePicker>
            </FormItem>
            <FormItem>
                <Button type="info" @click="search">搜索</Button>
                <Button type="info" @click="reset">重置</Button>
            </FormItem>
            <FormItem>
                <Button type="info" @click="$api.delvisit.model=true">删除已选</Button>
            </FormItem>
        </Form>
        <Table ref="table" border no-data-text="无记录" :loading="$api.qryvisit.loading" :columns="itemField" :data="$api.qryvisit.data.data" @on-selection-change="selectFn"></Table>
        <Modal v-model="$api.delvisit.model" width="280px" style="text-align: center;" :loading="loadingModel" :mask-closable="false" title="删除账号" @on-ok="$del($api.delvisit,$api.qryvisit);" @on-cancel="$api.delvisit.model=false">
        <p>您确定要删除?</p>
        </Modal>
        <Page style="margin-top: 20px;text-align: left;" :page-size-opts="[8,10,20,30]" :total="$api.qryvisit.data.rows" :current="$api.qryvisit.p.page" :page-size="$api.qryvisit.p.pagesize" show-elevator show-sizer show-total @on-change="changePageCallback" @on-page-size-change="changePagesizeCallback"></Page>
    </div>
</template>
<script>
    import {formatDate} from '../../utils/date.js'
    export default {
        name: 'usermana',
                data () {
            return {
                itemField:[{
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },{
                    title:"序号",
                    type: 'index',
                    width: 100,
                    align: 'center'
                },{
                    title:"访问账号",
                    key:"visitor"
                },{
                    title:"账号身份",
                    key:"vtypeName"
                },{
                    title:"模块",
                    key:"module"
                },{
                    title:"事件",
                    key:"event"
                },{
                    title:"访问IP",
                    key:"visitIp"
                },{
                    title:"访问时间",
                    key:"visitTime"
                },{
                    title: '操作',
                    key: 'action',
                    width: 300,
                    align: 'center',
                    render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'info'
                            },
                            on: {
                                click: ()=>{
                                this.$api.delvisit.p.ids = params.row.id;
            this.$api.delvisit.model = true;
        }
    }
    }, '删除')
    ]);
    }
    }
    ]
    }
    },
    created(){

    },
    mounted(){
        this.$qry(this.$api.qryvisit)
    },
    methods:{
        selectFn(selection){
            var ids = ''
            _.each(selection,(val) =>{
                ids += val.id+','
            })
            ids = ids.substring(0,ids.length-1)
            this.$api.delvisit.p.ids = ids;
        },
        search(){
            this.$api.qryvisit.p.fromtime = this.$api.qryvisit.p.fromtime ? formatDate(this.$api.qryvisit.p.fromtime,'yyyy-MM-dd hh:mm:ss') : '';
            this.$api.qryvisit.p.endtime = this.$api.qryvisit.p.endtime ? formatDate(this.$api.qryvisit.p.endtime,'yyyy-MM-dd hh:mm:ss') : '';
            this.$qry(this.$api.qryvisit)
        },
        reset(){
            this.$api.qryvisit.p.visitor = '';
            this.$api.qryvisit.p.fromtime = '';
            this.$api.qryvisit.p.endtime = '';
            this.$qry(this.$api.qryvisit)
        },
        changePageCallback(page){
            this.$api.qryvisit.p.page = page
            this.$qry(this.$api.qryvisit)
        },
        changePagesizeCallback(pageSize){
            this.$api.qryvisit.p.pagesize = pageSize
            this.$qry(this.$api.qryvisit)
        }
    }
    }
</script>
<style scoped="">

</style>
