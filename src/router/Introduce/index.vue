<template>
<div>
    <h1>这是详情介绍界面</h1>
    <h2>我的名字是：{{name}}</h2>
    <p>在这个页面我们将要完成的是将【数字艺术系网站的一些请求返回的数据显示出来】</p>
    <p>在这里我们还会使用到vuex</p>
    <el-button @click="getNews">新闻</el-button>
    <el-button @click="getStudios">工作室</el-button>
    <el-button @click="getProject">双创项目</el-button>
    <el-button @click="getTeachers">老师资料</el-button>
    <list :items="news" type="title"></list>
    <list :items="studios" type="studioName"></list>
    <list :items="project" type="projectName"></list>
    <list :items="teachers" type="name"></list>
     <router-view></router-view>
</div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import List from '@/components/List'
export default {

  data () {
    return {
      name: 'lidanqiu'
    }
  },
  computed: mapState('introduce', [
    'news',
    'studios',
    'project',
    'teachers'
  ]),
  methods: {
    ...mapActions('introduce', [
      'getNews',
      'getStudios',
      'getProject',
      'getTeachers'
    ])
  },
  components: {
    List
  }
}
</script>

<style>

</style>
