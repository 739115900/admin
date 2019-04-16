import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Login.vue'
// import {pubilc} from '@/assets/js/config'
Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'home',
      component: ()=>import('./views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]

const router = new Router({
    // mode: 'history',
  // base: pubilc.pubilcPath,
    routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    
      // if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      //     next();
      // }
      // else {
      //     next({
      //         path: '/login',
      //         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      //     })
      // }
  }
  else {
      next();
  }
})

export default router