<template>
  <div class="container">
      <div class="firebase-account">
        <div v-if="email">{{ email }}</div>
        <div v-else class="error">Guest</div>
      </div>

      <h1>Example User</h1>
      <div class="user-list">
        <div class="user-item" v-for="item in list" :key="item.id">
          <router-link :to="`/user/${ item.id }`">
          <div class="user-thumbnail"><img :src="item.image"></div>
          <div class="user-name">
            {{ item.name }}
          </div>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import products from '@/api/users.js'

// 認証関連
import firebase from 'firebase'

export default {
  data () {
    return {
      // 認証関連
      email: firebase.auth().currentUser.email,
    }
  },
  computed: {
    list: () => products.fetch()
  }
}
</script>

<style scoped>
  .firebase-account {
    font-size: 14px;
    margin: 5px auto 50px;
  }
  .firebase-url {
    display: block;
    font-size: 10px;
    color: #424242;
  }
  .user-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 14px;
  }
  .user-list .user-item {
    margin: 0 10px 20px;
  }
  .user-list .user-item .user-thumbnail img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
  }
  .user-list .user-item .user-name {
    font-size: 12px;
    color: #424242;
  }
</style>