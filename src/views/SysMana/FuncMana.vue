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
                <tbody>
                <tr v-for="item in menuList">
                <template v-if="item.funcs.length >0">
                    <td class="text-center">
                               <Checkbox v-model="item.ischeck" @on-change="checkAll(item)"></Checkbox>
                    </td>
                    <td>{{item.title}}</td>
                    <td>
                        <div v-for="funcs in item.funcs" style="float:left;text-align:left;margin-right:10px;margin-left:10px;">
                             <Checkbox v-model="funcs.ischeck" @click="funcs.ischeck=!funcs.ischeck">{{funcs.title}}</Checkbox>
                        </div>
                    </td>
                </template>
                <template v-if="item.funcs == ''">
                        <td colspan='3' style="text-align:center"></td>
                </template>
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
                menuList:[]
            }
        },
        created(){
            this.$qry(this.$api.qryfunc,(data1)=>{
                this.$api.qryfunc.loading = false;
                var menulist = data1.data;
                var detFuncs = [];
                this.$api.dtlrole.p.id=this.$route.query.id
                this.$qry(this.$api.dtlrole,(data)=>{
                    detFuncs = data.data.funcs;
                for (var i = 0; i < menulist.length; i++) {
                    menulist[i].num = 0;
                    menulist[i].ischeck = menulist[i].ischeck ? menulist[i].ischeck : false
                    if (menulist[i].funcs !='') {
                        for (var j = 0; j < menulist[i].funcs.length; j++) {
                            menulist[i].funcs[j].ischeck = menulist[i].ischeck;
                            for (var x = 0; x < detFuncs.length; x++) {
                                if (detFuncs[x].id == menulist[i].funcs[j].id) {
                                    menulist[i].funcs[j].ischeck = true;
                                    menulist[i].num = menulist[i].num +1;
                                }
                            }
                        }
                        if(menulist[i].num==menulist[i].funcs.length){
                            menulist[i].ischeck = true;
                        }
                    }
                }
                this.menuList = menulist
            });
            });
        },
    methods: {
        authrole(){
            this.$api.authrole.p.id=this.$route.query.id;
            var funcs = [];
            for (var i = 0; i < this.menuList.length; i++) {
                if (this.menuList[i].funcs !=='') {
                    for (var j = 0; j < this.menuList[i].funcs.length; j++) {
                        if(this.menuList[i].funcs[j].ischeck){
                            funcs.push(this.menuList[i].funcs[j].id)
                        }
                    }
                }
            }
            this.$api.authrole.p.funs=funcs;
            this.$del(this.$api.authrole);
        },
        callback(){
            history.back(-1)
        },
        checkAll(item){
            for (var i = 0; i < this.menuList.length; i++) {
                if (this.menuList[i].id ===item.id) {
                    this.menuList[i].ischeck = item.ischeck;
                    for (var j = 0; j < this.menuList[i].funcs.length; j++) {
                        this.menuList[i].funcs[j].ischeck = item.ischeck;
                    }
                }
            }
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