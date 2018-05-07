<template>
    <div style="margin: -15px;background: #f0eff5;padding-right: 15px;">
        <Row>
            <Col class="card">
                <Card style="text-align: left;">
                    <p slot="title">收入<Badge style="float: right" count="月"></Badge></p>
                    <h1>400886,200</h1>
                    <p>总收入</p>
                </Card>
            </Col>
            <Col class="card">
            <Card style="text-align: left;">
                <p slot="title">订单<Badge style="float: right" count="全年"></Badge></p>
                <h1>275,800</h1>
                <p>新订单</p>
            </Card>
            </Col>
            <Col class="card">
            <Card style="text-align: left;">
                <p slot="title">访客<Badge style="float: right" count="今天"></Badge></p>
                <h1>106,1200</h1>
                <p>新访客</p>
            </Card>
            </Col>
            <Col class="card">
            <Card style="text-align: left;">
                <p slot="title">活跃用户<Badge style="float: right" count="最近一个月"></Badge></p>
                <h1>80,600</h1>
                <p>12月</p>
            </Card>
            </Col>
        </Row>
        <Row style="margin-top: 20px;">
            <Col style="width: 48%;margin-right: 4%;float: left;">
            <Card style="text-align: left;height: 500px;">
                <p slot="title">数据来源统计</p>
                <div id="container1">
                </div>
            </Card>
            </Col>
            <Col style="width: 48%;float: right;">
            <Card style="text-align: left;height: 500px;">
                <p slot="title">流量统计</p>
                <Table :columns="columns" :data="data"></Table>
            </Card>
            </Col>
        </Row>
        <Row style="margin-top: 20px;">
            <Col span="24">
            <Card style="text-align: left;">
                <p slot="title">历史数据</p>
                <div id="container" style="min-width:400px;height:400px"></div>
            </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    import Highcharts from 'highcharts'
    export default {
        name: 'dashboard',
                data() {
            return {
                columns: [
                    {
                        title:"序号",
                        type: 'index',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: '城市',
                        key: 'city'
                    },
                    {
                        title: '流量(K)',
                        key: 'flow'
                    }
                ],
                data: [
                    {
                        city: '广州',
                        flow: '138'
                    },
                    {
                        city: '乌鲁木齐',
                        flow: '2'
                    },
                    {
                        city: '武汉',
                        flow: '44'
                    },
                    {
                        city: '天津',
                        flow: '45'
                    },
                    {
                        city: '海南',
                        flow: '38'
                    },
                    {
                        city: '深圳',
                        flow: '128'
                    },
                    {
                        city: '北京',
                        flow: '108'
                    },
                    {
                        city: '福州',
                        flow: '19'
                    }
                ]
            }
        },
        created() {


        },
        mounted(){
            this.highcharts()
            this.highcharts1()
        },
        methods:{
            highcharts1(){
                var chart = Highcharts.chart('container1', {
                    title: {
                        text: ''
                    },
                    tooltip: {
                        headerFormat: '{series.name}<br>',
                        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,  // 可以被选择
                            cursor: 'pointer',       // 鼠标样式
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '浏览器访问量占比',
                        data: [
                            ['Firefox',   45.0],
                            ['IE',       26.8],
                            {
                                name: 'Chrome',
                                y: 12.8,
                                sliced: true,  // 默认突出
                                selected: true // 默认选中
                            },
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            ['其他',   0.7]
                        ]
                    }]
                });
            },
            highcharts(){
                var chart = Highcharts.chart('container', {
                    chart: {
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    yAxis: {
                        title: {
                            text: '数量'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },
                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 2009
                        }
                    },
                    series: [{
                        name: '成交数量',
                        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                    }, {
                        name: '注册人数',
                        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                    }, {
                        name: '访问人数',
                        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                    }
//                        {
//                        name: '',
//                        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
//                    }, {
//                        name: '其他',
//                        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
//                    }
                    ],
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }
                });

            }
        }
    }
</script>
<style scoped="">
.card{
    width: 22%;
    float: left;
    margin-right: 4%;
}
.card:last-child{
    margin-right: 0;
}
h1 {
    font-size: 35px;
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg,#f35626,#feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>