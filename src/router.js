import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import HelloWorld from '@/components/HelloWorld'
import reminder from '@/components/reminder'
import home from '@/components/home'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/hell', name: 'HelloWorld', component: HelloWorld },
    { path: '/reminder', name: 'reminder', component: reminder },
    { path: '/', name: 'home', component: home },
    
  ]
})