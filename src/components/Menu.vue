<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  router=true
  active-text-color="#ffd04b">
  <el-menu-item index="/">监理费计算器</el-menu-item>
  <el-menu-item index="/introduce" >数字艺术系信息列表</el-menu-item>
  <el-menu-item index="/todo">待办项目管理</el-menu-item>

</el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex2: '/'
    }
  },
  methods: {
    handleSelect (keyPath) {
      console.log(keyPath)
      this.activeIndex2 = keyPath
      this.$router.push({ path: keyPath })
    }
  }
}
</script>

<style>

</style>
