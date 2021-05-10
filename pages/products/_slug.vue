<template>
  <div v-if="this.product != null">
    <div class="product-page--grid">
      <div class="product-image">
        <img :src="`${getStrapiMedia(product.image[0].url)}`" alt="" />
      </div>
      <div class="product-information">
        <h1 class="product-title">
          {{ product.name }}
        </h1>

        <form class="product-form">
          <div>
            <label for="size">Vælg størrelse</label>
            <select v-model="priceInfo" name="size">
              <option
                v-for="size in product.poster_price_sizes"
                :key="size._id"
                :value="{
                  sizeId: size._id,
                  price: size.price,
                  size: size.size
                }"
              >
                {{ size.size }}
              </option>
            </select>
          </div>
        </form>

        <p v-if="priceInfo">{{ priceInfo.price }}kr</p>

        <button class="button">
          Læg i kurv
        </button>
      </div>
    </div>
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
    },
    getTheme() {
      return this.theme;
    }
  },

  async mounted() {
    try {
      let path = window.location.pathname.replace("/products/", "");

      this.product = await this.$strapi.$products.find({ slug: path });

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

<style lang="scss" scoped>
.product-page--grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  .product-information {
    display: flex;
    flex-direction: column;

    .product-title {
      justify-items: center;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-content: center;
      align-self: center;
    }
    .product-form {
      align-items: center;
      align-content: center;
      align-self: center;
      display: flex;
      flex-direction: column;
    }
    .product-amount {
      justify-items: center;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-content: center;
      align-self: center;
    }
  }
}
.button {
  border: none;
  font-weight: 700;
  padding: 1rem;
  &--primary {
    background-color: black;
    color: white;
  }

  &--secondary {
    background-color: lighten(black, 90);
  }

  &--nordic {
    background-color: #157fec;
    color: white;
  }
  &--nature {
    background-color: greenyellow;
    color: white;
  }
}
</style>
