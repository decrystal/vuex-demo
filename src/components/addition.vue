<template>
  <div>
    <span>当前最新数量为[{{count}}]</span>
    <br><br>
    <button @click="add1">+1</button>
    <button @click="addNN">+N</button>
    <button @click="asyncadd">+1 async</button>
    <button @click="asyncaddN">+N async</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations,mapActions} from 'vuex'

export default {
  computed: {
    ...mapState(['count',]),

  },
  methods: {
    ...mapActions(['addasync','']),
    ...mapMutations(['','addN']),
    /*由于@click只能识别methods里的函数，所以只能新建一个add1,然后在add1里面调用
mutations里的add函数，注意：add1与add不能同名    */
    add1(){
      /*mapMutations将add映射为vue实例的函数所以可以通过this.add()来调用
      等价于如果不用辅助函数mapMutations时的，要调用mutations里的函数则需要使用$store.commit
       this.$store.commit('add')*/
      // this.add()
      this.$store.commit('add')
    },
    addNN(){
      this.addN(6)
    },
    asyncadd(){
      this.addasync()
    },
    asyncaddN(){
      this.$store.dispatch('addasyncN',6)
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
