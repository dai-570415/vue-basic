import Vue from 'vue'
import store from '@/store.js'
import App from './App'
import router from './router'
import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// 認証関連
import firebase from 'firebase'
// Firebaseで新たにプロジェクトを作ったら以下を差し替え
Vue.config.productionTip = false
let firebaseConfig = {
  apiKey: "Your_Code",
  authDomain: "Your_Code",
  databaseURL: "Your_Code",
  projectId: "Your_Code",
  storageBucket: "Your_Code",
  messagingSenderId: "Your_Code",
  appId: "Your_Code",
  measurementId: "Your_Code"
};
firebase.initializeApp(firebaseConfig);
// ここまで差し替え

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
