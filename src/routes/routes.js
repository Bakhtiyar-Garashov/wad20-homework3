import Vue from 'vue'
import VueRouter from 'vue-router';
import Browse from '../components/Browse'
import Posts from '../components/Posts'
Vue.use(VueRouter)

// add your routes here
const routes = [
  { path: '/browse', component: Browse },
  { path: '/', component: Posts }
]


const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router;