import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'


Vue.use(Router)                 //vue 全局使用Router

export default new Router({
routes: [                       //配置路由，这里是数组的形式
    {                            //每一个链接都是一个对象
      path: '/',                 //连接路径
      name: 'HelloWorld',        //路由名称
      component: HelloWorld     //对应的组件模板
    },{
      path: '/hi',
      name: 'Hi',
      component: Hi
    }
  ]
})
