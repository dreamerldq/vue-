import axios from 'axios'
function getRecords (type, url, obj, commit) {
  console.log(obj.state)
  console.log(type)
  axios.get(url)
    .then(res => {
      console.log('ssss', res.data)
      obj.state[type] = res.data
      commit('changeData', {value: res.data, type})
    })
    .catch(res => {
      console.log(res.StatusText)
    })
}
const moduleB = {
  namespaced: true,
  state: {
    news: [],
    studios: [],
    project: [],
    teachers: []
  },
  getters: {
  },
  mutations: {
    changeData (state, {value, type}) {
      console.log('这是请求回来的新数据', value)
      state[type] = value
    }
  },
  actions: {
    getNews ({commit}) {
      console.log('开始请求')
      getRecords('news', 'http://47.93.217.181:3000/news', this, commit)
    },
    getStudios ({commit}) {
      getRecords('studios', 'http://47.93.217.181:3000/studios', this, commit)
    },
    getProject ({commit}) {
      getRecords('project', 'http://47.93.217.181:3000/projects', this, commit)
    },
    getTeachers ({commit}) {
      getRecords('teachers', 'http://47.93.217.181:3000/users/DigitalMediaTechnologyTeam', this, commit)
    }
  }
}
export default moduleB
