<template>
  <h1>用户详情界面{{id}}</h1>
</template>

<script>
export default {
  props: ['id'],
  created () {
    console.log('跳转路径', this.$route.params)
  },
  computed: {
    user_id () {
      return this.$route.params.id
    }
  }
}
</script>
<style>

</style>
