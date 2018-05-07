<template>
    <div>
        <Row>
            <Col span="24">
            <div style="float: left;margin-bottom: 20px;">
                一、线图(折线图及曲线图)
            </div>
            <div style="float: right;margin-bottom: 20px;">
                <label>主题：</label>
                <Select v-model="selectTheme" style="width:200px" @on-change="changeTheme">
                <Option v-for="item in chartTheme" :value="item" :key="item">{{ item }}</Option>
                </Select>
            </div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <div id="container1" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
                <div id="container2" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container3" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container4" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container5" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container6" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container7" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container8" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="24">
            <div style="float: left;margin: 20px 0;">
                二、面积图
            </div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container9" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container10" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container11" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container12" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container13" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container14" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container15" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container16" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="24">
            <div style="float: left;margin: 20px 0;">
                三、柱形图(柱状图及条形图)
            </div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container17" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container18" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container19" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container20" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container21" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container22" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container23" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container24" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container25" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container26" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="24">
            <div style="float: left;margin: 20px 0;">
                四、饼形图(饼图及环形图)
            </div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container27" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container28" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container29" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container30" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container31" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container32" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="24">
            <div style="float: left;margin: 20px 0;">
                五、散点图及气泡图
            </div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container33" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container34" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="24">
            <div style="float: left;margin: 20px 0;">
                六、混合图
            </div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container35" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container36" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container37" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container38" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="24">
            <div style="float: left;margin: 20px 0;">
                七、3D图
            </div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container39" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container40" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <div id="container41" style="max-width:800px;height:400px"></div>
            </Col>
            <Col span="12">
            <div id="container42" style="min-width:400px;height:400px"></div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import Highcharts from 'highcharts'
