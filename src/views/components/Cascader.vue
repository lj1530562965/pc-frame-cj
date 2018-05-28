<template>
  <div>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">基础用法</p>
              <Cascader :data="data" v-model="value1"></Cascader>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">指定 value 默认值，组件会在初始化时选定数据</p>
              <Cascader :data="data" v-model="value2"></Cascader>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">设置属性 trigger 为 hover，当鼠标悬停时就会展开子集</p>
              <Cascader :data="data" trigger="hover"></Cascader>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">通过设置 slot 可以自定义显示内容，不局限于输入框。</p>
              {{ text }}
              <Cascader :data="data" @on-change="handleChange">
              <a href="javascript:void(0)">选择</a>
              </Cascader>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">设置属性 disabled 可以禁用组件。给某项数据设置 disabled: true 可以禁用某一项。</p>
              <Cascader :data="data2" disabled></Cascader>
              <Cascader :data="data2"></Cascader>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">选择即改变(设置属性 change-on-select 点任何一级都可以选择)</p>
              <Cascader :data="data" change-on-select></Cascader>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">自定义已选项(对于显示的结果，可以通过 render-format 接收一个函数来自定义。其中第一个参数 labels 是当前选择的label的集合，第二个参数 selectedData 是当前选择的数据集合，可以利用它们组合出你想要显示的内容)</p>
              <Cascader :data="data3" :render-format="format"></Cascader>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">尺寸(通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。)</p>
              <Cascader :data="data" size="large"></Cascader>
              <br>
              <Cascader :data="data"></Cascader>
              <br>
              <Cascader :data="data" size="small"></Cascader>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">动态加载选项(使用 load-data 属性可以异步加载子选项，需要给数据增加 loading 来标识当前是否在加载中。load-data 的第二个参数为回调，如果执行，则会自动展开当前项的子列表。)</p>
              <Cascader :data="data4" :load-data="loadData"></Cascader>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">搜索(使用属性 filterable 可直接搜索选项并选择。暂不支持服务端搜索。)</p>
              <Cascader v-model="value3" :data="data" filterable></Cascader>
          </Card>
          </Col>
      </Row>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: [],
                text: '未选择',
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ]
                }],
                value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
                data2: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖'
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    disabled: true,
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门'
                        }]
                    }]
                }],
                data3: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖',
                            code: 310000
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门',
                            code: 210000
                        }]
                    }]
                }],
                data4: [
                    {
                        value: 'beijing',
                        label: '北京',
                        children: [],
                        loading: false
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州',
                        children: [],
                        loading:false
                    }
                ],
                value3: []
            }
        },
        methods: {
            handleChange (value, selectedData) {
                this.text = selectedData.map(o => o.label).join(', ');
            },
            format (labels, selectedData) {
                const index = labels.length - 1;
                const data = selectedData[index] || false;
                if (data && data.code) {
                    return labels[index] + ' - ' + data.code;
                }
                return labels[index];
            },
            loadData (item, callback) {
                item.loading = true;
                setTimeout(() => {
                    if (item.value === 'beijing') {
                    item.children = [
                        {
                            value: 'talkingdata',
                            label: 'TalkingData'
                        },
                        {
                            value: 'baidu',
                            label: '百度'
                        },
                        {
                            value: 'sina',
                            label: '新浪'
                        }
                    ];
                } else if (item.value === 'hangzhou') {
                    item.children = [
                        {
                            value: 'ali',
                            label: '阿里巴巴'
                        },
                        {
                            value: '163',
                            label: '网易'
                        }
                    ];
                }
                item.loading = false;
                callback();
            }, 1000);
        }
}
}
</script>
<style scoped>
.card{
    margin-bottom: 20px;
    height: 250px;
}
</style>
