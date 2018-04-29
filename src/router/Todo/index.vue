<template>
    <div class="container">
        <todo-list></todo-list>
        <todo-filter></todo-filter>
    </div>
</template>

<script>
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
export default {
  data () {
    return {

    }
  },
  components: {
    TodoList,
    TodoFilter
  }
}
</script>

<style>
.container{
  width: 500px;
}
</style>