//    import  '../../../node_modules/highcharts/highcharts.js'
//    import  '../../../node_modules/highcharts/modules/exporting.js'
//    import  '../../../node_modules/highcharts/modules/exporting.js'
//    import  '../../../node_modules/highcharts/modules/series-label.js'
//    import  '../../../node_modules/highcharts/modules/oldie.js'
    import darkblue from '../../lib/chartTheme/darkblue.js'
    import avocado from '../../lib/chartTheme/avocado.js'
    import darkgreen from '../../lib/chartTheme/darkgreen.js'
    import darkunica from '../../lib/chartTheme/darkunica.js'
    import gray from '../../lib/chartTheme/gray.js'
    import grid from '../../lib/chartTheme/grid.js'
    import gridlight from '../../lib/chartTheme/gridlight.js'
    import sandsignika from '../../lib/chartTheme/sandsignika.js'
    import skies from '../../lib/chartTheme/skies.js'
    import sunset from '../../lib/chartTheme/sunset.js'
    export default {
        name: 'charts',
        data () {
            return {
                selectTheme:"",
                chartTheme:['avocado','darkblue','darkgreen','darkunica','gray','grid','gridlight','sandsignika','skies','sunset']
                }
        },
        created (){
        },
        mounted(){
            Highcharts.setOptions(avocado);
            this.initchart()
        },
        methods:{
            initchart(){
                //线图(折线图及曲线图)
                this.highcharts1()
                this.highcharts2()
                this.highcharts3()
                this.highcharts4()
                this.highcharts5()
                this.highcharts6()
                this.highcharts7()
                //面积图
                this.highcharts9()
                this.highcharts10()
                this.highcharts11()
                this.highcharts12()
                this.highcharts13()
                this.highcharts14()
                this.highcharts15()
                //柱形图(柱状图及条形图)
                this.highcharts17()
                this.highcharts18()
                this.highcharts19()
                this.highcharts20()
                this.highcharts21()
                this.highcharts22()
                this.highcharts23()
                this.highcharts24()
                this.highcharts25()
                this.highcharts26()
                //饼形图(饼图及环形图)
                this.highcharts27()
                this.highcharts28()
                this.highcharts29()
                this.highcharts30()
                this.highcharts31()
                this.highcharts32()
                //散点图及气泡图
                this.highcharts33()
                //混合图
                this.highcharts35()
                this.highcharts36()
                this.highcharts37()
                this.highcharts38()
                //3D图
                this.highcharts39()
                this.highcharts40()
                this.highcharts41()
                this.highcharts42()



            },
            changeTheme(val){
                switch(val)
                {
                    case 'avocado':
                        Highcharts.setOptions(avocado);
                        break;
                    case 'darkblue':
                        Highcharts.setOptions(darkblue);
                        break;
                    case 'darkgreen':
                        Highcharts.setOptions(darkgreen);
                        break;
                    case 'darkunica':
                        Highcharts.setOptions(darkunica);
                        break;
                    case 'gray':
                        Highcharts.setOptions(gray);
                        break;
                    case 'grid':
                        Highcharts.setOptions(grid);
                        break;
                    case 'gridlight':
                        Highcharts.setOptions(gridlight);
                        break;
                    case 'sandsignika':
                        Highcharts.setOptions(sandsignika);
                        break;
                    case 'skies':
                        Highcharts.setOptions(skies);
                        break;
                    case 'sunset':
                        Highcharts.setOptions(sunset);
                        break;
                    default:
                        break;
                }
                this.initchart()
            },
            highcharts1(){
                var chart = Highcharts.chart('container1', {
                    chart: {
                    },
                    title: {
                        text: '基础折线图'
                    },
                    subtitle: {
                        text: '数据来源：thesolarfoundation.com'
                    },
                    yAxis: {
                        title: {
                            text: '就业人数'
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
                            pointStart: 2010
                        }
                    },
                    series: [{
                        name: '安装，实施人员',
                        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                    }, {
                        name: '工人',
                        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                    }, {
                        name: '销售',
                        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                    }, {
                        name: '项目开发',
                        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                    }, {
                        name: '其他',
                        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                    }],
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

            },
            highcharts2(){
                var chart = Highcharts.chart('container2', {
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: '显示点值的折线图'
                    },
                    subtitle: {
                        text: '数据来源: WorldClimate.com'
                    },
                    xAxis: {
                        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    },
                    yAxis: {
                        title: {
                            text: '气温 (°C)'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                // 开启数据标签
                                enabled: true
                            },
                            // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                            enableMouseTracking: false
                        }
                    },
                    series: [{
                        name: '东京',
                        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                    }, {
                        name: '伦敦',
                        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                    }]
                });

            },
            highcharts3(){
                var chart = Highcharts.chart('container3', {
                    chart: {
                        type: 'spline',
                        inverted: true
                    },
                    title: {
                        text: '坐标轴反转曲线图'
                    },
                    subtitle: {
                        text: '根据标准大气模型绘制'
                    },
                    xAxis: {
                        reversed: false,
                        title: {
                            enabled: true,
                            text: '海拔高度'
                        },
                        labels: {
                            formatter: function () {
                                return this.value + 'km';
                            }
                        },
                        maxPadding: 0.05,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: '温度'
                        },
                        labels: {
                            formatter: function () {
                                return this.value + '°';
                            }
                        },
                        lineWidth: 2
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br/>',
                        pointFormat: '{point.x} km: {point.y}°C'
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                enable: false
                            }
                        }
                    },
                    series: [{
                        name: '温度',
                        data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
                            [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
                    }]
                });
            },
            highcharts4(){
                var chart = Highcharts.chart('container4', {
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: '带有标识的曲线图'
                    },
                    subtitle: {
                        text: '数据来源: WorldClimate.com'
                    },
                    xAxis: {
                        categories: ['一月', '二月', '三月', '四月', '五月', '六月',
                            '七月', '八月', '九月', '十月', '十一月', '十二月']
                    },
                    yAxis: {
                        title: {
                            text: '温度'
                        },
                        labels: {
                            formatter: function () {
                                return this.value + '°';
                            }
                        }
                    },
                    tooltip: {
                        crosshairs: true,
                        shared: true
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                radius: 4,
                                lineColor: '#666666',
                                lineWidth: 1
                            }
                        }
                    },
                    series: [{
                        name: '东京',
                        marker: {
                            symbol: 'square'
                        },
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                            y: 26.5,
                            marker: {
                                symbol: 'url(https://www.highcharts.com/demo/gfx/sun.png)'
                            }
                        }, 23.3, 18.3, 13.9, 9.6]
                    }, {
                        name: '伦敦',
                        marker: {
                            symbol: 'diamond'
                        },
                        data: [{
                            y: 3.9,
                            marker: {
                                symbol: 'url(https://www.highcharts.com/demo/gfx/snow.png)'
                            }
                        }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                    }]
                });

            },
            highcharts5(){
                var chart = Highcharts.chart('container5', {
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: '带有标识区域的曲线图'
                    },
                    subtitle: {
                        text: '2009年10月6日和7日两地风速情况'
                    },
                    xAxis: {
                        type: 'datetime',
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    yAxis: {
                        title: {
                            text: '风 速 (m/s)'
                        },
                        min: 0,
                        minorGridLineWidth: 0,
                        gridLineWidth: 0,
                        alternateGridColor: null,
                        plotBands: [{ // Light air
                            from: 0.3,
                            to: 1.5,
                            color: 'rgba(68, 170, 213, 0.1)',
                            label: {
                                text: '轻空气',
                                style: {
                                    color: '#606060'
                                }
                            }
                        }, { // Light breeze
                            from: 1.5,
                            to: 3.3,
                            color: 'rgba(0, 0, 0, 0)',
                            label: {
                                text: '微风',
                                style: {
                                    color: '#606060'
                                }
                            }
                        }, { // Gentle breeze
                            from: 3.3,
                            to: 5.5,
                            color: 'rgba(68, 170, 213, 0.1)',
                            label: {
                                text: '柔和风',
                                style: {
                                    color: '#606060'
                                }
                            }
                        }, { // Moderate breeze
                            from: 5.5,
                            to: 8,
                            color: 'rgba(0, 0, 0, 0)',
                            label: {
                                text: '温和风',
                                style: {
                                    color: '#606060'
                                }
                            }
                        }, { // Fresh breeze
                            from: 8,
                            to: 11,
                            color: 'rgba(68, 170, 213, 0.1)',
                            label: {
                                text: '清新风',
                                style: {
                                    color: '#606060'
                                }
                            }
                        }, { // Strong breeze
                            from: 11,
                            to: 14,
                            color: 'rgba(0, 0, 0, 0)',
                            label: {
                                text: '强风',
                                style: {
                                    color: '#606060'
                                }
                            }
                        }, { // High wind
                            from: 14,
                            to: 15,
                            color: 'rgba(68, 170, 213, 0.1)',
                            label: {
                                text: '狂风',
                                style: {
                                    color: '#606060'
                                }
                            }
                        }]
                    },
                    tooltip: {
                        valueSuffix: ' m/s'
                    },
                    plotOptions: {
                        spline: {
                            lineWidth: 4,
                            states: {
                                hover: {
                                    lineWidth: 5
                                }
                            },
                            marker: {
                                enabled: false
                            },
                            pointInterval: 3600000, // one hour
                            pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
                        }
                    },
                    series: [{
                        name: 'Hestavollane',
                        data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
                            7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4,
                            8.2, 8.5, 9.4, 8.1, 10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.5,
                            7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
                            3.0, 3.0]
                    }, {
                        name: 'Voll',
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.3, 0.0,
                            0.0, 0.4, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.6, 1.2, 1.7, 0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3,
                            3.0, 3.3, 4.8, 5.0, 4.8, 5.0, 3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4]
                    }],
                    navigation: {
                        menuItemStyle: {
                            fontSize: '10px'
                        }
                    }
                });

            },
            highcharts6(){
                var chart = Highcharts.chart('container6', {
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: '时间不连续的曲线图'
                    },
                    subtitle: {
                        text: '非规律性时间内的变化'
                    },
                    xAxis: {
                        type: 'datetime',
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        title: {
                            text: '积雪 厚度 (m)'
                        },
                        min: 0
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                enabled: true
                            }
                        }
                    },
                    series: [{
                        name: '2007-2008 冬',
                        // Define the data points. All series have a dummy year
                        // of 1970/71 in order to be compared on the same x axis. Note
                        // that in JavaScript, months start at 0 for January, 1 for February etc.
                        data: [
                            [Date.UTC(1970,  9, 27), 0   ],
                            [Date.UTC(1970, 10, 10), 0.6 ],
                            [Date.UTC(1970, 10, 18), 0.7 ],
                            [Date.UTC(1970, 11,  2), 0.8 ],
                            [Date.UTC(1970, 11,  9), 0.6 ],
                            [Date.UTC(1970, 11, 16), 0.6 ],
                            [Date.UTC(1970, 11, 28), 0.67],
                            [Date.UTC(1971,  0,  1), 0.81],
                            [Date.UTC(1971,  0,  8), 0.78],
                            [Date.UTC(1971,  0, 12), 0.98],
                            [Date.UTC(1971,  0, 27), 1.84],
                            [Date.UTC(1971,  1, 10), 1.80],
                            [Date.UTC(1971,  1, 18), 1.80],
                            [Date.UTC(1971,  1, 24), 1.92],
                            [Date.UTC(1971,  2,  4), 2.49],
                            [Date.UTC(1971,  2, 11), 2.79],
                            [Date.UTC(1971,  2, 15), 2.73],
                            [Date.UTC(1971,  2, 25), 2.61],
                            [Date.UTC(1971,  3,  2), 2.76],
                            [Date.UTC(1971,  3,  6), 2.82],
                            [Date.UTC(1971,  3, 13), 2.8 ],
                            [Date.UTC(1971,  4,  3), 2.1 ],
                            [Date.UTC(1971,  4, 26), 1.1 ],
                            [Date.UTC(1971,  5,  9), 0.25],
                            [Date.UTC(1971,  5, 12), 0   ]
                        ]
                    }, {
                        name: '2008-2009 冬',
                        data: [
                            [Date.UTC(1970,  9, 18), 0   ],
                            [Date.UTC(1970,  9, 26), 0.2 ],
                            [Date.UTC(1970, 11,  1), 0.47],
                            [Date.UTC(1970, 11, 11), 0.55],
                            [Date.UTC(1970, 11, 25), 1.38],
                            [Date.UTC(1971,  0,  8), 1.38],
                            [Date.UTC(1971,  0, 15), 1.38],
                            [Date.UTC(1971,  1,  1), 1.38],
                            [Date.UTC(1971,  1,  8), 1.48],
                            [Date.UTC(1971,  1, 21), 1.5 ],
                            [Date.UTC(1971,  2, 12), 1.89],
                            [Date.UTC(1971,  2, 25), 2.0 ],
                            [Date.UTC(1971,  3,  4), 1.94],
                            [Date.UTC(1971,  3,  9), 1.91],
                            [Date.UTC(1971,  3, 13), 1.75],
                            [Date.UTC(1971,  3, 19), 1.6 ],
                            [Date.UTC(1971,  4, 25), 0.6 ],
                            [Date.UTC(1971,  4, 31), 0.35],
                            [Date.UTC(1971,  5,  7), 0   ]
                        ]
                    }, {
                        name: '2009-2010 冬',
                        data: [
                            [Date.UTC(1970,  9,  9), 0   ],
                            [Date.UTC(1970,  9, 14), 0.15],
                            [Date.UTC(1970, 10, 28), 0.35],
                            [Date.UTC(1970, 11, 12), 0.46],
                            [Date.UTC(1971,  0,  1), 0.59],
                            [Date.UTC(1971,  0, 24), 0.58],
                            [Date.UTC(1971,  1,  1), 0.62],
                            [Date.UTC(1971,  1,  7), 0.65],
                            [Date.UTC(1971,  1, 23), 0.77],
                            [Date.UTC(1971,  2,  8), 0.77],
                            [Date.UTC(1971,  2, 14), 0.79],
                            [Date.UTC(1971,  2, 24), 0.86],
                            [Date.UTC(1971,  3,  4), 0.8 ],
                            [Date.UTC(1971,  3, 18), 0.94],
                            [Date.UTC(1971,  3, 24), 0.9 ],
                            [Date.UTC(1971,  4, 16), 0.39],
                            [Date.UTC(1971,  4, 21), 0   ]
                        ]
                    }]
                });

            },
            highcharts7(){
                var chart = Highcharts.chart('container7',{
                    title: {
                        text: '对数折线图'
                    },
                    xAxis: {
                        tickInterval: 1
                    },
                    yAxis: {
                        type: 'logarithmic',
                        minorTickInterval: 0.1
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br />',
                        pointFormat: 'x = {point.x}, y = {point.y}'
                    },
                    series: [{
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
                        pointStart: 1
                    }]
                });
            },
            highcharts9(){
                var chart = Highcharts.chart('container9',{
                    chart: {
                        type: 'area'
                    },
                    title: {
                        text: '基础面积图'
                    },
                    subtitle: {
                        text: '数据来源: <a href="https://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                                'thebulletin.metapress.com</a>'
                    },
                    xAxis: {
                        allowDecimals: false
                    },
                    yAxis: {
                        title: {
                            text: '核武库国家'
                        },
                        labels: {
                            formatter: function () {
                                return this.value / 1000 + 'k';
                            }
                        }
                    },
                    tooltip: {
                        pointFormat: '{series.name} 制造 <b>{point.y:,.0f}</b>枚弹头'
                    },
                    plotOptions: {
                        area: {
                            pointStart: 1940,
                            marker: {
                                enabled: false,
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        name: '美国',
                        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
                    }, {
                        name: '苏联/俄罗斯',
                        data: [null, null, null, null, null, null, null, null, null, null,
                            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                            4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                            15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                            33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                            35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                            21000, 20000, 19000, 18000, 18000, 17000, 16000]
                    }]
                });
            },
            highcharts10(){
                var chart = Highcharts.chart('container10', {
                    chart: {
                        type: 'area'
                    },
                    title: {
                        text: '包含负值的面积图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: '小彭',
                        data: [2, -2, -3, 2, 1]
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, -2, 5]
                    }]
                });
            },
            highcharts11(){
                var chart = Highcharts.chart('container11', {
                    chart: {
                        type: 'area'
                    },
                    title: {
                        text: '堆叠面积图'
                    },
                    subtitle: {
                        text: '数据来源: Wikipedia.org'
                    },
                    xAxis: {
                        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                        tickmarkPlacement: 'on',
                        title: {
                            enabled: false
                        }
                    },
                    yAxis: {
                        title: {
                            text: '十亿'
                        },
                        labels: {
                            formatter: function () {
                                return this.value / 1000;
                            }
                        }
                    },
                    tooltip: {
                        split: true,
                        valueSuffix: ' 百万'
                    },
                    plotOptions: {
                        area: {
                            stacking: 'normal',
                            lineColor: '#666666',
                            lineWidth: 1,
                            marker: {
                                lineWidth: 1,
                                lineColor: '#666666'
                            }
                        }
                    },
                    series: [{
                        name: '亚洲',
                        data: [502, 635, 809, 947, 1402, 3634, 5268]
                    }, {
                        name: '非洲',
                        data: [106, 107, 111, 133, 221, 767, 1766]
                    }, {
                        name: '欧洲',
                        data: [163, 203, 276, 408, 547, 729, 628]
                    }, {
                        name: '美洲',
                        data: [18, 31, 54, 156, 339, 818, 1201]
                    }, {
                        name: '大洋洲',
                        data: [2, 2, 2, 6, 13, 30, 46]
                    }]
                });
            },
            highcharts12(){
                var chart = Highcharts.chart('container12', {
                    chart: {
                        type: 'area'
                    },
                    title: {
                        text: '百分百堆叠面积图'
                    },
                    subtitle: {
                        text: '数据来源: Wikipedia.org'
                    },
                    xAxis: {
                        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                        tickmarkPlacement: 'on',
                        title: {
                            enabled: false
                        }
                    },
                    yAxis: {
                        title: {
                            text: '百分比'
                        }
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} 百万)<br/>',
                        shared: true
                    },
                    plotOptions: {
                        area: {
                            stacking: 'percent',
                            lineColor: '#ffffff',
                            lineWidth: 1,
                            marker: {
                                lineWidth: 1,
                                lineColor: '#ffffff'
                            }
                        }
                    },
                    series: [{
                        name: '亚洲',
                        data: [502, 635, 809, 947, 1402, 3634, 5268]
                    }, {
                        name: '非洲',
                        data: [106, 107, 111, 133, 221, 767, 1766]
                    }, {
                        name: '欧洲',
                        data: [163, 203, 276, 408, 547, 729, 628]
                    }, {
                        name: '美洲',
                        data: [18, 31, 54, 156, 339, 818, 1201]
                    }, {
                        name: '大洋洲',
                        data: [2, 2, 2, 6, 13, 30, 46]
                    }]
                });
            },
            highcharts13(){
                var chart = Highcharts.chart('container13', {
                    chart: {
                        type: 'area',
                        spacingBottom: 30
                    },
                    title: {
                        text: '断裂的面积图'
                    },
                    subtitle: {
                        text: '* 小潘家的香蕉消费未知',
                        floating: true,
                        align: 'right',
                        verticalAlign: 'bottom',
                        y: 15
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 150,
                        y: 100,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                    },
                    xAxis: {
                        categories: ['苹果', '梨', '橘子', '香蕉', '葡萄', '李子', '草莓', '树莓']
                    },
                    yAxis: {
                        title: {
                            text: 'Y-Axis'
                        },
                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + '</b><br/>' +
                                    this.x + ': ' + this.y;
                        }
                    },
                    plotOptions: {
                        area: {
                            fillOpacity: 0.5
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: '小张',
                        data: [0, 1, 4, 4, 5, 2, 3, 7]
                    }, {
                        name: '小潘',
                        data: [1, 0, 3, null, 3, 1, 2, 1]
                    }]
                });
            },
            highcharts14(){
                var chart = Highcharts.chart('container14',{
                    chart: {
                        type: 'area',
                        inverted: true // x y轴对调
                    },
                    title: {
                        text: '坐标轴反转的面积图'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -150,
                        y: 100,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                    },
                    xAxis: {
                        categories: [
                            '周一','周二','周三','周四','周五','周六','周日'
                        ]
                    },
                    yAxis: {
                        title: {
                            text: '单位数量'
                        },
                        min: 0
                    },
                    plotOptions: {
                        area: {
                            fillOpacity: 0.5
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [3, 4, 3, 5, 4, 10, 12]
                    }, {
                        name: '小潘',
                        data: [1, 3, 4, 3, 3, 5, 4]
                    }]
                });
            },
            highcharts15(){
                var chart = Highcharts.chart('container15', {
                    chart: {
                        type: 'areaspline'
                    },
                    title: {
                        text: '曲线面积图'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 150,
                        y: 100,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                    },
                    xAxis: {
                        categories: [
                            '周一','周二','周三','周四','周五','周六','周日'
                        ],
                        plotBands: [{ // 标识出周末
                            from: 4.5,
                            to: 6.5,
                            color: 'rgba(68, 170, 213, .2)'
                        }]
                    },
                    yAxis: {
                        title: {
                            text: '水果 单位'
                        }
                    },
                    tooltip: {
                        shared: true,
                        valueSuffix: ' 单位'
                    },
                    plotOptions: {
                        areaspline: {
                            fillOpacity: 0.5
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [3, 4, 3, 5, 4, 10, 12]
                    }, {
                        name: '小潘',
                        data: [1, 3, 4, 3, 3, 5, 4]
                    }]
                });
            },
            highcharts17(){
                var chart = Highcharts.chart('container17', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: '基础条形图'
                    },
                    subtitle: {
                        text: '数据来源: Wikipedia.org'
                    },
                    xAxis: {
                        categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '人口总量 (百万)',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        valueSuffix: ' 百万'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true,
                                allowOverlap: true // 允许数据标签重叠
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 100,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        shadow: true
                    },
                    series: [{
                        name: '1800 年',
                        data: [107, 31, 635, 203, 2]
                    }, {
                        name: '1900 年',
                        data: [133, 156, 947, 408, 6]
                    }, {
                        name: '2008 年',
                        data: [973, 914, 4054, 732, 34]
                    }]
                });
            },
            highcharts18(){
                var chart = Highcharts.chart('container18', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: '堆叠条形图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '水果消费总量'
                        }
                    },
                    legend: {
                        /* 图例显示顺序反转
                         * 这是因为堆叠的顺序默认是反转的，可以设置
                         * yAxis.reversedStacks = false 来达到类似的效果
                         */
                        reversed: true
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: '小彭',
                        data: [2, 2, 3, 2, 1]
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, 2, 5]
                    }]
                });
            },
            highcharts19(){
                var categories = ['0-4', '5-9', '10-14', '15-19',
                    '20-24', '25-29', '30-34', '35-39', '40-44',
                    '45-49', '50-54', '55-59', '60-64', '65-69',
                    '70-74', '75-79', '80-84', '85-89', '90-94',
                    '95-99', '100 + '];
                var chart = Highcharts.chart('container19', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: '金字塔图'
                    },
                    subtitle: {
                        useHTML: true,
                        text: '数据来源: <a href="http://populationpyramid.net/germany/2015/">1950 ~ 2100 年世界人口金字塔</a>'
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
                        labels: {
                            step: 1
                        }
                    }, {
                        // 显示在右侧的镜像 xAxis （通过 linkedTo 与第一个 xAxis 关联）
                        opposite: true,
                        reversed: false,
                        categories: categories,
                        linkedTo: 0,
                        labels: {
                            step: 1
                        }
                    }],
                    yAxis: {
                        title: {
                            text: null
                        },
                        labels: {
                            formatter: function () {
                                return (Math.abs(this.value) / 1000000) + 'M';
                            }
                        },
                        min: -4000000,
                        max: 4000000
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                                    '人口: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                        }
                    },
                    series: [{
                        name: '男',
                        data: [-1746181, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
                            -2664537, -3556505, -3680231, -3143062, -2721122, -2229181, -2227768,
                            -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
                    }, {
                        name: '女',
                        data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
                            3360596, 3493473, 3050775, 2759560, 2304444, 2426504, 2568938, 1785638,
                            1447162, 1005011, 330870, 130632, 21208]
                    }]
                });
            },
            highcharts20(){
                var chart = Highcharts.chart('container20',{
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '基础柱状图'
                    },
                    subtitle: {
                        text: '数据来源: WorldClimate.com'
                    },
                    xAxis: {
                        categories: [
                            '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
                        ],
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '降雨量 (mm)'
                        }
                    },
                    tooltip: {
                        // head + 每个 point + footer 拼接成完整的 table
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: '东京',
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }, {
                        name: '纽约',
                        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                    }, {
                        name: '伦敦',
                        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                    }, {
                        name: '柏林',
                        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                    }]
                });
            },
            highcharts21(){
                var chart = Highcharts.chart('container21',{
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '包含负值的柱形图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: '小彭',
                        data: [2, -2, -3, 2, 1]
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, -2, 5]
                    }]
                });
            },
            highcharts22(){
                var chart = Highcharts.chart('container22', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '堆叠柱形图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '水果消费总量'
                        },
                        stackLabels: {  // 堆叠数据标签
                            enabled: true,
                            style: {
                                fontWeight: 'bold',
                                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                            }
                        }
                    },
                    legend: {
                        align: 'right',
                        x: -30,
                        verticalAlign: 'top',
                        y: 25,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                        borderColor: '#CCC',
                        borderWidth: 1,
                        shadow: false
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.x + '</b><br/>' +
                                    this.series.name + ': ' + this.y + '<br/>' +
                                    '总量: ' + this.point.stackTotal;
                        }
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: true,
                                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                                style: {
                                    // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
                                    textOutline: '1px 1px black'
                                }
                            }
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: '小彭',
                        data: [2, 2, 3, 2, 1]
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, 2, 5]
                    }]
                });
            },
            highcharts23(){
                var chart = Highcharts.chart('container23', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '分组堆叠柱状图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    yAxis: {
                        allowDecimals: false,
                        min: 0,
                        title: {
                            text: '水果数量'
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.x + '</b><br/>' +
                                    this.series.name + ': ' + this.y + '<br/>' +
                                    '总量: ' + this.point.stackTotal;
                        }
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal'
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2],
                        stack: 'male' // stack 值相同的为同一组
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, 2, 5],
                        stack: 'male'
                    }, {
                        name: '小彭',
                        data: [2, 5, 6, 2, 1],
                        stack: 'female'
                    }, {
                        name: '小王',
                        data: [3, 0, 4, 4, 3],
                        stack: 'female'
                    }]
                });
            },
            highcharts24(){
                var chart = Highcharts.chart('container24', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '百分比堆叠柱形图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '水果消费总量'
                        }
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>' +
                                '({point.percentage:.0f}%)<br/>',
                        //:.0f 表示保留 0 位小数，详见教程：https://www.hcharts.cn/docs/basic-labels-string-formatting
                        shared: true
                    },
                    plotOptions: {
                        column: {
                            stacking: 'percent'
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: '小彭',
                        data: [2, 2, 3, 2, 1]
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, 2, 5]
                    }]
                });
            },
            highcharts25(){
                var chart = Highcharts.chart('container25', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '坐标轴标签旋转的柱状图'
                    },
                    subtitle: {
                        text: '数据截止 2017-03，来源: <a href="https://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                    },
                    xAxis: {
                        type: 'category',
                        labels: {
                            rotation: -45  // 设置轴标签旋转角度
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '人口 (百万)'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: '人口总量: <b>{point.y:.1f} 百万</b>'
                    },
                    series: [{
                        name: '总人口',
                        data: [
                            ['上海', 24.25],
                            ['卡拉奇', 23.50],
                            ['北京', 21.51],
                            ['德里', 16.78],
                            ['拉各斯', 16.06],
                            ['天津', 15.20],
                            ['伊斯坦布尔', 14.16],
                            ['东京', 13.51],
                            ['广州', 13.08],
                            ['孟买', 12.44],
                            ['莫斯科', 12.19],
                            ['圣保罗', 12.03],
                            ['深圳', 10.46],
                            ['雅加达', 10.07],
                            ['拉合尔', 10.05],
                            ['首尔', 9.99],
                            ['武汉', 9.78],
                            ['金沙萨', 9.73],
                            ['开罗', 9.27],
                            ['墨西哥', 8.87]
                        ],
                        dataLabels: {
                            enabled: true,
                            rotation: -90,
                            color: '#FFFFFF',
                            align: 'right',
                            format: '{point.y:.1f}', // :.1f 为保留 1 位小数
                            y: 10
                        }
                    }]
                });
            },
            highcharts26(){
                var chart = Highcharts.chart('container26', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '嵌套的柱状图'
                    },
                    xAxis: {
                        categories: [
                            '杭州总部',
                            '上海分部',
                            '北京分部'
                        ]
                    },
                    yAxis: [{
                        min: 0,
                        title: {
                            text: '雇员'
                        }
                    }, {
                        title: {
                            text: '利润 (millions)'
                        },
                        opposite: true
                    }],
                    legend: {
                        shadow: false
                    },
                    tooltip: {
                        shared: true
                    },
                    plotOptions: {
                        column: {
                            grouping: false,
                            shadow: false,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: '雇员',
                        color: 'rgba(165,170,217,1)',
                        data: [150, 73, 20],
                        pointPadding: 0.3, // 通过 pointPadding 和 pointPlacement 控制柱子位置
                        pointPlacement: -0.2
                    }, {
                        name: '优化的员工',
                        color: 'rgba(126,86,134,.9)',
                        data: [140, 90, 40],
                        pointPadding: 0.4,
                        pointPlacement: -0.2
                    }, {
                        name: '利润',
                        color: 'rgba(248,161,63,1)',
                        data: [183.6, 178.8, 198.5],
                        tooltip: {  // 为当前数据列指定特定的 tooltip 选项
                            valuePrefix: '$',
                            valueSuffix: ' M'
                        },
                        pointPadding: 0.3,
                        pointPlacement: 0.2,
                        yAxis: 1  // 指定数据列所在的 yAxis
                    }, {
                        name: '优化的利润',
                        color: 'rgba(186,60,61,.9)',
                        data: [203.6, 198.8, 208.5],
                        tooltip: {
                            valuePrefix: '$',
                            valueSuffix: ' M'
                        },
                        pointPadding: 0.4,
                        pointPlacement: 0.2,
                        yAxis: 1
                    }]
                });
            },
            highcharts27(){
                var chart = Highcharts.chart('container27', {
                    title: {
                        text: '基础饼图'
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
            highcharts28(){
                var chart = Highcharts.chart('container28', {
                    title: {
                        text: '包含图例的饼图'
                    },
                    tooltip: {
                        headerFormat: '{series.name}<br>',
                        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true // 设置饼图是否在图例中显示
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
                                sliced: true,
                                selected: true
                            },
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            ['其他',   0.7]
                        ]
                    }]
                });
            },
            highcharts29(){
                var chart = Highcharts.chart('container29', {
                    title: {
                        text: '扇形图',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 50
                    },
                    tooltip: {
                        headerFormat: '{series.name}<br>',
                        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                distance: -50,
                                style: {
                                    fontWeight: 'bold',
                                    color: 'white',
                                    textShadow: '0px 1px 2px black'
                                }
                            },
                            startAngle: -90, // 圆环的开始角度
                            endAngle: 90,    // 圆环的结束角度
                            center: ['50%', '75%']
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '浏览器占比',
                        innerSize: '50%',
                        data: [
                            ['Firefox',   45.0],
                            ['IE',       26.8],
                            ['Chrome', 12.8],
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            {
                                name: '其他',
                                y: 0.7,
                                dataLabels: {
                                    // 数据比较少，没有空间显示数据标签，所以将其关闭
                                    enabled: false
                                }
                            }
                        ]
                    }]
                });

            },
            highcharts30(){
                // 创建渐变色
                Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
                    return {
                        radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
                        stops: [
                            [0, color],
                            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                        ]
                    };
                });
