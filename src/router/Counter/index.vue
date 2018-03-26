<template>
  <div>
    <h1>这是主界面</h1>
    <p>监理费计算器</p>
    <el-input v-model="touzi" placeholder="请输入内容"></el-input>
    <RadioGroup chineseName="专业调整系数" name="zhuanye" :items="calValue.zhuanye"></RadioGroup>
    <RadioGroup  chineseName="工程调整系数" name="gongcheng" :items="calValue.gongcheng"></RadioGroup>
    <RadioGroup  chineseName="高程调整系数" name="gaocheng" :items="calValue.gaocheng"></RadioGroup>
     <el-slider v-model="fudong">浮动</el-slider>
     <el-button @click="calculator">计算</el-button>
     <h2>监理费{{jianlifei}}</h2>
  </div>
</template>
<script>
import RadioGroup from '@/components/RadioGroup'

import { mapMutations, mapGetters } from 'vuex'
export default {
  created () {
  },
  data () {
    return {
      calValue: { zhuanye: [1.0, 1.1, 1.2],
        gaocheng: [1.1, 1.2, 1.3],
        gongcheng: [0.85, 1.00, 1.15]}
    }
  },
  props: {

  },
  methods: {
    ...mapMutations('calculator', [
      'calculator'
    ])
  },
  computed: {
    touzi: {
      get () {
        return this.$store.state.calculator.touzi
      },
      set (newValue) {
        let value = (newValue || '').replace(/\D*/, '')
        this.$store.state.calculator.touzi = value
      }
    },
    fudong: {
      get () {
        return this.$store.state.calculator.fudong
      },
      set (newValue) {
        this.$store.commit('calculator/updateFudong', newValue)
      }
    },

    jianlifei () {
      console.log('这是返回的监理费')
      return this.$store.state.calculator.jianlifei
    },
    name () {
      return this.$store.state.calculator.name
    },

    ...mapGetters('calculator', [
      'brotherName'
    ])
  },
  components: {
    RadioGroup
  }
}
</script>
<style>

</style>
