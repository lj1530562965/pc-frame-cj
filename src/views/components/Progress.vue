<template>
  <div>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success</p>
              <Progress :percent="25"></Progress>
              <Progress :percent="45" status="active"></Progress>
              <Progress :percent="65" status="wrong"></Progress>
              <Progress :percent="100"></Progress>
              <Progress :percent="25" hide-info></Progress>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">设置属性 vertical 将以垂直方向显示</p>
              <Progress vertical :percent="25"></Progress>
              <Progress vertical :percent="45" status="active"></Progress>
              <Progress vertical :percent="65" status="wrong"></Progress>
              <Progress vertical :percent="100"></Progress>
              <Progress vertical :percent="25" hide-info></Progress>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">通过数据的联动和逻辑控制，实现动态效果</p>
              <Progress :percent="percent"></Progress>
              <ButtonGroup size="large">
                  <Button icon="ios-plus-empty" @click="add"></Button>
                  <Button icon="ios-minus-empty" @click="minus"></Button>
              </ButtonGroup>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">通过自定义slot和属性stroke-width改变进度条效果</p>
              <Progress :percent="25" :stroke-width="5"></Progress>
              <Progress :percent="100">
                  <Icon type="checkmark-circled"></Icon>
                  <span>成功</span>
              </Progress>
          </Card>
          </Col>
      </Row>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
    }
    }
</script>
<style scoped>
.card{
    margin-bottom: 20px;
}
</style>