// 构建图表
                var chart = Highcharts.chart('container30',{
                    title: {
                        text: '颜色渐变的饼图'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                },
                                connectorColor: 'silver'
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '浏览器占比',
                        data: [
                            ['Firefox',   45.0],
                            ['IE',       26.8],
                            {
                                name: 'Chrome',
                                y: 12.8,
                                sliced: true,
                                selected: true
                            },
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            ['其他',   0.7]
                        ]
                    }]
                });
            },
            highcharts31(){
                // Make monochrome colors and set them as default for all pies
                Highcharts.getOptions().plotOptions.pie.colors = (function () {
                    var colors = [],
                            base = Highcharts.getOptions().colors[0],
                            i;
                    for (i = 0; i < 10; i += 1) {
                        // Start out with a darkened base color (negative brighten), and end
                        // up with a much brighter color
                        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
                    }
                    return colors;
                }());
// 初始化图表
                var chart = Highcharts.chart('container31', {
                    title: {
                        text: '单色调饼图'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
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
                        name: '浏览器占比',
                        data: [
                            ['Firefox',   45.0],
                            ['IE',       26.8],
                            {
                                name: 'Chrome',
                                y: 12.8,
                                sliced: true,
                                selected: true
                            },
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            ['其他',   0.7]
                        ]
                    }]
                });
            },
            highcharts32(){
                var chart = Highcharts.chart('container32', {
                    chart: {
                        spacing : [40, 0 , 40, 0]
                    },
                    title: {
                        floating:true,
                        text: '标题居中的环形图'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                            },
                            point: {
                                events: {
                                    mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                                        // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                                        chart.setTitle({
                                            text: e.target.name+ '\t'+ e.target.y + ' %'
                                        });
                                    }
                                    //,
                                    // click: function(e) { // 同样的可以在点击事件里处理
                                    //     chart.setTitle({
                                    //         text: e.point.name+ '\t'+ e.point.y + ' %'
                                    //     });
                                    // }
                                }
                            },
                        }
                    },
                    series: [{
                        type: 'pie',
                        innerSize: '80%',
                        name: '市场份额',
                        data: [
                            {name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
                            ['IE',       26.8],
                            {
                                name: 'Chrome',
                                y: 12.8,
                                sliced: true,
                                selected: true,
                                url: 'http://www.hcharts.cn'
                            },
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            ['其他',   0.7]
                        ]
                    }]
                }, function(c) { // 图表初始化完毕后的会掉函数
                    // 环形图圆心
                    var centerY = c.series[0].center[1],
                            titleHeight = parseInt(c.title.styles.fontSize);
                    // 动态设置标题位置
                    c.setTitle({
                        y:centerY + titleHeight/2
                    });
                });
            },
            highcharts33(){
                var chart = Highcharts.chart('container33', {
                    chart: {
                        type: 'scatter',
                        zoomType: 'xy'
                    },
                    title: {
                        text: '散点图'
                    },
                    subtitle: {
                        text: '数据来源: Heinz  2003'
                    },
                    xAxis: {
                        title: {
                            enabled: true,
                            text: '身高 (cm)'
                        },
                        startOnTick: true,
                        endOnTick: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: '体重 (kg)'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 100,
                        y: 70,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                        borderWidth: 1
                    },
                    plotOptions: {
                        scatter: {
                            marker: {
                                radius: 5,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineColor: 'rgb(100,100,100)'
                                    }
                                }
                            },
                            states: {
                                hover: {
                                    marker: {
                                        enabled: false
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<b>{series.name}</b><br>',
                                pointFormat: '{point.x} cm, {point.y} kg'
                            }
                        }
                    },
                    series: [{
                        name: '女',
                        color: 'rgba(223, 83, 83, .5)',
                        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                            [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                            [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                            [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                            [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                            [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                            [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                            [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                            [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                            [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                            [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                            [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                            [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                            [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                            [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                            [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                            [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                            [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                            [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                            [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                            [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                            [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                            [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                            [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                            [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                            [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                            [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                            [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                            [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                            [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                            [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                            [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                            [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                            [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                            [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                            [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                            [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                            [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                            [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                            [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                            [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                            [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                            [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                            [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                            [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                            [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                            [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                            [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                            [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                            [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                            [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                            [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]
                    }, {
                        name: '男',
                        color: 'rgba(119, 152, 191, .5)',
                        data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                            [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                            [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                            [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                            [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
                            [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                            [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                            [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                            [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                            [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                            [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                            [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                            [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
                            [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
                            [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
                            [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
                            [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
                            [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                            [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                            [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                            [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
                            [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
                            [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
                            [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
                            [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                            [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                            [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                            [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                            [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                            [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                            [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                            [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                            [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                            [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                            [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                            [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                            [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
                            [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
                            [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                            [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
                            [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
                            [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
                            [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
                            [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
                            [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
                            [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
                            [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                            [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                            [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                            [180.3, 83.2], [180.3, 83.2]]
                    }]
                });
            },
            highcharts35(){
                var chart = Highcharts.chart('container35', {
                    title: {
                        text: '柱形图、饼图、折线图混合'
                    },
                    xAxis: {
                        categories: ['苹果', ' 橙', '梨', '香蕉', '李子']
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    labels: {
                        items: [{
                            html: '水果消耗',
                            style: {
                                left: '100px',
                                top: '18px',
                                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                            }
                        }]
                    },
                    series: [{
                        type: 'column',
                        name: '小张',
                        data: [3, 2, 1, 3, 4]
                    }, {
                        type: 'column',
                        name: '小潘',
                        data: [2, 3, 5, 7, 6]
                    }, {
                        type: 'column',
                        name: '小王',
                        data: [4, 3, 3, 9, 0]
                    }, {
                        type: 'spline',
                        name: '平均值',
                        data: [3, 2.67, 3, 6.33, 3.33],
                        marker: {
                            lineWidth: 2,
                            lineColor: Highcharts.getOptions().colors[3],
                            fillColor: 'white'
                        }
                    }, {
                        type: 'pie',
                        name: '总的消耗',
                        data: [{
                            name: '小张',
                            y: 13,
                            color: Highcharts.getOptions().colors[0] // Jane's color
                        }, {
                            name: '小潘',
                            y: 23,
                            color: Highcharts.getOptions().colors[1] // John's color
                        }, {
                            name: '小王',
                            y: 19,
                            color: Highcharts.getOptions().colors[2] // Joe's color
                        }],
                        center: [100, 80],
                        size: 100,
                        showInLegend: false,
                        dataLabels: {
                            enabled: false
                        }
                    }]
                });
            },
            highcharts36(){
                var chart = Highcharts.chart('container36', {
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: '双坐标的折线图、柱状图混合'
                    },
                    subtitle: {
                        text: '数据来源: WorldClimate.com'
                    },
                    xAxis: [{
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        crosshair: true
                    }],
                    yAxis: [{ // Primary yAxis
                        labels: {
                            format: '{value}°C',
                            style: {
                                color: Highcharts.getOptions().colors[1]
                            }
                        },
                        title: {
                            text: '温度',
                            style: {
                                color: Highcharts.getOptions().colors[1]
                            }
                        }
                    }, { // Secondary yAxis
                        title: {
                            text: '降雨量',
                            style: {
                                color: Highcharts.getOptions().colors[0]
                            }
                        },
                        labels: {
                            format: '{value} mm',
                            style: {
                                color: Highcharts.getOptions().colors[0]
                            }
                        },
                        opposite: true
                    }],
                    tooltip: {
                        shared: true
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        x: 120,
                        verticalAlign: 'top',
                        y: 100,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                    },
                    series: [{
                        name: '降雨量',
                        type: 'column',
                        yAxis: 1,
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                        tooltip: {
                            valueSuffix: ' mm'
                        }
                    }, {
                        name: '温度',
                        type: 'spline',
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                        tooltip: {
                            valueSuffix: '°C'
                        }
                    }]
                });
            },
            highcharts37(){
                var chart = Highcharts.chart('container37', {
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: '多坐标轴混合图'
                    },
                    subtitle: {
                        text: '数据来源: WorldClimate.com'
                    },
                    xAxis: [{
                        categories: [
                            '一月', '二月', '三月', '四月', '五月', '六月','七月', '八月', '九月', '十月', '十一月', '十二月'
                        ],
                        crosshair: true
                    }],
                    yAxis: [{ // Primary yAxis
                        labels: {
                            format: '{value}°C',
                            style: {
                                color: Highcharts.getOptions().colors[2]
                            }
                        },
                        title: {
                            text: '温度',
                            style: {
                                color: Highcharts.getOptions().colors[2]
                            }
                        },
                        opposite: true
                    }, { // Secondary yAxis
                        gridLineWidth: 0,
                        title: {
                            text: '降雨量',
                            style: {
                                color: Highcharts.getOptions().colors[0]
                            }
                        },
                        labels: {
                            format: '{value} mm',
                            style: {
                                color: Highcharts.getOptions().colors[0]
                            }
                        }
                    }, { // Tertiary yAxis
                        gridLineWidth: 0,
                        title: {
                            text: '海平面气压',
                            style: {
                                color: Highcharts.getOptions().colors[1]
                            }
                        },
                        labels: {
                            format: '{value} mb',
                            style: {
                                color: Highcharts.getOptions().colors[1]
                            }
                        },
                        opposite: true
                    }],
                    tooltip: {
                        shared: true
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        x: 80,
                        verticalAlign: 'top',
                        y: 55,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                    },
                    series: [{
                        name: '降雨量',
                        type: 'column',
                        yAxis: 1,
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                        tooltip: {
                            valueSuffix: ' mm'
                        }
                    }, {
                        name: '海平面气压',
                        type: 'spline',
                        yAxis: 2,
                        data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                        marker: {
                            enabled: false
                        },
                        dashStyle: 'shortdot',
                        tooltip: {
                            valueSuffix: ' mb'
                        }
                    }, {
                        name: '温度',
                        type: 'spline',
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                        tooltip: {
                            valueSuffix: ' °C'
                        }
                    }]
                });
            },
            highcharts38(){
                Highcharts.chart('container38', {
                    xAxis: {
                        min: -0.5,
                        max: 5.5
                    },
                    yAxis: {
                        min: 0
                    },
                    title: {
                        text: '包含趋势线的散点图'
                    },
                    series: [{
                        type: 'line',
                        name: '回归线',
                        data: [[0, 1.11], [5, 4.51]],
                        marker: {
                            enabled: false
                        },
                        states: {
                            hover: {
                                lineWidth: 0
                            }
                        },
                        enableMouseTracking: false
                    }, {
                        type: 'scatter',
                        name: '观测值',
                        data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
                        marker: {
                            radius: 4
                        }
                    }]
                });
            },
            highcharts39(){
                var chart = Highcharts.chart('container39', {
                        chart: {
                            type: 'column',
                            margin: 75,
                            options3d: {
                                enabled: true,
                                alpha: 10,
                                beta: 25,
                                depth: 70,
                                viewDistance: 100,      // 视图距离，它对于计算角度影响在柱图和散列图非常重要。此值不能用于3D的饼图
                                frame: {                // Frame框架，3D图包含柱的面板，我们以X ,Y，Z的坐标系来理解，X轴与 Z轴所形成
                                    // 的面为bottom，Y轴与Z轴所形成的面为side，X轴与Y轴所形成的面为back，bottom、
                                    // side、back的属性一样，其中size为感官理解的厚度，color为面板颜色
                                    bottom: {
                                        size: 10,
                                        color: 'red'
                                    },
                                    side: {
                                        size: 1,
                                        color: 'transparent'
                                    },
                                    back: {
                                        size: 1,
                                        color: 'transparent'
                                    }
                                }
                            },
                        },
                        title: {
                            text: '包含空值的3D柱状图'
                        },
                        subtitle: {
                            text: '请注意值为 0 和 null 的区别'
                        },
                        plotOptions: {
                            column: {
                                depth: 25
                            }
                        },
                        xAxis: {
                            categories: Highcharts.getOptions().lang.shortMonths
                        },
                        yAxis: {
                            title: {
                                text: null
                            }
                        },
                        series: [{
                            name: '销售',
                            data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3]
                        }]
                    });

            },
            highcharts40(){
                var chart = Highcharts.chart('container40', {
                        chart: {
                            type: 'column',
                            options3d: {
                                enabled: true,
                                alpha: 15,
                                beta: 15,
                                viewDistance: 25,
                                depth: 40
                            },
                            marginTop: 80,
                            marginRight: 40
                        },
                        title: {
                            text: '堆叠3D柱状图'
                        },
                        xAxis: {
                            categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                        },
                        yAxis: {
                            allowDecimals: false,
                            min: 0,
                            title: {
                                text: '水果数量'
                            }
                        },
                        tooltip: {
                            headerFormat: '<b>{point.key}</b><br>',
                            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                depth: 40
                            }
                        },
                        series: [{
                            name: '小张',
                            data: [5, 3, 4, 7, 2],
                            stack: 'male'
                        }, {
                            name: '小王',
                            data: [3, 4, 4, 2, 5],
                            stack: 'male'
                        }, {
                            name: '小彭',
                            data: [2, 5, 6, 2, 1],
                            stack: 'female'
                        }, {
                            name: '小潘',
                            data: [3, 0, 4, 4, 3],
                            stack: 'female'
                        }]
                    });

            },
            highcharts41(){
                var chart = Highcharts.chart('container41', {
                        chart: {
                            type: 'pie',
                            options3d: {
                                enabled: true,
                                alpha: 45,
                                beta: 0
                            }
                        },
                        title: {
                            text: '3D饼图'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                depth: 35,
                                dataLabels: {
                                    enabled: true,
                                    format: '{point.name}'
                                }
                            }
                        },
                        series: [{
                            type: 'pie',
                            name: '浏览器占比',
                            data: [
                                ['Firefox',   45.0],
                                ['IE',       26.8],
                                {
                                    name: 'Chrome',
                                    y: 12.8,
                                    sliced: true,
                                    selected: true
                                },
                                ['Safari',    8.5],
                                ['Opera',     6.2],
                                ['Others',   0.7]
                            ]
                        }]
                    });

            },
            highcharts42(){
                var chart = Highcharts.chart('container42', {
                        chart: {
                            type: 'pie',
                            options3d: {
                                enabled: true,
                                alpha: 45
                            }
                        },
                        title: {
                            text: '3D环形图'
                        },
                        subtitle: {
                            text: 'Highcharts 中的3D环形图'
                        },
                        plotOptions: {
                            pie: {
                                innerSize: 100,
                                depth: 45
                            }
                        },
                        series: [{
                            name: '货物金额',
                            data: [
                                ['香蕉', 8],
                                ['猕猴桃', 3],
                                ['桃子', 1],
                                ['橘子', 6],
                                ['苹果', 8],
                                ['梨', 4],
                                ['柑橘', 4],
                                ['橙子', 1],
                                ['葡萄 (串)', 1]
                            ]
                        }]
                    });

            }



        }
    }
</script>

<style scoped="">

</style>
