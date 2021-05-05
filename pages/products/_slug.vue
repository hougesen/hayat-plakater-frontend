<template>
  <div v-if="this.product != null">
    <img :src="`${getStrapiMedia(product.image[0].url)}`" alt="" />

    <h1>
      {{ product.name }}
    </h1>

    <p>
      {{ product.description }}
    </p>

    <form>
      <label for="amount">Antal</label>
      <input type="number" v-model="amount" min="1" max="99" />

      <label for="size">Vælg størrelse</label>
      <select v-model="priceInfo" name="size">
        <option
          v-for="size in product.poster_price_sizes"
          :key="size._id"
          :value="{ sizeId: size._id, price: size.price, size: size.size }"
        >
          {{ size.size }}
        </option>
      </select>
    </form>

    <p v-if="priceInfo">{{ totalPrice }}kr</p>

    <button type="button" @click="addToShoppingCart(product)">
      Læg i kurv
    </button>
  </div>
  <div v-else>
    {{ error }}
  </div>
</template>

<script>
import { getStrapiMedia } from "@/helpers/strapi-media";

export default {
  data() {
    return {
      product: null,
      error: null,
      amount: 1,
      priceInfo: {
        // Hardcoded to be the first element
        sizeId: "609033df6f5a97b74a65f520",
        size: "12x18",
        price: 100
      }
    };
  },

  computed: {
    totalPrice() {
      return this.amount * this.priceInfo.price;
    }
  },

  async mounted() {
    try {
      this.product = await this.$strapi.$products.find({
        slug: this.$route.params.slug
      });
      this.product = this.product[0];
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    getStrapiMedia,
    addToShoppingCart(product) {
      console.log(product);

      const item = {
        amount: this.amount,
        productId: product.id,
        name: product.name,
        sizeId: this.priceInfo.sizeId,
        size: this.priceInfo.size,
        price: this.priceInfo.price
      };

      console.log(item);

      this.$store.commit("addToShoppingCart", item);
    }
  }
};
</script>

<style lang="scss" scoped></style>
