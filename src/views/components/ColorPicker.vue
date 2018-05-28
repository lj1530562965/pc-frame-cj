<template>
  <div>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">可以使用 v-model 实现数据的双向绑定</p>
              有默认值
              <ColorPicker v-model="color1" />
              无默认值
              <ColorPicker v-model="color2" />
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">开启属性 alpha，可以选择带 Alpha 通道的颜色。</p>
              <ColorPicker v-model="color3" alpha />
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">设置属性 hue 为 false，可以禁用色彩选项。</p>
              <ColorPicker v-model="color7" :hue="false" />
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">开启属性 recommend 可以显示推荐的颜色预设，或设置属性 colors 来自定义预设颜色。</p>
              <ColorPicker v-model="color4" recommend />
              <ColorPicker v-model="color5" :colors="colors" />
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">选择器有三种尺寸：大、默认（中）、小</p>
              <ColorPicker v-model="color6" size="large" />
              <ColorPicker v-model="color6" />
              <ColorPicker v-model="color6" size="small" />
          </Card>
          </Col>
      </Row>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                color1: '#19be6b',
                color2: '',
                color3: 'rgba(25, 190,107, .5)',
                color7: '#19be6b',
                color4: '#19be6b',
                color5: '#19be6b',
                colors: ['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9'],
                color6: '#19be6b'
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
