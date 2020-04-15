<template>
  <div class="container">
    <div class="user-item">
      <img :src="detail.image">
      <h1>{{ detail.name }}</h1>
      <div class="user-content">{{ detail.content }}</div>
    </div>
    <router-link to="/user">&lt; Back</router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: { id: Number },
    computed: {
      ...mapGetters('user', ['detail']),
    },
    watch: {
      id: {
        handler() {
          this.$store.dispatch('user/load', this.id)
        }, 
        immediate: true
      }
    },
    beforeDestroy() {
      this.$store.dispatch('user/destroy')
    }
  }
</script>

<style scoped>
  .user-item {
    width: 50%;
    margin: 0 auto;
  }
  .user-item img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }
  .user-item .user-content {
    font-size: 14px;
    margin: 0 0 50px 0;
  }
  @media screen and (max-width:768px) {
    .user-item {
      width: 100%;
    }
    .user-item .user-content {
      text-align: justify;
    }
  }
</style>