<template>
    <div>
    <Row>
        <Col span="24">
            <table class="table-box">
                <thead>
                <tr class="active">
                    <th style="width:8%">全选</th>
                    <th style="width:22%">功能模块</th>
                    <th style="width:70%">具体功能</th>
                </tr>
                </thead>
                <tbody v-for="item in menuList">
                <tr><td style="width:100%;" colspan='3'>{{item.title}}</td></tr>
                <tr data-bind="css:{'selected':ischeck}" v-for="list in item.children" >
                    <td class="text-center"><input class="checkall" type="checkbox"></td>
                    <td>{{list.title}}</td>
                    <td>
                        <div v-for="funcs in list.funcs" style="float:left;text-align:left;margin-right:10px;margin-left:10px;">
                                                   <input type="checkbox" :value="funcs.title"><label class="fon-13 fon-n">{{funcs.title}}</label>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        <div class="footer">
            <Button type="info" @click="authrole">保存</Button>
            <Button type="info" @click="callback">返回</Button>
        </div>
        </Col>
    </Row>

    </div>
</template>
<script>
    import transData from '@/utils/transData'
    export default {
        data () {
            return {
                qryfunc:this.$api.qryfunc,
                dtlrole:this.$api.dtlrole,
                menuList:[],
                funcsdata:[]
            }
        },
        // watch:{
        //     dtlrole:{
        //         handler:function(newValue,oldValue){
        //             this.funcsdata = newValue.data.data
        //         },
        //         deep:true
        //         },
        //     qryfunc:{
        //         handler:function(newValue,oldValue){
        //             var menulist = newValue.data.data
        //             for(var i= 0,len=menulist.length;i<len;i++){
        //                 var code = menulist[i].code;
        //                 menulist[i].checked = false;
        //                 menulist[i].pcode = code.substring(0,code.length-1);


        //             }
        //                                 console.log(menulist)
        //                                 console.log(1)
        //             console.log(this.funcsdata)
        //             var menus = transData(menulist, 'code', 'pcode', 'children');
        //             this.menuList = menus
        //         },
        //         deep:true
        //         }
        // },
        mounted(){
            var menulist
            this.$qry(this.$api.qryfunc,(data)=>{
                menulist =data.data
                for(var i= 0,len=menulist.length;i<len;i++){
                    var code = menulist[i].code;
                    menulist[i].checked = false;
                    menulist[i].pcode = code.substring(0,code.length-1);
                }
            });
            console.log(menulist)
            this.$api.dtlrole.p.id=this.$route.query.id
            this.$qry(this.$api.dtlrole,function(data){
                console.log(data)
            });
            var menus = transData(menulist, 'code', 'pcode', 'children');
            this.menuList = menus
        },
        methods: {
            authrole(){
                this.$api.authrole.p.id=this.$route.query.id;
                console.log(this.$api.qryfunc.data.data)
                console.log(this.menuList)
            },
            callback(){
                history.back(-1)
            }
        }
    }
</script>
<style scoped="">
    .table-box{
        width: 100%;
        height: 100%;
    }
    .table-box{
        border-collapse: collapse;
    }
    .table-box thead{
        background: #f5f5f5;
    }
    .table-box tbody tr:nth-of-type(odd){
        background: #f9f9f9;
    }
    .table-box tr{
        height: auto;
    }
    .table-box td{
        border: 1px solid #ddd;
        text-align: center;
        line-height: 45px;
        word-break: break-all;
    }
    .table-box td span{
        height: 30px;
        display: inline-block;
    }
    .table-box th{
        height: 45px;
        border: 1px solid #ddd;
        text-align: center;
    }
    .table-box table{
        width: 100%;
        border: 1px solid #ddd;
        border-collapse: collapse;
        text-align: center;
    }
        .footer{
        margin-top: 20px;
    }
</style>