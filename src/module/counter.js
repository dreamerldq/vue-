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
    subCounte (state) {
      state.count--
    }
  },
  actions: {
  }
}
export default counter
