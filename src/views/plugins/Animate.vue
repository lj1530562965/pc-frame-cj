<template>
<div id="animates">
    <!--<Select v-model="items[0]" style="width:200px" @on-change="change">-->
        <!--<Option v-for="item in items" :value="item" :key="item">{{ item }}</Option>-->
    <!--</Select>-->
    <div style="width: 50%;float: left;">
        <Button size="small" v-for="(item,index) in items" :key="index" v-model="items[0]" style="margin: 10px;width: 20%;" @click="change(item)">{{ item }}</Button>
    </div>
    <div style="width: 50%;float: right;">
        <transition :name="animateClass"
                    :enter-active-class="animateActiveClass"
                    :leave-active-class="animateActiveClass">
            <h1 v-show="show">动画效果</h1>
        </transition>
    </div>

</div>
</template>
<script>
    export default {
        name:'animates',
        data () {
            return {
                animateClass:"bounce",
                animateActiveClass:"animated bounce",
                show:true,
                items:['bounce','flash','pulse','rubberBand','shake','swing','tada','wobble','jello',
                    'bounceIn','bounceInDown','bounceInLeft', 'bounceInRight','bounceInUp',
                    'bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp',
                'fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig',
        'Fading Exits','fadeOut','fadeOutDown','fadeOutDownBig','fadeOutLeft','fadeOutLeftBig','fadeOutRight','fadeOutRightBig','fadeOutUp',
                   'fadeOutUpBig','flip','flipInX','flipInY','flipOutX','flipOutY','lightSpeedIn','lightSpeedOut',
                    'rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','rotateOut',
                    'rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight','slideInUp','slideInDown',
                    'slideInLeft','slideInRight','slideOutUp','slideOutDown','slideOutLeft','slideOutRight','zoomIn',
                    'zoomInDown','zoomInLeft','zoomInRight','zoomInUp','zoomOut','zoomOutDown','zoomOutLeft','zoomOutRight',
                    'zoomOutUp','hinge','jackInTheBox','rollIn','rollOut']
            }
        },
        methods:{
            change(val){
                this.show = !this.show;
                this.animateClass = val;
                this.animateActiveClass = "animated "+val;
            }
        }
    }
</script>
<style scoped="">
    h1 {
        font-size: 80px;
        color: #f35626;
        background-image: -webkit-linear-gradient(92deg,#f35626,#feab3a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: fixed;
        right: 15%;
        top:35%;
    }
</style>