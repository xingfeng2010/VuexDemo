<template>
    <div>
        <p>我是子组件，接收来自父组件的信息:{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "vchild",
        props:['message']
    }
</script>

<style scoped>

</style>