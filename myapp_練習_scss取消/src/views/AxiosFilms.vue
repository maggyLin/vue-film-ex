<template>
  <div class="test">
    <ul>
      <li v-for="data in datalist" :key="data.filmId" >
        <img :src="data.poster"/>
        <h3>{{data.name}}</h3>
        <p>观众评分{{data.grade}}</p>
        <p v-if="data.actors">主演:{{data.actors | actorfilter}}</p>
        <p v-else>暂无主演</p>
      </li>
    </ul>


  </div>
</template>

<script>
// import axios from 'axios'  //已經在main.js註冊全局(使用this)
import Vue from 'vue'

//過濾(整理)資料
Vue.filter('actorfilter', function (data) {
  // console.log(data);
  var newlist = data.map(item => item.name)
  return newlist.join(' ')
})

export default {
  data(){
    return{
      datalist: [],
      total:0
    }
  },
  mounted(){
    this.axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4271989',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    })

  }
  
}
</script>

<style scoped>
  img{
    width: 100px;
  }
</style>