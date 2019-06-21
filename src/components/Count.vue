<template>
    <div>
        <h1>{{title}}</h1>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{this.$store.state.count}}</h3>
        <h3>{{testCount}}</h3>

        <div>
            <button @click="add(10)">add</button>
            <button @click="reduce()">reduce</button>
        </div>
        <div>
            <button @click="addAction">addAction</button>
            <button @click="reduceAction">reduceAction</button>
        </div>
        <vchild :message="parentmessage"></vchild>
        <vchild v-bind:message="a + b"></vchild>
        <vchild ref="msg"></vchild>
        <vchild @getEmitMessage="showMsg"></vchild>
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
                parentmessage:"Hello child",
                a:'我是子组件HAHA',
                b:'DD555',
                title:''
            }
        },
        store,
        methods: {
            ...mapMutations(['add', 'reduce']),
            ...mapActions(['addAction', 'reduceAction']),
            showMsg(title) {
                this.title = title;
            }
        },
        // computed:{
        //     ...mapState(["count"]),
        //    // ...mapGetters(["count"]),
        // }
        computed:{
            testCount:function () {
                return this.$store.state.count;
            }
        },
        mounted:function () {
           this.$refs.msg.getMessage('refs父传给子组件');
        }
    }
</script>

<style scoped>

</style>
