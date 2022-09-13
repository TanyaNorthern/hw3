import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../../pages/Dashboard'
import About from '../../pages/About'
import NotFound from '../../pages/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Dashboard,
      children: [
        {
          path: 'add/payment/*',
          name: 'addPayment',
          component: Dashboard
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      // path: '/about',
      path: '/about*',
      name: 'about',
      component: About
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFound
    }
    {
      path: '*',
      redirect: {
        name: 'notfound'
      }
    }
  ]
})

const titles = {
  dashboard: 'Dashboard',
  about: 'About',
  notfound: 'Not Found'
}

router.afterEach((to, from) => {
  document.title = titles[to.name]
})

export default router
