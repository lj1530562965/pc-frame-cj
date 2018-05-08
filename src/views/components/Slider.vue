<template>
  <div>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">基础用法(滑块的基本用法，可以使用 v-model 双向绑定数据。

                  通过设置属性 range 开启双滑块，通过设置属性 disabled 禁用滑块。

                  注意，单滑块时，value 格式为数字，当开启双滑块时，value 为长度是2的数组，且每项为数字)</p>
              <Slider v-model="value1"></Slider>
              <Slider v-model="value2" range></Slider>
              <Slider v-model="value3" range disabled></Slider>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">离散值(通过设置属性 step 可以控制每次滑动的间隔。)</p>
              <Slider v-model="value4" :step="10"></Slider>
              <Slider v-model="value5" :step="10" range></Slider>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">显示间断点(通过设置属性 show-stops 可以显示间断点，建议在 step 间隔不密集时使用)</p>
              <Slider v-model="value6" :step="10" show-stops></Slider>
              <Slider v-model="value7" :step="10" show-stops range></Slider>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">带有输入框(通过设置属性 show-input 可以显示数字输入框，配合使用，仅在单滑块模式下有效。)</p>
              <Slider v-model="value8" show-input></Slider>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">自定义提示(Slider 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip)</p>
              <Slider v-model="value9" :tip-format="format"></Slider>
              <Slider v-model="value10" :tip-format="hideFormat"></Slider>
          </Card>
          </Col>
      </Row>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50],
                value4: 30,
                value5: [20, 50],
                value6: 30,
                value7: [20, 50],
                value8: 25,
                value9: 25,
                value10: 25
            }
        },
        methods: {
            format (val) {
                return 'Progress: ' + val + '%';
            },
            hideFormat () {
                return null;
            }
    }
    }
</script>
<style scoped>
.card{
    margin-bottom: 20px;
}
</style>
