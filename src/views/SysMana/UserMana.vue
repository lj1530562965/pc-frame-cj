<template>
    <div>
        <Form :model="$api.qryuser" inline>
            <FormItem>
                <Button type="info" @click="showAddModel">新增账号</Button>
            </FormItem>
            <FormItem label="管理员账号:">
                <Input  v-model="$api.qryuser.p.uname" style="display: table-cell;width: 200px;" placeholder="请输入账号"></Input>
            </FormItem>
            <FormItem>
                <Button type="info" @click="$qry($api.qryuser)">搜索</Button>
                <Button type="info" @click="reset()">重置</Button>
            </FormItem>
            <FormItem style="float: right">
                <Button type="info" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</Button>
                <Button type="info" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序和过滤后的数据</Button>
                <Button type="info" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 导出自定义数据</Button>
            </FormItem>
        </Form>
        <Table ref="table" border no-data-text="无记录" :loading="$api.qryuser.loading" :columns="itemField" :data="$api.qryuser.data.data"></Table>
        <Modal v-model="$api.newuser.model" :loading="loadingModel" :mask-closable="false" title="新增账号" @on-ok="$add('$api.newuser',$api.qryuser)" @on-cancel="modelCancel('$api.newuser.p')">
            <Form ref="$api.newuser.p" :model="$api.newuser.p" :rules="$api.newuser.ruleValidate" :label-width="80">
                <FormItem label="账   号:" prop="uname">
                    <Input v-model="$api.newuser.p.uname" placeholder="请输入账号"></Input>
                </FormItem>
                <FormItem label="密   码:" prop="password">
                    <Input v-model="$api.newuser.p.password" type="password" placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem label="昵   称:" prop="nick">
                    <Input v-model="$api.newuser.p.nick" placeholder="请输入昵称"></Input>
                </FormItem>
                <FormItem label="邮   箱:" prop="email">
                    <Input v-model="$api.newuser.p.email" placeholder="请输入邮箱"></Input>
                </FormItem>
                <FormItem label="手机号码:" prop="mobile">
                    <Input v-model="$api.newuser.p.mobile" placeholder="请输入手机号码"></Input>
                </FormItem>
                <FormItem label="用户类型:" prop="utype">
                    <Select v-model="$api.newuser.p.utype" placeholder="请输入用户类型">
                        <Option v-for="(option,index) in $api.qryconst.data.data" :value="option.constValue" :key="index">{{option.constValue}}</Option>
                    </Select>
                </FormItem>
            </Form>
        </Modal>
        <Modal v-model="$api.setrole.model" :loading="loadingModel" :mask-closable="false" title="分配角色" @on-ok="editModel" @on-cancel="$api.setrole.model=false">
        <Table @on-selection-change="selectFn" border ref="selection" no-data-text="无记录" :loading="$api.qryrole.loading" :columns="columns" :data="$api.qryrole.data.data"></Table>
        </Modal>
        <Modal v-model="$api.deluser.model" width="280px" style="text-align: center;" :loading="loadingModel" :mask-closable="false" title="删除账号" @on-ok="$del($api.deluser,$api.qryuser);" @on-cancel="$api.deluser.model=false">
        <p>您确定要删除?</p>
        </Modal>
        <Page style="margin-top: 20px;text-align: left;" :page-size-opts="[8,10,20,30]" :total="$api.qryuser.data.rows" :current="$api.qryuser.p.page" :page-size="$api.qryuser.p.pagesize" show-elevator show-sizer show-total @on-change="changePageCallback" @on-page-size-change="changePagesizeCallback"></Page>
    </div>
