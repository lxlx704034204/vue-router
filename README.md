

vue-router 学习笔记
===

本质：vue-router 是SPA（单页应用）的路径管理器，再通俗的说，它就是我们WebApp的链接路径管理系统。  <br>
缘由：vue制作的都是单页应用，只有一个主要的index.html页面，所以无法用a标签链接跳转，只能用vue-router进行管理。<br>


第一讲 vue-router的入门
---
在引用导航链接时，语法为： `<router-link to="/">[显示字段]</router-link>`          <br>
to：是我们的导航路径，需要填写的是在router/index.js文件里配置的path值，如果要导航到默认的首页只需要写成"/"   <br>
显示字段：就是我们要展示给用户的导航标签名称，例如：首页、产品展示等等  <br>

    Q1：组件 Hi.vue 和路由 index.js 文件中的name属性的用处是什么呢？
    Q2：注意 router-link标签 和 router-view标签 的区别？


第二讲 vou-router配置子路由
---
（1）新建Hi1.vue 、Hi2.vue界面，修改msg信息； <br>
（2）在router/index.js 中引用组件并配置路由信息 <br>
    注意children的取值是数组，子路由的路径为相对路径； <br>
（3）在Hi.vue页面添加router-view标签，用于子模块的显示； <br>
（4）在App.vue界面添加两个路由router-link标签，注意to属性的配置； <br>

    Q3：子路由的实际运用场景？


第三讲 vue-router如何传递参数
----
name的用途，一种作用是传参，一种作用是在传参时起到名称作用。 <br>
（1）路由文件中，可使用name属性进行参数设置，在模板文件中用$route.name取值 <br>
（2.1）在启动页App.vue中，利用v-bind指令绑定属性to，属性值为对象的形式：第一个参数为name，一定要与路由router/index.js 中配置的name属性保持一致；第二个参数为params，以对象形式传递的参数；

    eg.   <router-link :to="{name:'hi1', params:{username:'yy', id:'666'}}">Hi1</router-link>  
    
（2.2）在模板页Hi1.vue中，利用 $route.name // $route.params 进行参数的绑定和展示 

    eg.    <h1>{{ msg }} - {{$route.params.username}}-{{$route.params.id}}</h1>
    
    
