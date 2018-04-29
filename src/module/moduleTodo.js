
let count = 0
const moduleTodo = {
  namespaced: true,
  state: {
    todoList: [],
    type: 'all'
  },
  getters: {
    filterTodoList (state) {
      const {type} = state
      switch (type) {
        case 'all' :
          return state.todoList
        case 'uncomplete' :
          return state.todoList.filter((item) => {
            return item.iscomplete === false
          })
        case 'complete':
          return state.todoList.filter((item) => {
            return item.iscomplete === true
          })
      }
    }
  },
  mutations: {
    addTodo (state, payload) {
      state.todoList.push({...payload, id: count++})
    },
    completeTodo (state, payload) {
      console.log('aaaa', payload)
      const newState = state.todoList.map((item) => {
        if (item.id === payload.id) {
          return {...item, iscomplete: payload.type}
        }
        return item
      })
      state.todoList = newState
    },
    changeState (state, payload) {
      state.type = payload
    },
    deleteTodo (state, payload) {
      const newState = state.todoList.filter((item) => {
        return item.id !== payload
      })
      state.todoList = newState
    }
  },
  actions: {
  }
}
export default moduleTodo
