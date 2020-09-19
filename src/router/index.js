import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /*
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../views/About.vue')
},
  */
  {
    path: '/tweet',
    component: () => import('../views/Tweet.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/SimpleTweetPage.vue'),
        props: {
          title: 'えぬTweetわい',
        },
    name: 'Tweet',
      },
      {
        path: 'cafe',
        component: () => import('../components/CafeTweetPage.vue'),
        props: {
          title: 'えぬかふぇさんわい',
        },
      },
      {
        path: 'halo',
        component: () => import('../components/HaloTweetPage.vue'),
        props: {
          title: 'えぬへいろうさんわい',
        },
      },
    ]

  },
  {
    path: '/random',
    name: 'Random',
    component: () => import('../views/Random.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
