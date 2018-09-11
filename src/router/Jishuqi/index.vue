<template>
  <div>
    <span>{{count}}</span>
    <el-button @click="add">+</el-button>
    <el-button @click="sub">-</el-button>
    <el-button @click="asyncAdd">async +</el-button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  methods: {
    ...mapMutations('counter', [
      'add',
      'sub'
    ]),
    asyncAdd(){
      this.$store.dispatch('counter/asyncAdd')
    }
    // add () {
    //   this.$store.commit('counter/add')
    // },
    // sub () {
    //   this.$store.commit('counter/sub')
    //   console.log("AAAA", this.$store.state.counter.count)
    // },
    // add_count () {
    //   this.count++
    // },
    // sub_count () {
    //   this.count--
    // }
  },
  computed: {
    count(){
      return this.$store.state.counter.count
    }
  }
}
</script>

<style>

</style>
