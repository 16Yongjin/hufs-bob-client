import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import Meetups from './views/Meetups.vue'
import Landing from './views/Landing.vue'
import Login from './views/Login.vue'
import CreateMeetup from './views/CreateMeetup.vue'
import PlaceList from './views/PlaceList.vue'
import More from './views/More.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/places',
      name: 'Places',
      component: PlaceList
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/meetups/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

const authRequiredRoutes: { [index:string]: boolean } = {
  Meetups: true,
  Places: true,
  CreateMeetup: true,
  Chat: true,
  More: true
}

const authRequired = (name: string) => authRequiredRoutes[name]

router.beforeEach((to, from, next) => {
  console.log('token', typeof localStorage.getItem('token'))
  console.log('token', store.state.token)
  if (store.state.token) {
    if (to.name === 'Login') next(false)
    else if (to.name === 'Landing') next({ name: 'Meetups' })
    else next()
  } else {
    if (authRequired(to.name || '')) next({ name: 'Login' })
    else next()
  }
})

export default router
