import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const About = () => import(/* webpackChunkName: "about" */ './views/About.vue');
const Post = () => import(/* webpackChunkName: "post" */ './views/Post.vue');
const Page = () => import(/* webpackChunkName: "page" */ './views/Page.vue');
const Tag = () => import(/* webpackChunkName: "tag" */ './views/Tag.vue');

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
