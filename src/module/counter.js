const counter = {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    add (state) {
      state.count++
    },
    sub (state) {
      state.count--
    }
  },
  actions: {
    async asyncAdd ({commit}) {
      await promise1().then(() => {
        commit('add')
      })
      await promise1().then(() => {
        commit('add')
      })
    }
  }
}
const promise1 = () => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
)
export default counter
