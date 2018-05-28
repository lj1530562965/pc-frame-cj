<template>
  <div style="height: 1000px;">
      <Row>
          <Col span="24">
          <Card class="card">
              <p slot="title">基础用法(组件会根据current自动判断各步骤状态)</p>
              <Steps :current="1">
                  <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                  <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                  <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                  <Step title="待进行" content="这里是该步骤的描述信息"></Step>
              </Steps>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="24">
          <Card class="card">
              <p slot="title">迷你版 (设置属性size为small启用迷你版)</p>
              <Steps :current="2" size="small">
                  <Step title="已完成"></Step>
                  <Step title="进行中"></Step>
                  <Step title="待进行"></Step>
                  <Step title="待进行"></Step>
              </Steps>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="24">
          <Card class="card">
              <p slot="title">带图标的步骤条(通过设置Step的icon属性可以自定义图标)</p>
              <Steps :current="1">
                  <Step title="注册" icon="person-add"></Step>
                  <Step title="上传头像" icon="camera"></Step>
                  <Step title="验证邮箱" icon="email"></Step>
              </Steps>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="24">
          <Card class="card">
              <p slot="title">切换步骤(点击下一步按钮可以切换当前进度状态)</p>
              <p>当前正在进行第 {{ current + 1 }} 步</p>
              <Steps :current="current">
                  <Step title="步骤1"></Step>
                  <Step title="步骤2"></Step>
                  <Step title="步骤3"></Step>
                  <Step title="步骤4"></Step>
              </Steps>
              <Button type="primary" @click="next">Next step</Button>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="24">
          <Card class="card">
              <p slot="title">垂直方向(设置属性direction为vertical在垂直方向展示)</p>
              <p>当前正在进行第 {{ current + 1 }} 步</p>
              <Steps :current="2" direction="vertical">
                  <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                  <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                  <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                  <Step title="待进行" content="这里是该步骤的描述信息"></Step>
              </Steps>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="24">
          <Card class="card">
              <p slot="title">步骤运行错误(设置Steps的属性status为error指定当前步骤状态。)</p>
              <Steps :current="1" status="error">
                  <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                  <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                  <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                  <Step title="待进行" content="这里是该步骤的描述信息"></Step>
              </Steps>
          </Card>
          </Col>
      </Row>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                current: 0
            }
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
    }
    }
</script>
<style scoped>
.card{
    margin-bottom: 20px;
}
.ivu-steps .ivu-steps-tail>i{
    position: relative;
    left: 100px!important;
}
</style>
