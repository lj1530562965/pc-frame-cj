<template>
    <div>
        <Form :model="$api.qryrole" inline>
            <FormItem>
                <Button type="info" @click="$api.newrole.model=true">新增角色</Button>
            </FormItem>
        </Form>
        <Table ref="table" border no-data-text="无记录" :loading="$api.qryrole.loading" :columns="itemField" :data="$api.qryrole.data.data"></Table>
        <Modal v-model="$api.newrole.model" :loading="loadingModel" :mask-closable="false" title="新增角色" @on-ok="$add('$api.newrole',$api.qryrole)" @on-cancel="modelCancel('$api.newrole.p')">
        <Form ref="$api.newrole.p" :model="$api.newrole.p" :rules="$api.newrole.ruleValidate" :label-width="80">
            <FormItem label="角色名:" prop="roleName">
                <Input v-model="$api.newrole.p.roleName" placeholder="请输入角色名"></Input>
            </FormItem>
            <FormItem label="角色中文名:" prop="roleCName">
                <Input v-model="$api.newrole.p.roleCName" placeholder="请输入角色中文名"></Input>
            </FormItem>
            <FormItem label="备   注:" prop="remark">
                <Input v-model="$api.newrole.p.remark" placeholder="请输入备注"></Input>
            </FormItem>
        </Form>
        </Modal>
        <Modal v-model="$api.edtrole.model" :loading="loadingModel" :mask-closable="false" title="修改角色" @on-ok="$add('$api.edtrole',$api.qryrole)" @on-cancel="$api.edtrole.model=false">
        <Form ref="$api.edtrole.p" :model="$api.edtrole.p" :rules="$api.edtrole.ruleValidate" :label-width="80">
            <FormItem label="角色名:" prop="roleName">
                <Input v-model="roleName" disabled placeholder="请输入角色名"></Input>
            </FormItem>
            <FormItem label="角色中文名:" prop="roleCName">
                <Input v-model="$api.edtrole.p.roleCName" placeholder="请输入角色中文名"></Input>
            </FormItem>
            <FormItem label="备   注:" prop="remark">
                <Input v-model="$api.edtrole.p.remark" placeholder="请输入备注"></Input>
            </FormItem>
        </Form>
        </Modal>
        <Modal v-model="$api.delrole.model" width="280px" style="text-align: center;" :loading="loadingModel" :mask-closable="false" title="删除角色" @on-ok="$del($api.delrole,$api.qryrole);" @on-cancel="$api.delrole.model=false">
        <p>您确定要删除?</p>
        </Modal>
    </div>
</template>
<script>
export default {
    name: 'rolemana',
            data () {
        return {
            roleName:"",
            itemField:[
                {
                    title:"序号",
                    type: 'index',
                    width: 100,
                    align: 'center'
                },                {
                    title: '角色名',
                    key: 'roleName'
                },
                {
                    title: '角色中文名',
                    key: 'roleCName'
                },
                {
                    title: '备注',
                    key: 'remark'
                },
                {
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
                                this.$router.push({path: '/funcmana?id='+params.row.id})
}
}
}, '权限设置'),
h('Button', {
    props: {
        type: 'info'
    },
    style: {
        marginRight: '5px'
    },
    on: {
        click: ()=>{
        this.$api.edtrole.p.id = params.row.id;
        this.roleName = params.row.roleName;
        this.$api.edtrole.p.roleCName = params.row.roleCName;
        this.$api.edtrole.p.remark = params.row.remark;
        this.$api.edtrole.model = true;
}
}
}, '修改'),
h('Button', {
    props: {
        type: 'info'
    },
    on: {
        click: ()=>{
        this.$api.delrole.p.id = params.row.id;
        this.$api.delrole.model = true;
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
    this.$qry(this.$api.qryrole);
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
