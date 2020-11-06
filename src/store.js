//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        add(state){
            state.count++
        },
        subtracte(state){
            state.count--
        },
        addN(state,n){
            state.count+=n
        },
        subtracteN(state,n){
            state.count-=n
        },
    },
    actions: {
        addasync({commit}){
            setTimeout(()=>{
                commit('add')
            },2000)
        },
        addasyncN(context,n){
            setTimeout(()=>{
                context.commit('addN',n)
            },2000)
        },
        subasync({commit}){
            setTimeout(()=>{
                commit('subtracte')
            },1000)
        },
        subNasync(context,n){
            setTimeout(()=>{
                context.commit('subtracteN',n)
            },1000)
        },
    }
})

