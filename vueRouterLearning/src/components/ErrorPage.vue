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
      }
  }
</script>


<style scoped>

</style>
