<template>
  <div id="app">

    <tabbar v-show="isTabbarShow"></tabbar>
    
    <!-- 路由容器 -->
    <div>
      <router-view></router-view>
    </div>
    

  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
import { mapState } from 'vuex' 

export default {
  data () {
    return {
      // isShow:true
    }
  },
  methods: {

  },
  components: {
    tabbar
  },

  // computed:{
  //   isShow(){
  //     return this.$store.state.isTabbarShow
  //   }
  // }，
  computed: {
    //...mapState(['isTabbarShow','other1','other2'])
    ...mapState(['isTabbarShow']), // ES6展开合并运算符
    // a(){
    //   return "test a";
    // }

  }

  // beforeMount() {
  //   console.log("从这里开始订阅消息了")
  //   bus.$on("maizuo",(data)=>{   //使用共用bus方法
  //     // console.log("被通知了maizuo",data)
  //     this.isShow = data;
  //   })
  // }
}
</script>


<style>
*{
  margin:0;
  padding:0;
}

html{
  height: 100%;

}
li{
  list-style: none;
}

section{
  margin-bottom: 50px;
}
</style>
