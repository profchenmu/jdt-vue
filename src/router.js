import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/components/Home'
// import DemoRouter from '../Demo/router'
// import Demo from './Demo/demo'

Vue.use(VueRouter)

const routers = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./Demo/demo'),
      // ,
      children: [
        {
          path: 'demoIn',
          name: 'DemoIn',
          component: () => import('./Demo/demoIn')
        }
      ]
    }
  ]
})

export default routers
