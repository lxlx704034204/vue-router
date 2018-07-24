<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<p>
      导航：
      <router-link to="/">首页</router-link> |          &lt;!&ndash; 相当于 <a href="#"></a> &ndash;&gt;
      <router-link to="/hi">Hi页面</router-link> |
      <router-link :to="{name:'hi1', params:{username:'yy', id:'666'}}">Hi1</router-link> |
      <router-link to="/hi/hi2">Hi2</router-link>
    </p>-->

    <!--<p> {{ $route.name}}</p>-->

    <br>
    <router-link to="/">首页</router-link> |
    <router-link to="/hi">Hi页面</router-link> |
    <router-link to="/params/666/this is anthor method of parameter missing">另一种参数传递的方式</router-link>


    <router-view/>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .left {
    float:left;
    width:50%;
    background-color:#ccc;
    height:300px;
  }
  .right {
    float:right;
    width:50%;
    background-color:#c0c;
    height:300px;
  }
</style>
