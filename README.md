

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
（2）在router/index.js 中引用组件并配置路由信息：注意children的取值是数组，子路由的路径为相对路径； <br>
（3）在Hi.vue页面添加router-view标签，用于子模块的显示； <br>
（4）在App.vue界面添加两个路由router-link标签，注意to属性的配置； <br>

    Q3：子路由的实际运用场景？


第三讲 vue-router如何传递参数
----
name的用途，一种作用是传参，一种作用是在传参时起到名称作用。 <br>
（1）路由文件中，可使用name属性进行参数设置，在模板文件中用$route.name取值 <br>
（2.1）在启动页App.vue中，利用v-bind指令绑定属性to，属性值为对象的形式：第一个参数为name，一定要与路由router/index.js 中配置的name属性保持一致；第二个参数为params，以对象形式传递的参数；

    eg.    <router-link :to="{name:'hi1', params:{username:'yy', id:'666'}}">Hi1</router-link>  
    
（2.2）在模板页Hi1.vue中，利用 $route.name // $route.params 进行参数的绑定和展示 

    eg.    <h1>{{ msg }} - {{$route.params.username}}-{{$route.params.id}}</h1>
    
    
第四讲 vue-router单页面多路由区域操作
---
    在实际的开发需求中，我们常常遇见这样的情况：在一个页面里我们有2个以上<router-view>区域，我们通过配置路由的js文件，来操作这些区域的内容。 
可以这样简单的理解，我们有多个公共的组件，例如Header、Footer、Menu、Main1、Main2 等将一个页面划分为多个功能区，在功能转换（菜单切换）时，利用路由的js文件中，components属性配置多种组合，path属性配置对应的链接路径，这样就可以通过模块复用提高开发效率。

App.vue文件

    <router-view/>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>
Router/indx.js文件

    import Vue from 'vue'
    import Router from 'vue-router'
    import Hello from '@/components/Hello'
    import Hi1 from '@/components/Hi1'
    import Hi2 from '@/components/Hi2'
    
    Vue.use(Router)
    export default new Router({
      routes: [
        {
          path: '/',
          components: {
            default:Hello,
            left:Hi1,
            right:Hi2
          }
        },{
          path: '/Hi',
          components: {
            default:Hello,
            left:Hi2,
            right:Hi1
          }
        }
      ]
    })


第五讲 vue-router利用url传递参数
---
（1）在路由文件Router/index.js中配置参数信息

    {
        path: '/params/:newsId/:newsTitle',
        component: Params
    }
（2）在模板页Params.vue中绑定并展示参数

    <p>newsId: {{$route.params.newsId}}</p>
    <p>newsTitle: {{$route.params.newsTitle}}</p>
（3）在启动页或者调用的链接中传递变量值

    <router-link to="/params/666/this is anthor method of parameter missing">另一种参数传递的方式</router-link>
（4）注意：可以在参数名称后面用括号定义参数的正则规范，例如：

    {
        path: '/params/:newsId(\\d+)/:newsTitle',
        component: Params
    }


第六讲 vue-router的重定向-redirect
---
（1）在路由文件Router/index.js中利用redirect属性，配置路由的重定向信息

    {
        path: '/goParams',
        redirect: '/Hi'
    }
   在链接中调用goParams跳转到指定页面Hi

    <router-link to="/goParams">Redirect 重定向</router-link>
（2）如果想带参数跳转到指定界面，则需要按照原有路由的参数定义规则传参；否则界面不能正确跳转

    {
        path: '/params/:newsId(\\d+)/:newsTitle',
        component: Params
    },{
        path: '/goParams/:newsId(\\d+)/:newsTitle',
        redirect: '/params/:newsId(\\d+)/:newsTitle'
    }
   在链接中调用时也是如此

    <router-link to="/goParams/168/redirect to params page">Redirect 重定向</router-link>  
    
    
第七讲 vue-router别名的使用-alias
---
（1）在Router/index.js中配置alias属性

    {
        path: '/hi',
        component: Hi,
        alias: '/yy'
    }
在链接中直接调用别名路径

    <router-link to="/yy">alias 别名</router-link>
（2）注意**别名alias和重定向redirect的区别**：   <br>
  别名：为原有的路由地址 **设置** 新的链接路径，调用时**url显示新的地址**<br>
  重定向：是将新的路由地址 **指向** 原有的路由地址， 调用时**url显示原有地址**
