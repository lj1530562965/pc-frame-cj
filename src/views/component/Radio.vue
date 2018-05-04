<template>
    <div class="custom-radio" v-bind:class="{ inverted: inverted }">
        <input type="radio" v-bind:name="name" v-bind:class="className" v-bind:id="id" v-bind:checked="checked" v-bind:value="value" v-bind:required="required" v-on:change="updateInput" />
        <label v-bind:for="id">{{ label }}</label>
    </div>
</tempalte>
<script>
    export default{
        props:{
            name: { type: String, required: false },
            className: { type: String, required: false },
            id: { type: String, required: false },
            value: { type: String, required: false },
            required: { type: Boolean, required: false, default: false },
            checked: { type: Boolean, required: false, default: false },
            label: { type: String, required: true },
            inverted: { type: Boolean, required: false, default: false }
        },
        methods:{
            updateInput(event) {
            this.$emit('input', event.target.value);
            }
        }
    }
</script>