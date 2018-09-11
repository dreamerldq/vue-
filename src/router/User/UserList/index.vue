<template>
  <ul>
    <li @click="to_detail(index)" v-for="(item, index) in user_list" :key=index>
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      user_list: ['A', 'B', 'C', 'D']
    }
  },
  methods: {
    to_detail (value) {
      const path = `/user/${value}`
      // const params = {id: path}
      this.$router.push({ path: path })
      // this.$router.push({name: 'user_detail', params})
    }
  }
}
</script>

<style lang="scss">
  .container{
    width: 800px;
    margin: 0 auto;
  }
</style>
