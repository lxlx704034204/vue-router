<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
      <p>newsId: {{$route.params.newsId}}</p>
      <p>newsTitle: {{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
  export default {
      name: 'hi1',
      data(){
          return {
              msg: 'Hi, I am params Page !'
          }
      },
      beforeRouteEnter: (to, from, next) => {
        console.log("准备进入params路由模板");
        next();
      },
      beforeRouteLeave: (to, from, next) => {
        console.log("准备离开params路由模板");
        next();
      }
  }
</script>


<style scoped>

</style>
