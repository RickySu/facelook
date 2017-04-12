import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Albums from '@/components/Albums'
import Album from '@/components/Album'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/album/:id',
      name: 'Album',
      component: Album
    }
  ]
})
