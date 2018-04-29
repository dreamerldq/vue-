<template>
  <div class="container">
    <div class="controlInput">
      <el-input v-model="content"></el-input>
      <el-button @click="addTodo">添加项目</el-button>
    </div>
    <el-card v-if="todoList.length !== 0" class="box-card">
      <div v-for="o in todoList" :key="o.id" class="text item">
        <div class="cardContent">
           {{ o.content }}
           <div v-if="!o.iscomplete" class="buttonGroup">
               <el-button @click="completeTodo(o.id, true, $event)" size="small">完成</el-button>
               <el-button @click="deleteTodo(o.id, $event)" size="small">删除</el-button>
           </div>
           <div v-else class="buttonGroup">
               <el-button  @click="completeTodo(o.id, false, $event)" size="small">取消完成</el-button>
               <el-button  @click="deleteTodo(o.id, $event)" size="small">删除</el-button>
           </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  data () {
    return {
      content: '',
      todolist: []
    }
  },
  created () {
    console.log('进入TODO界面')
  },
  computed: {
    todoList () {
      return this.$store.state.todo.todoList
    }
  },
  methods: {
    addTodo () {
      const item = {
        content: this.content,
        iscomplete: false
      }
      this.$store.commit('todo/addTodo', item)
      this.content = null
    },
    completeTodo (id, type) {
      this.$store.commit('todo/completeTodo', {id, type})
    },
    deleteTodo (id, e) {
      this.$store.commit('todo/deleteTodo', id)
    }
  }
}
</script>

<style>
.controlInput{
  display: flex;
  flex-direction: row;
}
.cardContent{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
