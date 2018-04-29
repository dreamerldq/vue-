<template>
<div>
  <div class="buttonGroup">
  <el-button size="small" @click="changeState('all')">全部</el-button >
  <el-button size="small" @click="changeState('uncomplete')">未完成</el-button >
  <el-button size="small" @click="changeState('complete')">已完成</el-button >
</div>
   <el-card  v-if="filterTodoList.length !== 0" class="box-card">
      <div v-for="o in filterTodoList" :key="o.id" class="text item">
        <div class="cardContent">
           {{ o.content }}
        </div>
      </div>
    </el-card>
</div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },

  methods: {
    changeState (type) {
      this.$store.commit('todo/changeState', type)
    }
  },
  computed: {
    ...mapGetters('todo', [
      'filterTodoList'
    ])
  }
}
</script>

<style>

</style>
