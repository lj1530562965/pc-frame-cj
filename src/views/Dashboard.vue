<template>
    <div class="completion-input-box">
        <h2 class="neuesDemo">Neues Bauen Demo</h2>
        <!--<Input  :text="'创业项目名称'" v-model="projectN"></Input>-->
        <!--<Input  :text="'所属公司名称'" v-model="companyN"></Input>-->
        <!--<Input  :text="'所属投资机构名称'" v-model="mechanismN"></Input>-->
        <!--<Radio name="method" value="phone" label="Phone" id="phone"></Radio>-->
        <!--<Radio name="method" value="email" label="Email" id="email"></Radio>-->

    </div>
</template>
<script>
    import Input from './components/Input.vue'
    export default {
        name: 'dashboard',
                data() {
            return {
                projectN: '1',         // 创业项目名称
                companyN: '2',         // 所属公司名称
                mechanismN: '3'        // 所属机构名称
            }
        },
        created() {

        },
        components: {
            Input
        }
    }
</script>
<style scoped="">
    @font-face {
        font-family: 'open_sanslight_italic';
        src: url('../../static/fonts/opensans-lightitalic-webfont.woff2') format('woff2'),
        url('../../static/fonts/opensans-lightitalic-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }
    h2.neuesDemo {
        font-family: 'open_sanslight_italic'
    }
</style>