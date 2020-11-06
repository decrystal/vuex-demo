<template>
  <div>
    <span>当前最新数量为[{{count}}]</span>
    <br><br>
    <button @click="subtracte1">-1</button>
    <button @click="subtracteNN">-N</button>
    <button @click="asyncsub">-1 async</button>
    <button @click="asyncsubN">-N async</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['count',]),
  },
  methods: {
    ...mapMutations(['subtracte','subtracteN']),
    ...mapActions(['subasync','subNasync']),
    subtracte1(){
          this.subtracte()
      },

    subtracteNN(){
      this.subtracteN(6)
    },
    asyncsub(){
      this.subasync()
     },
    asyncsubN(){
      this.subNasync(6)
    },
  },
}
</script>

<style scoped>

</style>
