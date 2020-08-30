import Vue from 'vue'
import VueRouter from 'vue-router'
//导入Login组件
import Login from '../components/Login.vue'
//导入Home组件
import Home from '../components/Home.vue'


Vue.use(VueRouter)

const routes = [
  //路径为/时使用redirect进入/login路径
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  比如强制跳转到login路径

  // 如果用户访问的登录页，直接放行
  if (to.path === '/login') return next()
  // 从 sessionStorage 中获取到 保存的 token 值
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token，强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})


export default router
