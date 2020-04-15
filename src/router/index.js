import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import User from '@/components/User'
import UserList from '@/components/UserList'
import ProductList from '@/components/ProductList'
import Product from '@/components/Product'

// 認証関連
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import firebase from 'firebase'

// お問い合わせフォーム
import Form from '@/components/Form'
import Post from '@/components/Post'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    { 
      path: '/user', 
      component: UserList, 
      name: 'userlist',
    },
    { 
      path: '/user/:id',
      component: User, 
      props: route => ({ id: Number(route.params.id) }),
    },
    { 
      path: '/product', 
      component: ProductList, 
      name: 'productlist',
      meta: { requiresAuth: true }
    },
    { 
      path: '/product/:id',
      component: Product,
      name: 'product',
      props: route => ({ id: Number(route.params.id) }),
      meta: { requiresAuth: true }
    },

    // 認証関連
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },

    // お問い合わせフォーム
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
  ]
})

// 認証関連
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

export default router