import Vue from 'vue'
import VueRouter from 'vue-router';
import Browse from '../components/Browse'
import Posts from '../components/Posts'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
Vue.use(VueRouter)

// add your routes here
const routes = [
  { path: '/browse', components:{default:Browse,nav:Navbar} },
  { path: '/', components:{default:Posts,nav:Navbar} },
  { path: '/login', component:Login}
]


const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router;