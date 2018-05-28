<template>
  <div>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">基础用法</p>
              <Timeline>
                  <TimelineItem>
                      <p class="time">1976年</p>
                      <p class="content">Apple I 问世</p>
                  </TimelineItem>
                  <TimelineItem>
                      <p class="time">1984年</p>
                      <p class="content">发布 Macintosh</p>
                  </TimelineItem>
                  <TimelineItem>
                      <p class="time">2007年</p>
                      <p class="content">发布 iPhone</p>
                  </TimelineItem>
                  <TimelineItem>
                      <p class="time">2010年</p>
                      <p class="content">发布 iPad</p>
                  </TimelineItem>
                  <TimelineItem>
                      <p class="time">2011年10月5日</p>
                      <p class="content">史蒂夫·乔布斯去世</p>
                  </TimelineItem>
              </Timeline>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">用各种颜色来标识不同状态，可以使用green、red、blue或自定义的颜色，默认是 blue 。</p>
              <Timeline>
                  <TimelineItem color="green">发布1.0版本</TimelineItem>
                  <TimelineItem color="green">发布2.0版本</TimelineItem>
                  <TimelineItem color="red">严重故障</TimelineItem>
                  <TimelineItem color="blue">发布3.0版本</TimelineItem>
              </Timeline>
          </Card>
          </Col>
      </Row>
      <Row>
          <Col span="11">
          <Card class="card">
              <p slot="title">通过添加pending属性来标记最后一个为幽灵节点，标识还未完成</p>
              <Timeline pending>
                  <TimelineItem>发布1.0版本</TimelineItem>
                  <TimelineItem>发布2.0版本</TimelineItem>
                  <TimelineItem>发布3.0版本</TimelineItem>
                  <TimelineItem><a href="#">查看更多</a></TimelineItem>
              </Timeline>
          </Card>
          </Col>
          <Col span="11" offset="2">
          <Card class="card">
              <p slot="title">接受一个 slot 来自定义轴点的内容，比如一个图标</p>
              <Timeline>
                  <TimelineItem color="green">
                      <Icon type="trophy" slot="dot"></Icon>
                      <span>发布里程碑版本</span>
                  </TimelineItem>
                  <TimelineItem>发布1.0版本</TimelineItem>
                  <TimelineItem>发布2.0版本</TimelineItem>
                  <TimelineItem>发布3.0版本</TimelineItem>
              </Timeline>
          </Card>
          </Col>
      </Row>
  </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        methods: {

    }
    }
</script>
<style scoped>
.card{
    margin-bottom: 20px;
    height: 400px;
}
.time{
    font-size: 14px;
    font-weight: bold;
}
.content{
    padding-left: 5px;
}
</style>
