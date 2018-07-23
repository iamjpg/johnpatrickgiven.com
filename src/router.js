import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Post from './views/Post.vue'
import Page from './views/Page'
import Tag from './views/Tag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: Post
    },
    {
      path: '/page/:slug',
      name: 'page',
      component: Page
    },
    {
      path: '/tags/:tag',
      name: 'tag',
      component: Tag
    }
  ]
})
