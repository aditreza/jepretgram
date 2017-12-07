import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import DetailPhoto from '@/components/DetailPhoto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children: [
        {
          path: '',
          name: 'MainPage',
          component: MainPage
        }, {
          path: '/photo/:id',
          component: DetailPhoto,
          props: true
        }
      ]
    }
  ]
})
