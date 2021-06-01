<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>

    <div v-else class="product-list">
      <div v-for="product in products" :key="product.id" class="product">
        <nuxt-link :to="`/produkt/${product.slug}`">
          <img
            class="product-image"
            :src="`${getStrapiMedia(product.image[0].url)}`"
            :alt="`Plakat ${product.name} - Hayat Plakater`"
          />
          <h1 class="product-title">{{ product.name }}</h1>

          <p class="product-text">Fra {{ product.poster_price_sizes[0].price }}kr</p>
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

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem;
  .product {
    text-align: center;
    width: 100%;
    margin: 1rem 0;
    a {
      text-decoration: none;
    }
    .product-image {
      width: 100%;
    }
    .product-title,
    .product-text {
      text-align: left;
      color: var(--default-text-color);
      text-decoration: none;
    }
    .product-text {
      font-size: 1.25rem;
    }
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
