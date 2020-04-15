<template>
  <div class="container">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <div class="auth-button" @click="signIn">サインイン</div>
    <router-link to="/signup">アカウント登録はこちらから</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('Success!')
          this.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    font-size: 14px;
    color: #42b983;
  }
  .container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center
  }
  input {
    width: 40%;
    margin: 10px 0 5px;
    padding: 10px;
  }
  .auth-button {
    font-size: 14px;
    color: #fff;
    width: 40%;
    margin: 30px 0 10px;
    padding: 10px;
    border: 1px solid #42b983;
    background: #42b983;
    transition: .5s;
  }
  .auth-button:hover {
    color: #42b983;
    background: #fff;
  }
  @media screen and (max-width:768px) {
    .container {
      width: 100%;
    }
    input {
      width: 70%;
    }
    .auth-button {
      width: 70%;
    }
  }
</style>