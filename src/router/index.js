import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Buttons from '@/components/Buttons'
import Header from '@/components/Header'
import Tabs from '@/components/Tabs'
import Forms from '@/components/Forms'
import Headings from '@/components/Headings'
import Breadcrumbs from '@/components/Breadcrumbs'
import Lists from '@/components/Lists'
import Typeography from '@/components/Typeography'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: HelloWorld },
    { path: '/buttons', name: 'Buttons', component: Buttons },
    { path: '/header', name: 'Header', component: Header },
    { path: '/tabs', name: 'Tabs', component: Tabs },
    { path: '/forms', name: 'Forms', component: Forms },
    { path: '/headings', name: 'Headings', component: Headings },
    { path: '/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
    { path: '/lists', name: 'Lists', component: Lists },
    { path: '/typeography', name: 'Typeography', component: Typeography },
  ]
})
