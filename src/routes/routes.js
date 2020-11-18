import Vue from 'vue'
import VueRouter from 'vue-router';
import Browse from '../components/Browse'
Vue.use(VueRouter)


const routes = [
    { path: '/browse', component: Browse },
    // { path: '/bar', component: Bar }
  ]

  
const router = new VueRouter({
    mode:'history',
    routes // short for `routes: routes`
  })

export default router;