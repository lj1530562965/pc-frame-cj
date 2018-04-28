<template>
    <div>
        <i-form :model="$api.qryuser" inline>
            <FormItem>
                <i-button type="info" @click="modal1 = true">新增账号</i-button>
            </FormItem>
            <FormItem label="管理员账号:">
                <i-input  v-model="$api.qryuser.p.uname" style="display: table-cell;width: 200px;" placeholder="请输入账号"></i-input>
            </FormItem>
            <FormItem>
                <i-button type="info" @click="$get($api.qryuser,{vm:self})">搜索</i-button>
                <i-button type="info">重置</i-button>
            </FormItem>
        </i-form>
        <Table border :columns="itemField" :data="$api.qryuser.data.data"></Table>
        <Modal v-model="modal1" :mask-closable="false" title="新增账号" @on-ok="ok" @on-cancel="cancel">
            <i-form ref="form-validate" :model="$api.newuser.p" :rules="$api.newuser.ruleValidate" :label-width="80">
                <Form-item label="账   号:" prop="uname">
                    <i-input v-model="$api.newuser.p.uname" placeholder="请输入账号"></i-input>
                </Form-item>
                <Form-item label="密   码:" prop="password">
                    <i-input v-model="$api.newuser.p.password" placeholder="请输入密码"></i-input>
                </Form-item>
                <Form-item label="昵   称:" prop="nick">
                    <i-input v-model="$api.newuser.p.nick" placeholder="请输入昵称"></i-input>
                </Form-item>
                <Form-item label="邮   箱:" prop="email">
                    <i-input v-model="$api.newuser.p.email" placeholder="请输入邮箱"></i-input>
                </Form-item>
                <Form-item label="手机号码:" prop="mobile">
                    <i-input v-model="$api.newuser.p.mobile" placeholder="请输入手机号码"></i-input>
                </Form-item>
                <Form-item label="用户类型:" prop="utype">
                    <i-input v-model="$api.newuser.p.utype" placeholder="请输入用户类型"></i-input>
                </Form-item>
            </i-form>
        </Modal>
        <Modal v-model="modal2" :mask-closable="false" title="新增账号" @on-ok="ok" @on-cancel="cancel">
        <i-form ref="form-validate" :model="$api.newuser.p" :rules="$api.newuser.ruleValidate" :label-width="80">
            <Form-item label="账   号:" prop="uname">
                <i-input v-model="$api.newuser.p.uname" placeholder="请输入账号"></i-input>
            </Form-item>
            <Form-item label="密   码:" prop="password">
                <i-input v-model="$api.newuser.p.password" placeholder="请输入密码"></i-input>
            </Form-item>
            <Form-item label="昵   称:" prop="nick">
                <i-input v-model="$api.newuser.p.nick" placeholder="请输入昵称"></i-input>
            </Form-item>
            <Form-item label="邮   箱:" prop="email">
                <i-input v-model="$api.newuser.p.email" placeholder="请输入邮箱"></i-input>
            </Form-item>
            <Form-item label="手机号码:" prop="mobile">
                <i-input v-model="$api.newuser.p.mobile" placeholder="请输入手机号码"></i-input>
            </Form-item>
            <Form-item label="用户类型:" prop="utype">
                <i-input v-model="$api.newuser.p.utype" placeholder="请输入用户类型"></i-input>
            </Form-item>
        </i-form>
        </Modal>
        <Page style="margin-top: 20px;" :page-size-opts="[8,10,20,30]" :total="totalCount" :current="$api.qryuser.p.page" :page-size="$api.qryuser.p.pagesize" show-elevator show-sizer show-total @on-change="changePageCallback" @on-page-size-change="changePagesizeCallback"></Page>
    </div>
</template>
<script>
    export default {
        name: 'usermana',
        data () {
            return {
                self:this,
                modal1:false,
                totalCount:20,
                modal2:false,
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
                    key:"roles"
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
                                    this.show(params)
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
                                    this.remove(params.index)
                                }
                            }
                            }, '冻结'),
                            h('Button', {
                                props: {
                                    type: 'info'
                                },
                                on: {
                                    click: ()=>{
                                        this.remove(params.index)
                                    }
                                }
                            }, '冻结')
                    ]);
                    }
                    }
                ]
            }
        },
        created(){
            var self = this;
            this.$get(this.$api.qryuser,{vm:this},function(res){
                if(res.data.result==='success'){
                    self.totalCount = res.data.rows;
                    self.$api.qryuser.data.data =res.data.data
                }
            });
        },
        mounted(){
        },
        methods:{
            show (data) {
                console.log(data)
                this.modal2 = true
                this.$api.newuser.p.uname = data.row.userName
//                this.$Modal.info({
//                    title: 'User Info',
//                    content: `Name：${this.$api.qryuser.data.data[index].name}<br>Age：${this.$api.qryuser.data.data[index].age}<br>Address：${this.$api.qryuser.data.data[index].address}`
//            })
        },
            ok(){
                this.$get(this.$api.newuser,{vm:self});
            },
            cancel(){
                this.$Message.info('Clicked cancel');
            },
            remove (index) {
                //this.$api.qryuser.data.data.splice(index, 1);
            },
            changePageCallback(page){
                var self = this;
                self.$api.qryuser.p.page = page
                this.$get(this.$api.qryuser,{vm:this});
            },
            changePagesizeCallback(pageSize){
                var self = this;
                self.$api.qryuser.p.pagesize = pageSize
                this.$get(this.$api.qryuser,{vm:this});
            }
        }
    }
</script>
<style scoped="">

</style>
