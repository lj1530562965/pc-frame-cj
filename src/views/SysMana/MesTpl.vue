<template>
    <div>
        <Form :model="$api.qrytemplate" inline>
            <FormItem>
                <Button type="info" @click="showAddModel">新增模板</Button>
            </FormItem>
            <FormItem label="标题:">
                <Input  v-model="$api.qrytemplate.p.title" style="display: table-cell;width: 200px;" placeholder="请输入标题"></Input>
            </FormItem>
            <FormItem label="配置类型:" prop="msgType" style="display: inline-flex;">
                <Select v-model="$api.qrytemplate.p.msgType" placeholder="请输入配置类型" @on-change="$qry($api.qrytemplate)">
                <Option v-for="(option,index) in $api.qryconst.data.data" :value="option.constId" :key="index">{{option.constValue}}</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="info" @click="$qry($api.qrytemplate)">搜索</Button>
                <Button type="info" @click="reset()">重置</Button>
            </FormItem>
        </Form>
        <Table ref="table" border no-data-text="无记录" :loading="$api.qrytemplate.loading" :columns="itemField" :data="$api.qrytemplate.data.data"></Table>
        <Modal v-model="$api.newtemplate.model" :loading="loadingModel" :mask-closable="false" title="新增模板" @on-ok="$add('$api.newtemplate',$api.qrytemplate)" @on-cancel="modelCancel('$api.newtemplate.p')">
        <Form ref="$api.newtemplate.p" :model="$api.newtemplate.p" :rules="$api.newtemplate.ruleValidate" :label-width="80">
            <FormItem label="模板类型:" prop="msgType">
                <Select v-model="$api.newtemplate.p.msgType" placeholder="请输入模板类型">
                    <Option v-for="(option,index) in $api.qryconst.data.data" :value="option.constId" :key="index">{{option.constValue}}</Option>
                </Select>
            </FormItem>
            <FormItem label="模板名称:" prop="tempName">
                <Input v-model="$api.newtemplate.p.tempName" placeholder="请输入模板名称"></Input>
            </FormItem>
            <FormItem label="模板标题:" prop="title">
                <Input v-model="$api.newtemplate.p.title" placeholder="请输入模板标题"></Input>
            </FormItem>
            <FormItem label="模板内容:" prop="content">
                <Input v-model="$api.newtemplate.p.content" type="textarea" :autosize="{minRows: 3}" placeholder="请输入模板内容"></Input>
            </FormItem>
        </Form>
        </Modal>
        <Modal v-model="$api.edttemplate.model" :loading="loadingModel" :mask-closable="false" title="修改模板" @on-ok="$add('$api.edttemplate',$api.qrytemplate)" @on-cancel="$api.edttemplate.model=false">
        <Form ref="$api.edttemplate.p" :model="$api.edttemplate.p" :rules="$api.edttemplate.ruleValidate" :label-width="80">
            <FormItem label="模板类型:" prop="msgTypeName">
                <Input v-model="msgTypeName" disabled placeholder="请输入模板名称"></Input>
            </FormItem>
            <FormItem label="模板名称:" prop="tempName">
                <Input v-model="$api.edttemplate.p.tempName" disabled placeholder="请输入模板名称"></Input>
            </FormItem>
            <FormItem label="模板标题:" prop="title">
                <Input v-model="$api.edttemplate.p.title" placeholder="请输入模板标题"></Input>
            </FormItem>
            <FormItem label="模板内容:" prop="content">
                <Input v-model="$api.edttemplate.p.content" type="textarea" :autosize="{minRows: 3}" placeholder="请输入模板内容"></Input>
            </FormItem>
        </Form>
        </Modal>
        <Modal v-model="$api.deltemplate.model" width="280px" style="text-align: center;" :loading="loadingModel" :mask-closable="false" title="删除模板" @on-ok="$del($api.deltemplate,$api.qrytemplate);" @on-cancel="$api.deltemplate.model=false">
        <p>您确定要删除?</p>
        </Modal>
    </div>
</template>
<script>
    export default {
        name: 'syspara',
                data () {
            return {
                msgTypeName:"",
                itemField:[
                    {
                        title:"序号",
                        type: 'index',
                        width: 80,
                        align: 'center'
                    },{
                        title:"模板名称",
                        key:"tempName"
                    },{
                        title:"标题",
                        key:"title"
                    },{
                        title:"内容",
                        key:"content",
                        width: 600
                    },{
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        width:200,
                        render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'info'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: ()=>{
                                    this.$api.edttemplate.p.id = params.row.id;
            this.$api.edttemplate.p.msgType = params.row.msgType;
            this.msgTypeName = params.row.msgTypeName;
            this.$api.edttemplate.p.tempName = params.row.tempName;
            this.$api.edttemplate.p.title = params.row.title;
            this.$api.edttemplate.p.content = params.row.content;
            this.$api.edttemplate.model = true;
        }
    }
    }, '修改'),
    h('Button', {
        props: {
            type: 'info'
        },
        on: {
            click: ()=>{
            this.$api.deltemplate.p.id = params.row.id;
    this.$api.deltemplate.model = true;
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
        this.$api.qryconst.p.code = 'S006';
        this.$api.qryconst.p.name = 'msgType';
        this.$qry(this.$api.qryconst);
        this.$api.qrytemplate.p.msgType = 0;
        this.$qry(this.$api.qrytemplate);
    },
    mounted(){

    },
    methods:{
        reset(){
            this.$api.qrytemplate.p.title = '';
            this.$qry(this.$api.qrytemplate)
        },
        showAddModel(){
            this.$api.newtemplate.model = true;
            this.$api.qryconst.p.code = 'S006'
            this.$api.qryconst.p.name = 'msgType'
            this.$qry(this.$api.qryconst,(data) => {
                this.$api.qryconst.data = data;
        });
    },
        modelCancel (name) {
            this.$refs[name].resetFields();
        }
    }
    }
</script>
<style scoped="">

</style>
