<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <strong>Options</strong>
                    </div>
                    <p v-bind:name="$api.qryuser.p.page">1</p>
                    <p v-bind:name="$api.qryuser.p.pagesize">20</p>
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
            this.$apiFn.get(this.$api.qryuser)
        },
        data () {
            return {
                showSidebar:true,
                qryuser:this.$api.qryuser
            }
        },
        watch:{
            qryuser:{
                handler:function(newValue,oldValue){
                    newValue.data.data[0].userName = 'lanjing'
                },
                deep:true
            }
        },
        methods:{
        }
    }
</script>
