import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user.js'
import product from '@/store/product.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    product
  },
})
export default store