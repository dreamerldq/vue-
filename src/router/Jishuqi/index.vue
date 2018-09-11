<template>
  <div>
    <span>{{count}}</span>
    <el-button @click="add_count">+</el-button>
    <el-button @click="sub_count">-</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    add_count () {
      this.count++
    },
    sub_count () {
      this.count--
    }
  }
}
</script>

<style>

</style>
