

vue-router 学习笔记

本质：vue-router 是SPA（单页应用）的路径管理器，再通俗的说，它就是我们WebApp的链接路径管理系统。
缘由：vue制作的都是单页应用，只有一个主要的index.html页面，所以无法用a标签链接跳转，只能用vue-router进行管理。

第一讲 vue-router的入门
    在引用导航链接时，语法为： <router-link to="/">[显示字段]</router-link>
to：是我们的导航路径，需要填写的是在router/index.js文件里配置的path值，如果要导航到默认的首页只需要写成"/"
显示字段：就是我们要展示给用户的导航标签名称，例如：首页、产品展示等等

    Q1：组件 Hi.vue 和路由 index.js 文件中的name属性的用处是什么呢？
    Q2：注意 router-link标签 和 router-view标签 的区别
