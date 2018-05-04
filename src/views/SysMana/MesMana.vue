<template>
    <div>
        <Form :model="$api.qrynotify" inline>
            <FormItem label="接收账号:">
                <Input v-model="$api.qrynotify.p.receiver" style="display: table-cell;width: 200px;" placeholder="请输入账号"></Input>
            </FormItem>
            <FormItem>
                <label style="margin-top: 5px;">日期:</label>
                <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" v-model="$api.qrynotify.p.fromtime" placeholder="请输入开始日期" style="width: 200px"></DatePicker>
                <label>-</label>
                <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" v-model="$api.qrynotify.p.endtime" placeholder="请输入结束日期" style="width: 200px"></DatePicker>
            </FormItem>
            <FormItem>
                <Button type="info" @click="search">搜索</Button>
                <Button type="info" @click="reset">重置</Button>
            </FormItem>
            <FormItem>
                <Button type="info" @click="$api.delnotify.model=true">删除已选</Button>
            </FormItem>
        </Form>
        <Table ref="table" border no-data-text="无记录" :loading="$api.qrynotify.loading" :columns="itemField" :data="$api.qrynotify.data.data" @on-selection-change="selectFn"></Table>
        <Modal v-model="$api.delnotify.model" width="280px" style="text-align: center;" :loading="loadingModel" :mask-closable="false" title="删除账号" @on-ok="$del($api.delnotify,$api.qrynotify);" @on-cancel="$api.delnotify.model=false">
        <p>您确定要删除?</p>
        </Modal>
        <Page style="margin-top: 20px;text-align: left;" :page-size-opts="[8,10,20,30]" :total="$api.qrynotify.data.rows" :current="$api.qrynotify.p.page" :page-size="$api.qrynotify.p.pagesize" show-elevator show-sizer show-total @on-change="changePageCallback" @on-page-size-change="changePagesizeCallback"></Page>
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
                width: 80,
                align: 'center'
            },{
                title:"标题",
                key:"title"
            },{
                title:"模板名称",
                key:"msgTypeName"
            },{
                title:"收信人",
                key:"receiver"
            },{
                title:"内容",
                key:"content",
                width:350
            },{
                title:"发送时间",
                key:"sendTime"
            },{
                title:"状态",
                key:"stateName"
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
        this.$api.delnotify.p.ids = params.row.id;
this.$api.delnotify.model = true;
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
    this.$qry(this.$api.qrynotify)
},
methods:{
    selectFn(selection){
        var ids = ''
        _.each(selection,(val) =>{
            ids += val.id+','
    })
    ids = ids.substring(0,ids.length-1)
    this.$api.delnotify.p.ids = ids;
},
    search(){
        this.$api.qrynotify.p.fromtime = this.$api.qrynotify.p.fromtime ? formatDate(this.$api.qrynotify.p.fromtime,'yyyy-MM-dd hh:mm:ss') : '';
        this.$api.qrynotify.p.endtime = this.$api.qrynotify.p.endtime ? formatDate(this.$api.qrynotify.p.endtime,'yyyy-MM-dd hh:mm:ss') : '';
        this.$qry(this.$api.qrynotify)
    },
reset(){
    this.$api.qrynotify.p.receiver = '';
    this.$api.qrynotify.p.fromtime = '';
    this.$api.qrynotify.p.endtime = '';
    this.$qry(this.$api.qrynotify)
},
changePageCallback(page){
    this.$api.qrynotify.p.page = page
    this.$qry(this.$api.qrynotify)
},
changePagesizeCallback(pageSize){
    this.$api.qrynotify.p.pagesize = pageSize
    this.$qry(this.$api.qrynotify)
}
}
}
</script>
<style scoped="">

</style>
