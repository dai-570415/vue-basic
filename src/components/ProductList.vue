<template>
  <div class="container">
      <h1>商品一覧</h1>
      <div class="product-list">
        <div class="product-item" v-for="listItem in listItems" :key="listItem.id">     
          <div class="product-image">
            <router-link :to="`/product/${ listItem.id }`">
              <img :src="listItem.image">
            </router-link>
          </div>
          <div class="product-text">
            <div class="product-name">
              <router-link :to="`/product/${ listItem.id }`">{{ listItem.name }}</router-link>
            </div>
            <div class="product-content">{{ listItem.content }}</div>
            <div class="price-icon"><router-link :to="`/product/${ listItem.id }`">{{ listItem.price }} price</router-link></div>
          </div>
        </div>
      </div>
      <a
        href="javascript:void(0)"
        class="list-item-button"
        v-if="(listItems.length - count) >= 0"
        type="button"
        @click="isMore"
      >
          もっと見る
      </a>
  </div>
</template>

<script>
import products from '@/api/products.js'

export default {
  data () {
    return {
      count: 3
    }
  },
  computed: {
    listItems() {
        const list = products.fetch()
        return list.slice(0, this.count)
    }
  },
  methods: {
    isMore() {
        this.count += 3
    }
  },
}
</script>

<style scoped>
  h1 {
    margin: 0 0 50px 0;
  }
  .product-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .product-list .product-item {
    width: 250px;
    margin: 0 10px 40px;
    border: 1px solid #ccc;
    background: #fff;
  }
  .product-list .product-item .product-image img {
    width: 100%;
    vertical-align: bottom;
    transition: .5s;
  }
  .product-list .product-item .product-image img:hover {
    opacity: .5;
  }
  .product-list .product-item .product-text {
    padding: 20px;
  }
  .product-list .product-item .product-text .product-name {
    font-size: 18px;
    margin: 0 0 10px 0;
    transition: .5s;
  }
  .product-list .product-item .product-text .product-name:hover {
    opacity: .5;
  }
  .product-list .product-item .product-text .product-content {
    font-size: 13px;
    line-height: 20px;
    text-align: justify;
  }
  .product-list .product-item .product-text .price-icon a {
    display: block;
    font-size: 12px;
    text-align: center;
    line-height: 14px;
    color: #fff;
    margin: 15px 0 0 0;
    padding: 10px;
    border: 1px dashed #ccc;
    background: #e25193;
    transition: .5s;
  }
  .product-list .product-item .product-text .price-icon a:hover {
    color: #e25193;
    border: 1px dashed #e25193;
    background: #fff;
  }
@media screen and (max-width:768px) {
  .product-list .product-item {
    width: 100%;
    margin: 0 auto 40px;
  }
}
</style>