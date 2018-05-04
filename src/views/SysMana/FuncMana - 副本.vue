<template>
    <Row>
        <Col span="24">
            <table>
                <thead>
                <tr class="active">
                    <th style="width:8%">全选</th>
                    <th style="width:22%">功能模块</th>
                    <th style="width:70%">具体功能</th>
                </tr>
                </thead>
                <tbody>
                <!-- ko if: isLoading() == false -->
                <!--ko foreach: roleData-->
                <tr data-bind="css:{'selected':ischeck}">
                    <!--ko if:funcs.length>0-->
                    <td class="text-center"><input class="checkall" type="checkbox" data-bind ="click:$root.checkAll,clickBubble:false,checked:ischeck"></td>
                    <td data-bind= "text:title"></td>
                    <td>
                        <!--ko foreach: funcs-->
                        <input type="checkbox" data-bind="attr:{id:id},checked:ischeck"><label data-bind ="text:title,attr:{for:id}" class="fon-13 fon-n"></label>
                        <!--/ko-->
                    </td>
                    <!--/ko-->
                </tr>
                <!--/ko-->
                <tr>
                    <td colspan='3'>
                        <div class="text-center">
                            <button type="button" class="btn btn-success" data-bind="click:saveRole">保存</button>
                            <button type="button" class="btn btn-success" data-bind="click:back">返回</button>
                        </div>
                    </td>
                </tr>
                <!--/ko-->
                <!-- ko if: isLoading -->
                <tr><td colspan='3' style="text-align: center;"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></td></tr>
                </tbody>
            </table>
        </Col>
    </Row>
</template>
<script>
export default {
    name: 'funcmana',
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
    this.$qry(this.$api.qryfunc);

    console.log(this.$api.qryfunc.data.data)
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
