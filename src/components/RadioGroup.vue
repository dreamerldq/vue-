<template>
<div>
<el-radio-group v-model="dataValue">
    <el-radio v-for="(item,index) in items" :key="index" :label="item" >{{item}}</el-radio>
  </el-radio-group>
  <p>{{chineseName}}</p>
</div>

</template>

<script>
export default {
  props: ['items', 'name', 'chineseName'],
  data () {
    return {
      radio2: 3
    }
  },
  computed: {
    dataValue: {
    // getter
      get: function () {
        console.log(this.$store.state.calculator[this.name])
        return this.$store.state.calculator[this.name]
      },
      // setter
      set: function (newValue) {
        this.$store.state.calculator[this.name] = newValue
      }
    }
  }
}
</script>

<style>

</style>
