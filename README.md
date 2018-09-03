

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

（3）别名请不要用在path为'/'中，如下代码的别名是不起作用的：

    {
      path: '/',
      component: Hello,
      alias:'/home'
    }


第八讲 vue-router路由过渡动画
---
    transition 及 transition-group 标签的使用

（1）用transition标签，将router-view包裹起来，设置name为fade（动画名称）  <br>
（2）组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：

       fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
       fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
       fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
       fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。
从上面四个类名可以看出，fade-enter-active和fade-leave-active在整个进入或离开过程中都有效，所以CSS的transition属性在这两个类下进行设置。 <br>
于是我们就在App.vue页面里加入四种CSS样式效果，并利用CSS3的transition属性控制动画的具体效果。代码如下：

        .fade-enter {
          opacity:0;
        }
        .fade-leave{
          opacity:1;
        }
        .fade-enter-active{
          transition:opacity .5s;
        }
        .fade-leave-active{
          opacity:0;
          transition:opacity .5s;
        }
（3）为transition标签设置过渡模式mode，先离开再过渡进入

        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>


第九讲 vue-router的模式和404错误页导航
---
（1）在router/index.js中，设置：

        mode: "history" ，则浏览器路由为干净的地址；
        mode: "hash"（默认），则浏览器路由会带上'/#/'，不符合用户的浏览习惯；
（2）配置错误页ErrorPage.vue，在路由文件router/index.js中设置:

        {
           path:'*',
           component:Error
        }
，则当浏览器根据路由地址找不到文件时，会自动跳转到404错误页。


第十讲
---
（1）路由的钩子选项既可以写在router/index.js文件中，也可以写在组件模板中。 <br>
（2）在路由配置中编写钩子函数， 用于检测参数或者路径是否正确，利用if/else判断跳转的开关，从而在路由进入页面之前为其设置了一道防线。
但是在路由文件中，只能写“进入”的钩子函数，不能写“离开”的钩子函数。

        {
            path: '/params/:newsId(\\d+)/:newsTitle',
            component: Params,
            beforeEnter: (to, from, next) => {
                console.log(to);
                console.log(from);
                next(true);  //允许向下跳转
                /* next(false)  或 不写next() 则不执行跳转的方法 */
                //next({path: '/'});  //会跳转到指定的目录
            }
        }

（3）“离开”的钩子函数需要在组件模板中配置。尤其要注意！ **忽略next()会导致界面跳转无响应！**    <br>
关于模板中的钩子函数，可以 结合vuex 实现界面跳转参数的传递和存储。

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


第十一讲 编程式导航
（1）我们以往编写的路由跳转都是在html中利用router-link标签的to属性进行跳转，类似于a标签的href属性；   <br>
如果我们在js处理的过程中根据业务需要进行界面跳转，那么我们可以利用 **this.$router.go(-1/1)，或者this.$router.push('/hi')** ，进行导航的前进、后退以及界面跳转；

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





