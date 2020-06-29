import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Gudianxiaoshuo from '@/components/Gudianxiaoshuo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'Hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Gudianxiaoshuo',
      component: Gudianxiaoshuo
    }
  ]
})
