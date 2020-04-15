<template>
  <div class="container">
    <h1><span class="vue-color">Vue.js</span> × <span class="firebase-color">Firebase</span></h1>
    <img src="@/assets/img/vue.png" class="vue-logo" alt="Vue.js">
    <img src="@/assets/img/firebase.png" class="firebase-logo" alt="Firebase">
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <h2>Firebase</h2>
    <ul>
      <li><a href="https://firebase.google.com/" target="_blank">Firebase</a></li>
    </ul>

    <!-- 認証関連 -->
    <div class="auth" v-if="email">
      <div class="auth-button"><a @click="signOut">サインアウト</a></div>
    </div>
    <div class="auth" v-else>
      <div class="auth-button"><router-link to="/signin">サインイン</router-link></div>
    </div>
    <!-- 認証関連 -->

  </div>
</template>

<script>
  // 認証関連
  import firebase from 'firebase'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        // 認証関連
        email: firebase.auth().currentUser.email
      }
    },
    methods: {
      // 認証関連
      signOut: function () {
        firebase.auth().signOut().then(() => {
          this.$router.push('/signin')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-logo,
  .firebase-logo {
    margin: 0 20px;
  }
  .vue-logo {
    width: 150px;
  }
  .firebase-logo {
    width: 120px;
  }
  h1 {
    color: #424242;
  }
  h1 .vue-color { color: #42b983 }
  h1 .firebase-color { color: #ffd104 }
  h2 {
    margin: 30px 0 10px 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  .auth .auth-button a {
    color: #42b983;
    transition: .5s;
  }
  .auth .auth-button a:hover {
    opacity: .5;
  }

  @media screen and (max-width:768px) {
    .vue-logo {
      width: 60px;
    }
    .firebase-logo {
      width: 50px;
    }
  }
</style>
