<template>
    <div>
        {{msg}}
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'MyVue',
    data () {
        return {
            msg: 'Welcome to Your MyVue page'
        }
    }
}
</script>

<style scoped>

</style>
