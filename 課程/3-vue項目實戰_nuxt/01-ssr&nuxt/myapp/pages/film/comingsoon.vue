<template>
  <div>
    comignsoon
    <ul>
      <li v-for="data in datalist" :key="data.id">
        {{data.nm}}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  asyncData(data) {
    // console.log();

    //process.server 是否在伺服器後端(node)執行,false->前端運行使用proxy代理
    return axios({
      url:process.server?"http://m.maoyan.com/ajax/movieOnInfoList?token=":"/ajax/movieOnInfoList?token=",
    }).then(res=>{
      console.log(res.data);
      return {
        datalist:res.data.movieList
      }// 状态
    })
  }
}
</script>
<style scoped>

</style>
