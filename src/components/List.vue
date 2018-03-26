<template>
<div class="list">
     <ul>
      <li v-for="item in items" :key="item.id">{{item[type]}}</li>
    </ul>
</div>

</template>

<script>
export default {
  props: ['items', 'type'],
  data () {
    return {
    }
  },
  computed: {

  }
}
</script>

<style>
.list{
    margin-top: 20px;
background: rgb(224, 224, 224);
}
.list li{
    margin: 5px;
    list-style: none;
}
</style>
