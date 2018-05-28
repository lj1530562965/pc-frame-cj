<template>
  <div>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">基础用法(简单的展示，添加属性closable可以关闭标签。
                  点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑)</p>
              <Tag>标签一</Tag>
              <Tag>标签二</Tag>
              <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">通过设置 type 属性为 border 或 dot 来选择不同的样式类型。建议有关闭的某些场景下使用 border，图例的场景下使用 dot。</p>
              <Tag type="border">标签三</Tag>
              <Tag type="border" closable>标签四</Tag>
              <Tag type="dot">标签一</Tag>
              <Tag type="dot" closable>标签二</Tag>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">四种预设颜色，可自定义颜色</p>
              <Tag closable color="blue">标签一</Tag>
              <Tag closable color="green">标签二</Tag>
              <Tag closable color="red">标签三</Tag>
              <Tag closable color="yellow">标签四</Tag>
              <br><br>
              <Tag type="border" closable color="blue">标签一</Tag>
              <Tag type="border" closable color="green">标签二</Tag>
              <Tag type="border" closable color="red">标签三</Tag>
              <Tag type="border" closable color="yellow">标签四</Tag>
              <br><br>
              <Tag type="dot" closable color="blue">标签一</Tag>
              <Tag type="dot" closable color="green">标签二</Tag>
              <Tag type="dot" closable color="red">标签三</Tag>
              <Tag type="dot" closable color="yellow">标签四</Tag>
              <br><br>
              <Tag closable color="#EF6AFF" checkable>标签一</Tag>
              <Tag type="border" closable color="#EF6AFF" checkable>标签二</Tag>
              <Tag type="dot" closable color="#EF6AFF" checkable>标签三</Tag>
              <Tag closable color="default" checkable>标签四</Tag>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">设置属性 checkable，可以对标签进行选择，属性 checked 控制当前选择状态。</p>
              <Tag checkable color="blue">标签一</Tag>
              <Tag checkable color="green">标签二</Tag>
              <Tag checkable color="red">标签三</Tag>
              <Tag checkable color="yellow">标签四</Tag>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">用数组生成一组标签，可以动态添加和删除</p>
              <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
              <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
          </Card>
          </Col>
      </Row>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                show: true,
                count: [0, 1, 2]
            }
        },
        methods: {
            handleClose () {
                this.show = false;
            },
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            }
    }
    }
</script>
<style scoped>
.card{
    margin-bottom: 20px;
    height: 300px;
}
.time{
    font-size: 14px;
    font-weight: bold;
}
.content{
    padding-left: 5px;
}
</style>
