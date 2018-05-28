<template>
  <div>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">基础用法</p>
              <Circle :percent="80">
                  <span class="demo-Circle-inner" style="font-size:24px">80%</span>
              </Circle>
              <Circle :percent="100" stroke-color="#5cb85c">
                  <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
              </Circle>
              <Circle :percent="35" stroke-color="#ff5500">
                <span class="demo-Circle-inner">
                    <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
                </span>
              </Circle>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">配合外部组件使用(通过数据的联动和逻辑控制，实现交互效果)</p>
              <Circle :percent="percent" :stroke-color="color">
                  <Icon v-if="percent == 100" type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
                  <span v-else style="font-size:24px">{{ percent }}%</span>
              </Circle>
              <ButtonGroup size="large">
                  <Button icon="ios-plus-empty" @click="add"></Button>
                  <Button icon="ios-minus-empty" @click="minus"></Button>
              </ButtonGroup>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">自定义更多样式(通过自定义slot和丰富的配置，可以组合出很多统计效果)</p>
              <Circle
                      :size="250"
                      :trail-width="4"
                      :stroke-width="5"
                      :percent="75"
                      stroke-linecap="square"
                      stroke-color="#43a3fb">
                  <div class="demo-Circle-custom">
                      <h1>42,001,776</h1>
                      <p>消费人群规模</p>
            <span>
                总占人数
                <i>75%</i>
            </span>
                  </div>
              </Circle>
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
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
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
.demo-Circle-custom h1{
      color: #3f414d;
      font-size: 28px;
      font-weight: normal;
  }
.demo-Circle-custom p{
      color: #657180;
      font-size: 14px;
      margin: 10px 0 15px;
  }
.demo-Circle-custom span{
      display: block;
      padding-top: 15px;
      color: #657180;
      font-size: 14px;
}
</style>
