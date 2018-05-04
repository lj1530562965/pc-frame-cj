<template>
    <div class="table-box">
        <table>
            <thead>
                <tr>
                    <th v-for="field in itemField" v-if="field.display===1" v-bind:style="{width: field.width + 'px'}">{{field.sname}}</th>
                    <span v-if="btnList">操作</span>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in itemList">
                    <td v-for="field in itemField" v-if="field.display===1">
                        <!--<span v-if="field.name==='index'">{{index+1}}</span>-->
                        <!--<span v-else-if="field.name==='操作'" v-for="btnlist in field.name">-->
                            <!--<Button style="width: 100px;float: left;margin: 0 10px;">{{btnlist}}</Button>-->
                        <!--</span>-->
                        <!--<span v-else>{{decodeURIComponent(item[field.name])}}</span>-->
                        <span>{{decodeURIComponent(item[field.name])}}</span>
                    </td>
                    <td v-if="btnList" v-for="btn in btnList">
                        <span>
                            <Button style="width: 100px;float: left;margin: 0 10px;">{{btn}}</Button>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Button from '@/views/components/Button.vue'
export default {
  name: 'tables',
  props: ['itemList','itemField','btnList'],
  mounted(){
  },
  components: {
       Button
  }
}
</script>
<style scoped="">
    .table-box{
        width: 100%;
        height: 100%;
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
</style>
