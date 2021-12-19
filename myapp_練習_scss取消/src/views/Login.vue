<template>
  <div>
    Login page


      <router-link to="/login" tag="button" activeClass="myactive">
       <i class="iconfont icon-form"></i>
        login
      </router-link>
      <router-link to="/film" tag="button" activeClass="myactive">
       <i class="iconfont icon-form"></i>
        film
      </router-link>
      <router-link to="/cinema" tag="button" activeClass="myactive">
       <i class="iconfont icon-form"></i>
      cinema</router-link>
      <router-link to="/center" tag="button" activeClass="myactive">
       <i class="iconfont icon-form"></i>
      center</router-link>
        <router-link to="/axiosfilms" tag="button" activeClass="myactive">
       <i class="iconfont icon-form"></i>
      axiosfilms</router-link>
  
  </div>
</template>

<style scoped>
 .myactive{
    color:red;
  }
  button{
    display: block;
    margin: 20px;
    padding: 5px;
  }

</style>