<template>
  <nav>
    <!-- 声明式导航 -->
    <ul>
      <router-link to="/film" tag="li" activeClass="myactive">
       <i class="iconfont icon-form"></i>
        film
      </router-link>
      <router-link to="/cinema" tag="li" activeClass="myactive">
       <i class="iconfont icon-form"></i>
      cinema</router-link>
      <router-link to="/center" tag="li" activeClass="myactive">
       <i class="iconfont icon-form"></i>
      center</router-link>
    </ul>
  </nav>
</template>

<style scoped>

  .myactive{
    color:red;
  }

  nav{
    position:fixed;
    bottom: 0px;
    left:0px;
    width:100%;
    height: 50px;
    background: white;
  }

  nav ul{
    display: flex;
  }

  nav ul li{
    flex:1;
    line-height: 50px;
    text-align: center;
  }
</style>
