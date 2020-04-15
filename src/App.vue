<template>
  <div id="app">
    <div class="header">
      <ul>
        <li><router-link to="/">Vue × Firebase</router-link></li>
        <li><router-link to="/user">ユーザー</router-link></li>
        <li><router-link to="/product">商品一覧</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
  // 認証関連
  import firebase from 'firebase'

  export default {
    name: 'App'
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2 {
    font-weight: normal;
    margin: 0 0 15px 0;
  }
  a {
    text-decoration: none;
    color: #42b983;
  }
  ul li {
    list-style: none;
  }
  .header {
    width: 100%;
    height: 90px;
    border-bottom: 1px dashed #ccc;
    background: rgba(255, 255, 255, .9);
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
  }
  .error {
    color: #e25193;
  }
  .header ul {
    top: 30px;
    left: 30px;
    position: fixed;
  }
  .header ul li {
    display: inline-block;
    font-size: 14px;
    margin: 0 0 0 10px;
  }
  .router-link-exact-active {
    color: #e25193;
  }
  .auth {
    font-size: 14px;
    color: #696969;
    top: 32px;
    right: 30px;
    position: fixed;
    z-index: 1;
  }
  .container {
    text-align: center;
    width: 75%;
    margin: 150px auto;
  }
</style>
