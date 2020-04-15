<template>
  <div class="container">
    <h2>Sign up</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <div class="auth-button" @click="signUp">無料登録する</div>
    <router-link to="/signin">すでにアカウントをお持ちの方</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Create account: ', user.email)
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    font-size: 14px;
    color: #e25193;
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
    border: 1px solid #e25193;
    background: #e25193;
    transition: .5s;
  }
  .auth-button:hover {
    color: #e25193;
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