</template>
<script>
    export default {
        name: 'usermana',
        data () {
            return {
                qryuser:this.$api.qryuser,
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
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
                    }
                ],
                itemField:[{
                    title:"序号",
                    type: 'index',
                    width: 100,
                    align: 'center'
                },{
                    title:"用户名",
                    key:"userName"
                },{
                    title:"昵称",
                    key:"nick"
                },{
                    title:"角色",
                    key:"rolesName"
                },{
                    title:"联系电话",
                    key:"mobile"
                },{
                    title:"状态",
                    key:"stateName"
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
                                    this.$api.setrole.model = true
                                    this.$api.setrole.p.id = params.row.id
                                    this.$qry(this.$api.qryrole,(data) => {
                                    this.$api.qryrole.data = data;
                                    this.$api.qryrole.loading = false;
                                    _.each(this.$api.qryrole.data.data,(val) =>{
                                        val._checked = false;
                                     })
                                     _.each(params.row.roles,(val1) =>{
                                        _.each(this.$api.qryrole.data.data,(val2) =>{
                                            if(val2.roleName === val1.id){
                                                val2._checked = true
                                            }
                                        })
                                     })
                                    })
                                }
                            }
                            }, '分配角色'),
                            h('Button', {
                                props: {
                                    type: 'info'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: ()=>{
                                    this.$api.setstate.p.id = params.row.id;
                                    this.$api.setstate.p.state = (params.row.state===1) ? 0 : 1;
                                    this.$del(this.$api.setstate,this.$api.qryuser);
                                }
                            }
                            }, params.row.state===1 ? '冻结' : '激活'),
                            h('Button', {
                                props: {
                                    type: 'info'
                                },
                                on: {
                                    click: ()=>{
                                    this.$api.deluser.p.id = params.row.id;
                                    this.$api.deluser.model = true;
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
        watch:{
            qryuser:{
                handler:function(newValue,oldValue){
                    _.each(newValue.data.data,(val1) =>{
                        val1.rolesName = '';
                        _.each(val1.roles,(val2) =>{
                            val1.rolesName += val2.id+','
                        })
                        val1.rolesName = val1.rolesName.substring(0,val1.rolesName.length-1)
                    })
                },
                deep:true
            }
        },
        mounted(){
            var self = this;
            this.$qry(this.$api.qryuser);
        },
        methods:{
            selectFn(selection){
                _.each(this.$api.qryrole.data.data,(val) =>{
                    val._checked = false;
                })
                _.each(selection,(val1) =>{
                    _.each(this.$api.qryrole.data.data,(val2) =>{
                        if(val2.roleName === val1.roleName){
                            val2._checked = true;
                        }
                    })
                })
            },
            editModel(){
                _.each(this.$api.qryrole.data.data,(val) =>{
                    if(val._checked){
                        this.$api.setrole.p.roles += val.roleName+','
                    }
                })
                this.$api.setrole.p.roles = this.$api.setrole.p.roles.substring(0,this.$api.setrole.p.roles.length-1)
                console.log(this.$api.setrole.p.roles)
                this.$del(this.$api.setrole,this.$api.qryuser);
            },
            reset(){
                this.$api.qryuser.p.uname = '';
                this.$qry(this.$api.qryuser)
            },
            modelCancel (name) {
                this.$refs[name].resetFields();
            },
            showAddModel(){
                this.$api.newuser.model = true;
                this.$api.qryconst.p.code = 'S004'
                this.$api.qryconst.p.name = 'utype'
                this.$qry(this.$api.qryconst,(data) => {
                    this.$api.qryconst.data = data;
                });
            },
            changePageCallback(page){
                var self = this;
                self.$api.qryuser.p.page = page
                this.$qry(this.$api.qryuser);
            },
            changePagesizeCallback(pageSize){
                var self = this;
                self.$api.qryuser.p.pagesize = pageSize
                this.$qry(this.$api.qryuser);
            },
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '原始数据'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: '排序和过滤后的数据',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: '自定义数据',
                        columns: this.itemField.filter((col, index) => index < 4),
                        data: this.$api.qryuser.data.data.filter((data, index) => index < 4)
                });
            }
            }
    }
    }
</script>
<style scoped="">

</style>
