<template>
    <div>
        <Form class="form" :model="$api.qryparam" inline>
            <FormItem label="配置类型:" prop="ptype" style="display: inline-flex;">
                <Select v-model="$api.qryparam.p.ptype" placeholder="请输入配置类型" @on-change="$qry($api.qryparam)">
                    <Option v-for="(option,index) in $api.typeparam.data.data" :value="option.ptype" :key="index">{{option.pname}}</Option>
                </Select>
            </FormItem>
        </Form>
        <Table ref="table" border no-data-text="无记录" :loading="$api.qryparam.loading" :columns="itemField" :data="$api.qryparam.data.data"></Table>
        <Modal v-model="$api.edtparam.model" :loading="loadingModel" :mask-closable="false" title="设置参数" @on-ok="$add('$api.edtparam',$api.qryparam)" @on-cancel="$api.edtparam.model=false">
        <Form ref="$api.edtparam.p" :model="$api.edtparam.p" :rules="$api.edtparam.ruleValidate" :label-width="80">
            <FormItem label="参数代码:" prop="pcode">
                <Input v-model="pcode" disabled placeholder="请输入参数代码"></Input>
            </FormItem>
            <FormItem label="参数值:" prop="pvalue">
                <Input v-model="$api.edtparam.p.pvalue" placeholder="请输入参数值"></Input>
            </FormItem>
        </Form>
        </Modal>
    </div>
</template>
<script>
    export default {
        name: 'syspara',
                data () {
            return {
                pcode:"",
                itemField:[
                    {
                        title:"序号",
                        type: 'index',
                        width: 100,
                        align: 'center'
                    },{
                        title:"参数名称",
                        key:"pname"
                    },{
                        title:"参数值",
                        key:"pvalue"
                    },{
                        title:"参数描述",
                        key:"remark"
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
                style: {
                    marginRight: '5px'
                },
                on: {
                    click: ()=>{
                    this.$api.edtparam.p.id = params.row.id;
                    this.pcode = params.row.pcode;
                    this.$api.edtparam.p.pvalue = params.row.pvalue;
                    this.$api.edtparam.model = true;
        }
    }
    }, '设置')
    ]);
    }
    }
    ]
    }
    },
    created(){
        this.$api.qryparam.p.ptype = 0;
        this.$qry(this.$api.qryparam);
        this.$qry(this.$api.typeparam);
    },
    mounted(){

    },
    methods:{
        editModel(){
        },
        modelCancel (name) {
            this.$refs[name].resetFields();
        }
    }
    }
</script>
<style scoped="">

</style>
