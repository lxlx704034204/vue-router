import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'


Vue.use(Router)                 //vue 全局使用Router

export default new Router({
routes: [                       //配置路由，这里是数组的形式
    /*{                           //每一个链接都是一个对象
      path: '/',                 //连接路径
      name: 'HelloWorld',        //路由名称
      component: HelloWorld     //对应的组件模板
    },{
      path: '/hi',
      component: Hi,
      children: [
        { path: '/',name: 'Hello/Hi', component: Hi},
        { path: 'hi1',name: 'hi1', component: Hi1},
        { path: 'hi2',name: 'Hello/Hi/Hi2', component: Hi2},
        ]
    }*/
  {
      path: '/',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      }
  },{
      path: '/hi',
      components: {
        default: Hi,
        left: Hi2,
        right: Hi1
      }
  }
  ]
})
