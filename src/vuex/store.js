import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:2
}

const mutations = {
    add(state, n) {
        state.count+=n;
    },
    reduce(state) {
        state.count--;
    }
}

const  getters = {
    count:function () {
        return state.count += 10;
    }
}

const actions = {
    addAction(context) {
        context.commit('add', 10);
        setTimeout(()=>{context.commit('reduce')},3000);
        console.log('add reduce');
    },

    reduceAction({commit}) {
        commit('reduce')
    }
}

export default new Vuex.Store({
    state,
    mutations,
   // getters,
    actions
})

