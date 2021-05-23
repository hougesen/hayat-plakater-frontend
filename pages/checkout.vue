<template>
  <div>
    <h1>Kassen</h1>

    <div class="checkout-products">
      <!--       <div
        v-for="(product, index) of getShoppingCart"
        :key="index"
        style="background-color:blue; margin:2rem;"
        class="product"
      >
        <img :src="`${getStrapiMedia(product.image)}`" :alt="product.name" class="product__image" />
        <p>{{ product.name }} - {{ product.size }}</p>

        <InputIncrement @changeAmount="changeAmount(product.productId, ...arguments)">
          {{ product.amount }}
        </InputIncrement>
      </div> -->

      <table class="product-table">
        <thead>
          <tr>
            <td><!-- Product desc --></td>
            <td>Antal</td>
            <td>Pris</td>
            <td>Totalt</td>
            <td>Slet</td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(product, index) of getShoppingCart" :key="index" class="product">
            <td class="product-description">
              <img :src="`${getStrapiMedia(product.image)}`" :alt="product.name" class="product__image" />
              <div>
                <h2>{{ product.name }}</h2>
                <h3>{{ product.size }}</h3>
                {{ product.sizeId }}
              </div>
            </td>

            <td>
              <InputIncrement @changeAmount="changeAmount(product.productId, product.sizeId, ...arguments)">
                {{ product.amount }}
              </InputIncrement>
            </td>

            <td>
              {{ product.price }}
            </td>

            <td>
              {{ parseInt(product.price) * parseInt(product.amount) }}
            </td>

            <td>
              <button @click="removeProduct(product.productId, product.sizeId)">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Navn</label>
        <input type="text" v-model="name" placeholder="Navn" name="name" required />
      </div>

      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" placeholder="Email" name="email" required />
      </div>

      <div>
        <label for="adress">Adresse</label>
        <input type="text" v-model="address" placeholder="Addresse" name="address" required />
      </div>

      <div>
        <label for="city">By</label>
        <input type="text" v-model="city" placeholder="By" name="city" required />
      </div>

      <div>
        <label for="postalCode">Postnummer</label>
        <input type="number" v-model="postalCode" placeholder="Postnummer" name="postalCode" required />
      </div>

      <button type="submit">Checkout</button>
    </form>
  </div>
</template>

<script>
import { getStrapiMedia } from '@/helpers/strapi-media';

import { loadStripe } from '@stripe/stripe-js';

export default {
  name: 'checkout',
  components: {},
  data() {
    return {
      name: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      dataItems: {},
      session: {},
      stripe: {},
      stripePromise: {},
    };
  },

  computed: {
    getShoppingCart() {
      return this.$store.getters.getShoppingCart;
    },
  },

  methods: {
    getStrapiMedia,
    changeAmount(productId, sizeId, e) {
      console.log(`changeAmount(${productId})`);
      console.log(e);

      this.$store.commit('changeProductAmount', {
        productId,
        sizeId,
        e,
      });
    },
    removeProduct(productId, sizeId) {
      this.$store.commit('removeProduct', { productId, sizeId });
    },
    async handleSubmit(e) {
      e.preventDefault();

      // const baseUrl = 'http://localhost:1337/';
      const baseUrl = 'https://hayat-plakater-backend-irztg.ondigitalocean.app/';

      const response = await this.$http.$post(`${baseUrl}orders`, {
        cartDetail: this.$store.getters.getShoppingCart,
        cartTotal: this.$store.getters.getTotalPrice,
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
      });

      // stripe logic
      const stripePromise = loadStripe(
        'pk_test_51ImhvGGzZhtJza9VidZIydizkNx35J8AtdTfxP7ug5lAJnZhuegGEcs95mgRzpMVi5z6EsKYfNjVSxBzLblYsViv00z9CxmUFY',
      );

      const session = response;

      const stripe = await stripePromise;

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      console.log(response);

      if (result.error) {
        this.$nuxt.context.error(result.error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-table {
  width: 100%;
  border-collapse: collapse;
  .product {
    .product-description {
      display: flex;
    }
    img {
      height: 125px;
    }
  }
}
</style>
