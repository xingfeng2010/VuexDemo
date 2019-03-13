<template>
    <div>
        {{msg}}
        {{$route.params.username}}
    </div>
</template>

<script>
export default {
    name: 'MyVue1',
    data () {
        return {
            msg: 'Welcome to Your MyVue-1 page'
        }
    }
}
</script>

<style scoped>

</style>
