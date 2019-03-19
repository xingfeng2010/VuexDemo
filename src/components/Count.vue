<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{this.$store.state.count}}</h3>
        <h3>{{count}}</h3>

        <div>
            <button @click="add(10)">add</button>
            <button @click="reduce">reduce</button>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    import {mapState, mapMutations, mapGetters} from 'vuex';
    export default {
        name: "Count",
        data() {
            return {
                msg: 'Hello Vuex',
            }
        },
        store,
        methods: mapMutations([
            'add',
            'reduce'
        ]),
        computed:{
            ...mapState(["count"]),
            ...mapGetters(["count"]),
        }
    }
</script>

<style scoped>

</style>
