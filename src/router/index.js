import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = ()=> import('@/Views/home/Home.vue');
const Login = ()=> import('@/Views/login/Login.vue');

Vue.use(VueRouter);
const routes = [
  {
    path:'/login',
    meta:{
      title:'登录'
    },
    component:Login
  },
  {
    path:'/index',
    meta:{
      title:'首页'
    },
    component:Home
  },
  {
    path:'/about',
    meta:{
      title:'关于'
    },
    component:(resolve) => require(['@/views/about.vue'],resolve)
  },
  {
    path:'/user/:id',
    meta:{
      title:'个人主页'
    },
    component: (resolve) => require(['@/views/user.vue'],resolve)
  },
  {
    path:'*',
    redirect:'/index'
  },
]

const RouterConfig = {
  routes:routes,
  mode:'history'
};
const router = new VueRouter(RouterConfig);

/*校验是否登录，如果登录了就访问，否则跳转到登录页*/
router.beforeEach((to,from,next) =>{
  if (window.localStorage.getItem('token')){
    next();
  } else{
    next('/login');
  }
});


router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title;
  next();
});
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

export default router
