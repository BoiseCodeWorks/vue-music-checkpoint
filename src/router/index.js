import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Itunes from 'components/Itunes'
import MyTunes from 'components/MyTunes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/itunes',
      name: 'itunes',
      component: Itunes
    },
    {
        path: '/itunes/mytunes',
        name: 'mytunes',
        component: MyTunes
    }
  ]
})