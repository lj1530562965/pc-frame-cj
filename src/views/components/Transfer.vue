<template>
    <div>
        <Row>
            <Col span="11">
            <Card class="card">
                <p slot="title">基础用法</p>
                <Transfer
                        :data="data1"
                        :target-keys="targetKeys1"
                        :render-format="render1"
                @on-change="handleChange1"></Transfer>
            </Card>
            </Col>
            <Col span="11" offset="2">
            <Card class="card">
                <p slot="title">通过设置属性 filterable 可以进行搜索，可以自定义搜索函数。</p>
                <Transfer
                        :data="data2"
                        :target-keys="targetKeys2"
                        filterable
                        :filter-method="filterMethod"
                @on-change="handleChange2"></Transfer>
            </Card>
            </Col>
        </Row>
        <Row>
            <Col span="24">
            <Card class="card">
                <p slot="title">可以自定义两列的宽高、操作文案，以及底部自定义操作</p>
                <Transfer
                        :data="data3"
                        :target-keys="targetKeys3"
                        :list-style="listStyle"
                        :render-format="render3"
                        :operations="['To left','To right']"
                        filterable
                @on-change="handleChange3">
                <div :style="{float: 'right', margin: '5px'}">
                    <Button type="ghost" size="small" @click="reloadMockData">Refresh</Button>
                </div>
                </Transfer>
            </Card>
            </Col>
        </Row>
        <Row>
            <Col span="24">
            <Card class="card">
                <p slot="title">可以通过 render-format 来渲染复杂的数据。</p>
                <Transfer
                        :data="data4"
                        :target-keys="targetKeys4"
                        :render-format="render4"
                @on-change="handleChange4"></Transfer>
            </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys(),
                data2: this.getMockData(),
                targetKeys2: this.getTargetKeys(),
                data3: this.getMockData(),
                targetKeys3: this.getTargetKeys(),
                listStyle: {
                    width: '250px',
                    height: '300px'
                },
                data4: this.getMockData(),
                targetKeys4: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
            .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            },
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
            .map(item => item.key);
            },
            handleChange2 (newTargetKeys) {
                this.targetKeys2 = newTargetKeys;
            },
            filterMethod (data, query) {
                return data.label.indexOf(query) > -1;
            },
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
            .map(item => item.key);
            },
            handleChange3 (newTargetKeys) {
                this.targetKeys3 = newTargetKeys;
            },
            render3 (item) {
                return item.label + ' - ' + item.description;
            },
            reloadMockData () {
                this.data3 = this.getMockData();
                this.targetKeys3 = this.getTargetKeys();
            },
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
            .map(item => item.key);
            },
            handleChange4 (newTargetKeys) {
                this.targetKeys4 = newTargetKeys;
            },
            render4 (item) {
                return item.label + ' - ' + item.description;
            }
    }
    }
</script>
<style scoped>
    .card{
        margin-bottom: 20px;
    }
</style>
