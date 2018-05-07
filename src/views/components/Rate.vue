<template>
  <div>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">基础用法</p>
              <Rate v-model="value"></Rate>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">设置属性 allow-half 可以选中半星。</p>
              <Rate allow-half v-model="valueHalf"></Rate>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">设置属性 show-text 可以显示提示文字。
                  提示内容也可以通过 slot 自定义。</p>
              <Rate show-text v-model="valueText"></Rate>
              <Rate show-text allow-half v-model="valueCustomText">
                  <span style="color: #f5a623">{{ valueCustomText }}</span>
              </Rate>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">设置属性 disabled 开启只读模式，无法交互。</p>
              <Rate disabled v-model="valueDisabled"></Rate>
          </Card>
          </Col>
      </Row>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                value: 0,
                valueHalf: 2.5,
                valueText: 3,
                valueCustomText: 3.8,
                valueDisabled: 2
            }
        },
        methods: {
            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list1[this.list1.length - 1];
                for (let i = 1; i < 11; i++) {
                    this.list1.push(last + i);
                }
                resolve();
            }, 2000);
        });
    },
    handleReachTop () {
        return new Promise(resolve => {
            setTimeout(() => {
                const first = this.list2[0];
        for (let i = 1; i < 11; i++) {
            this.list2.unshift(first - i);
        }
        resolve();
    }, 2000);
    });
    },
    handleReachEdge (dir) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (dir > 0) {
            const first = this.list3[0];
            for (let i = 1; i < 11; i++) {
                this.list3.unshift(first - i);
            }
        } else {
            const last = this.list3[this.list3.length - 1];
            for (let i = 1; i < 11; i++) {
                this.list3.push(last + i);
            }
        }
        resolve();
    }, 2000);
    });
    }
    }
    }
</script>
<style scoped>
.card{
    margin-bottom: 20px;
}
</style>
