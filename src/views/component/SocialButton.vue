<template>
<div class="animated fadeIn">
<div class="row">
<div class="col-md-6">
    <div class="card">
        <div class="card-header">
            <strong>Options</strong>
        </div>
        <!--<input type="text" v-bind:name="$api.qryuser.p.page" value="1" />-->
        <!--<input type="text" v-bind:name="$api.qryuser.p.pagesize" value="20" />-->
        <!--<textarea type="text" v-bind:name="$api.qryuser.p.page">1</textarea>-->
        <!--<textarea type="text" v-bind:name="$api.qryuser.p.pagesize">20</textarea>-->
        <!--<input type="radio" v-bind:name="$api.qryuser.p.page" value="1" checked />-->
        <!--<input type="radio" v-bind:name="$api.qryuser.p.pagesize" value="20" />-->
        <!--<input type="checkbox" v-bind:name="$api.qryuser.p.page" value="1" checked />-->
        <!--<input type="checkbox" v-bind:name="$api.qryuser.p.pagesize" value="20" checked />-->
        <select v-bind:name="$api.qryuser.p.page" @change="$apiFn.get($api.qryuser)">
            <option>1</option>
            <option>2</option>
        </select>
        <select v-bind:name="$api.qryuser.p.pagesize" @change="$apiFn.get($api.qryuser)">
            <option>10</option>
            <option>20</option>
        </select>
        <div class="card-block">
            <button type="button" class="btn btn-primary">提交</button>
        </div>
        <div class="card-block" v-for="item in $api.qryuser.data.data">
            <button type="button" class="btn btn-primary">{{item.userName}}</button>
        </div>
    </div>
</div><!--/.col-->
</div><!--/.row-->
</div>
</template>

<script>

    export default {
        name: 'buttons',
        mounted(){
            //this.$apiFn.get(this.$api.qryuser)
        },
        data () {
            return {
            }
        }
    }
</script>
