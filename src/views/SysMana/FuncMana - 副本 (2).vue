<template>
    <div>
        <table class="tabletitle">
            <thead>
            <tr>
                <td style="width: 60px;"><Checkbox v-model="checkall"></Checkbox></td>
                <td style="width: 100px;">功能模块</td>
                <td>具体功能</td>
            </tr>
            </thead>
        </table>
        <div v-for="item in menuList">
            <caption class="title">{{item.title}}</caption>
            <Table border ref="selection" :show-header="header" :columns="columns4" :data="item.children">

            </Table>
        </div>
        <div class="footer">
            <Button type="info" @click="authrole">保存</Button>
            <Button type="info" @click="callback">返回</Button>
        </div>

    </div>
</template>
<script>
    import transData from '@/utils/transData'
    export default {
        data () {
            return {
                checkall:false,
                header:false,
                qryfunc:this.$api.qryfunc,
                menuList:[],
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '功能模块',
                        key: 'title',
                        width:100
                    },
                    {
                        title: '具体功能',
                        key: 'funcs',
                        render: (h, params) => {
                        var transdata=this.transform(h,params)
                        return h('div', transdata);
                    }
                    }
                ],
                data1: [
                    {
                        name: '主体所在地',
                        age: 18,
                        address: '企业所在地统计',
                        date: '2016-10-03'
                    },
                    {
                        name: '主体所在地',
                        age: 24,
                        address: '企业所在地统计',
                        date: '2016-10-01'
                    }
                ]
            }
        },
        watch:{
            qryfunc:{
                handler:function(newValue,oldValue){
                    var menulist = newValue.data.data
                    for(var i= 0,len=menulist.length;i<len;i++){
                        var code = menulist[i].code;
                        menulist[i].pcode = code.substring(0,code.length-1);
                    }
                    var menus = transData(menulist, 'code', 'pcode', 'children');
                    this.menuList = menus
                },
                deep:true
                }
        },
        mounted(){
            this.$qry(this.$api.qryfunc);
            this.$api.dtlrole.p.id=this.$route.query.id
            this.$qry(this.$api.dtlrole);
        },
        methods: {
            authrole(){
                this.$api.authrole.p.id=this.$route.query.id;
                console.log(this.$api.qryfunc.data.data)
                console.log(this.menuList)
            },
            callback(){
                history.back(-1)
            },
            transform(h,params){
                var transdata = [];
                if(this.$api.dtlrole.data.data.funcs){
                    var dtlrole = this.$api.dtlrole.data.data.funcs;
                }
                if(params.row.funcs){
                    for(var i= 0,len=params.row.funcs.length;i<len;i++){
                        params.row.funcs[i].checked = false;
                        for(var j= 0,dtlrolelen=dtlrole.length;j<dtlrolelen;j++){
                            if(params.row.funcs[i].id === dtlrole[j].id){
                                params.row.funcs[i].checked = true;
                            }
                        }
                        transdata.push(h('Checkbox', {
                            props: {
                                value: params.row.funcs[i].checked
                            },
                            style: {
                                marginRight: '5px'
                            }
                        }, params.row.funcs[i].title))
                    }
                }
                return transdata
            }
        }
    }
</script>
<style scoped="">
    .tabletitle{
        width: 100%;
        border-collapse: collapse;
    }
    .tabletitle tr td{
        border: 1px solid #e9e9e9;
        background: #f7f7f7;
        white-space: nowrap;
        color: #5c6b77;
        height: 48px;
        text-align: center;
    }
    .footer{
        margin-top: 20px;
    }
    .title{
        text-align: center;
        display: block;
        background-color: rgb(245, 245, 245);
        height: 48px;
        line-height: 48px;
    }
</style>