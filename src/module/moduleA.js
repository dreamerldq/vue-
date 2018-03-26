const moduleA = {
  namespaced: true,
  state: {
    count: 0,
    zhuanye: 1.0,
    gongcheng: 1.15,
    gaocheng: 1.1,
    touzi: '',
    fudong: 0,
    jianlifei: 0
  },
  getters: {
  },
  mutations: {
    calculator (state) {
      state.jianlifei = (parseFloat(state.touzi) * state.fudong)
    },
    updateFudong (state, payload) {
      state.fudong = payload
    }
  },
  actions: {
  }
}
export default moduleA
