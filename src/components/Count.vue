<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{this.$store.state.count}}</h3>
        <h3>{{testCount}}</h3>

        <div>
            <button @click="add(10)">add</button>
            <button @click="reduce">reduce</button>
        </div>
        <div>
            <button @click="addAction">addAction</button>
            <button @click="reduceAction">reduceAction</button>
        </div>
        <vchild :message="message"></vchild>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
    import vchild from "./VChild";
    export default {
        components: {vchild},
        name: "Count",
        data() {
            return {
                msg: 'Hello Vuex',
                message:"Hello child"
            }
        },
        store,
        methods: {
            ...mapMutations(['add', 'reduce']),
            ...mapActions(['addAction', 'reduceAction'])
        },
        // computed:{
        //     ...mapState(["count"]),
        //    // ...mapGetters(["count"]),
        // }
        computed:{
            testCount:function () {
                return this.$store.state.count;
            }
        }
    }
</script>

<style scoped>

</style>
