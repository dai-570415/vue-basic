<template>
  <div class="container">
    <div class="product-item">
      <h1>{{ detail.name }}</h1>
      <div class="product-price">{{ detail.price }} price</div>
      <img :src="detail.image">
      <div class="product-content">{{ detail.content }}</div>
    </div>
    <router-link to="/product">&lt; Back</router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: { id: Number },
    computed: {
      ...mapGetters('product', ['detail']),
    },
    watch: {
      id: {
        handler() {
          this.$store.dispatch('product/load', this.id)
        }, 
        immediate: true
      }
    },
    beforeDestroy() {
      this.$store.dispatch('product/destroy')
    }
  }
</script>

<style scoped>
  h1 {
    margin: 0;
  }
  .product-item {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }
  .product-item .product-price {
    font-size: 12px;
    margin: 0 0 30px 0;
  }
  .product-item img {
    width: 100%;
    height: 275px;
    object-fit: cover;
    margin: 0 auto 10px;
    padding: 10px;
    border: 1px solid #ccc;
    background: #fff;
  }
  .product-item .product-content {
    font-size: 14px;
    text-align: justify;
    margin: 0 0 50px 0;
  }
</style>