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
    <div>
      <button @click="goback">后退</button>
      <button @click="gohead">前进</button>
      <button @click="jumpTo">界面跳转</button>
    </div>
    <div class="text-left">
      单页面多路由区域操作:
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi页面</router-link>
      <br>
      url参数的传递：
      <router-link to="/params/666/this is anthor method of parameter missing">另一种参数传递的方式</router-link> |
      <br>
      重定向：
      <router-link to="/goHome">Redirect to HomePage</router-link> |
      <router-link to="/goParams/168/redirect to params page">Redirect to Params Page</router-link>
      <br>
      别名：
      <router-link to="/yy">alias 别名</router-link>
    </div>


    <transition name="fade" mode="out-in">
        <router-view/>
    </transition>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback(){
      this.$router.go(-1);
    },
    gohead() {
      this.$router.go(1);
    },
    jumpTo() {
      this.$router.push('/hi');
    }
  }
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
  .text-left {
    text-align: left;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>
