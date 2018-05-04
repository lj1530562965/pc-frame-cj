<template>
    <div>
        <Table ref="table" border no-data-text="无记录" :loading="$api.qrylabel.loading" :columns="itemField" :data="$api.qrylabel.data.data"></Table>
        <Modal v-model="$api.edtlabel.model" :loading="loadingModel" :mask-closable="false" title="设置参数" @on-ok="$add('$api.edtlabel',$api.qrylabel)" @on-cancel="$api.edtlabel.model=false">
        <Form ref="$api.edtlabel.p" :model="$api.edtlabel.p" :rules="$api.edtlabel.ruleValidate" :label-width="80">
            <FormItem label="标签名:" prop="tagname">
                <Input v-model="tagname" disabled placeholder="请输入标签名"></Input>
            </FormItem>
            <FormItem label="标签:" prop="tag">
                <Input v-model="$api.edtlabel.p.tag" placeholder="请输入标签"></Input>
            </FormItem>
            <FormItem label="标签说明:" prop="remark">
                <Input v-model="$api.edtlabel.p.remark" placeholder="请输入标签说明"></Input>
            </FormItem>
        </Form>
        </Modal>
    </div>
</template>
<script>
    export default {
        name: 'labelmana',
                data () {
            return {
                tagname:"",
                itemField:[
                    {
                        title:"序号",
                        type: 'index',
                        width: 100,
                        align: 'center'
                    },{
                        title:"标签名",
                        key:"name"
                    },{
                        title:"标签",
                        key:"tag"
                    },{
                        title:"标签说明",
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
                                    this.$api.edtlabel.p.id = params.row.id;
            this.tagname = params.row.name;
            this.$api.edtlabel.p.tag = params.row.tag;
            this.$api.edtlabel.p.remark = params.row.remark;
            this.$api.edtlabel.model = true;
        }
    }
    }, '修改')
    ]);
    }
    }
    ]
    }
    },
    created(){
        this.$qry(this.$api.qrylabel);
    },
    mounted(){

    },
    methods:{
    }
    }
</script>
<style scoped="">

</style>
