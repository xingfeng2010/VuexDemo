<template>
    <div>
        <p>我是子组件，接收来自父组件的信息:{{message}}</p>
        <h3>{{refmsg}}</h3>
    </div>
</template>

<script>
    export default {
        name: "vchild",
        props:['message'],
        data() {
            return {
                message:'',
                refmsg:''
            }
        },
        methods:{
            getMessage(m) {
                this.refmsg = m;
            }
        },
        mounted:function () {
            this.$emit('getEmitMessage', 'emit子组件传父组件')
        }
    }
</script>

<style scoped>

</style>