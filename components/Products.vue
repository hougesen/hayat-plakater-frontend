<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>

    <div v-else class="product-list">
      <div v-for="product in products" :key="product.id" class="product">
        <nuxt-link :to="`/products/${product.slug}`">
          <img alt="" class="product-image" :src="`${getStrapiMedia(product.image[0].url)}`" />
          <h1 class="product-title">{{ product.name }}</h1>

          <p>Fra {{ product.poster_price_sizes[0].price }}kr</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '@/helpers/strapi-media';
export default {
  name: 'Products',
  props: {
    products: {
      type: Array,
      default: null,
    },
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      price: 0,
    };
  },
  computed: {
    getProducts() {
      return this.products;
    },
  },
  methods: {
    getStrapiMedia,
  },
};
</script>

<style scoped lang="scss">
.product-list {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem;
  .product {
    border: 1px solid red;
    text-align: center;
    width: 100%;
    .product-image {
      width: 100%;
    }
  }
}
</style>
