import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Buttons from '@/components/Buttons'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: HelloWorld },
    { path: '/buttons', name: 'Buttons', component: Buttons },
    { path: '/header', name: 'Header', component: Header },
  ]
})
