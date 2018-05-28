<template>
  <div>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">基础用法(value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。)</p>
              <Tabs value="name1">
                  <TabPane label="标签一" name="name1">标签一的内容</TabPane>
                  <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                  <TabPane label="标签三" name="name3">标签三的内容</TabPane>
              </Tabs>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">禁用某一项</p>
              <Tabs>
                  <TabPane label="标签一">标签一的内容</TabPane>
                  <TabPane label="标签二" disabled>标签二的内容</TabPane>
                  <TabPane label="标签三">标签三的内容</TabPane>
              </Tabs>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">通过设置属性 icon，可以显示一个图标</p>
              <Tabs>
                  <TabPane label="macOS" icon="social-apple">标签一的内容</TabPane>
                  <TabPane label="Windows" icon="social-windows">标签二的内容</TabPane>
                  <TabPane label="Linux" icon="social-tux">标签三的内容</TabPane>
              </Tabs>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">设置属性 size 为 small 可以显示为迷你型，只在 type 为 line 时有效。</p>
              <Tabs size="small">
                  <TabPane label="标签一">标签一的内容</TabPane>
                  <TabPane label="标签二">标签二的内容</TabPane>
                  <TabPane label="标签三">标签三的内容</TabPane>
              </Tabs>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">设置属性 type 为 card 可以显示卡片样式，常用于容器顶部</p>
              <Tabs type="card">
                  <TabPane label="标签一">标签一的内容</TabPane>
                  <TabPane label="标签二">标签二的内容</TabPane>
                  <TabPane label="标签三">标签三的内容</TabPane>
              </Tabs>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。
                  需结合 @on-tab-remove 事件手动关闭标签页。</p>
              <Tabs type="card" closable @on-tab-remove="handleTabRemove">
              <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
              <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
              <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
              </Tabs>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">设置 label 为 Render 函数后，可以自定义标签页的内容</p>
              <Tabs value="name1">
                  <TabPane :label="label" name="name1">标签一的内容</TabPane>
                  <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                  <TabPane label="标签三" name="name3">标签三的内容</TabPane>
              </Tabs>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">设置 slot extra 可以在页签右边添加附加操作</p>
              <Tabs type="card">
                  <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
                  <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra">增加</Button>
              </Tabs>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">通过设置属性 animated 为 false 可以禁用动画</p>
              <Tabs :animated="false">
                  <TabPane label="标签一">标签一的内容</TabPane>
                  <TabPane label="标签二">标签二的内容</TabPane>
                  <TabPane label="标签三">标签三的内容</TabPane>
              </Tabs>
          </Card>
          </Col>
      </Row>
      <Row :gutter="16">
              <Col span="12" class="demo-tabs-style1" style="background: #e3e8ee;padding:16px;">
              <Tabs type="card">
                  <TabPane label="标签一">标签一的内容</TabPane>
                  <TabPane label="标签二">标签二的内容</TabPane>
                  <TabPane label="标签三">标签三的内容</TabPane>
              </Tabs>
              </Col>
              <Col span="12" class="demo-tabs-style2">
              <Tabs type="card">
                  <TabPane label="标签一">标签一的内容</TabPane>
                  <TabPane label="标签二">标签二的内容</TabPane>
                  <TabPane label="标签三">标签三的内容</TabPane>
              </Tabs>
              </Col>
      </Row>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true,
                label: (h) => {
                return h('div', [
                    h('span', '标签一'),
                    h('Badge', {
                        props: {
                            count: 3
                        }
                    })
                ])
            },
                tabs: 2
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            },
            handleTabsAdd () {
                this.tabs ++;
            }
    }
    }
</script>
<style scoped>
.card{
    margin-bottom: 20px;
}
.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
    height: 120px;
    margin-top: -16px;
}

.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
    background: #fff;
    padding: 16px;
}

.demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: transparent;
}

.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    border-color: #fff;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
    border-radius: 0;
    background: #fff;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
    border-top: 1px solid #3399ff;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #3399ff;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
