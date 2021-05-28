<template>
  <div class="standard-width">
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

        <MoleculesInputIncrement @changeAmount="changeAmount(product.productId, ...arguments)">
          {{ product.amount }}
        </MoleculesInputIncrement>
      </div> -->
      <div class="GratisFragt">
        <h2>GRATIS FRAGT PÅ ALLE KØB</h2>
      </div>
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
              <MoleculesInputIncrement @changeAmount="changeAmount(product.productId, product.sizeId, ...arguments)">
                {{ product.amount }}
              </MoleculesInputIncrement>
            </td>

            <td>
              {{ product.price }}
            </td>

            <td>
              {{ parseInt(product.price) * parseInt(product.amount) }}
            </td>

            <td>
              <a @click="removeProduct(product.productId, product.sizeId)">
                <i class="fas fa-trash-alt"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <hr />
    <h2>Dine oplysninger</h2>
    <div class="forms">
      <div class="form">
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="name">Navn</label>
            <input v-model="name" type="text" placeholder="Navn" name="name" required />
          </div>

          <div>
            <label for="email">Email</label>
            <input v-model="email" type="email" placeholder="Email" name="email" required />
          </div>

          <div>
            <label for="adress">Adresse</label>
            <input v-model="address" type="text" placeholder="Addresse" name="address" required />
          </div>

          <div>
            <label for="city">By</label>
            <input v-model="city" type="text" placeholder="By" name="city" required />
          </div>

          <div>
            <label for="postalCode">Postnummer</label>
            <input
              v-model="postalCode"
              type="number"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="4"
              placeholder="Postnummer"
              name="postalCode"
              required
            />
          </div>

          <AtomsButton class="ctaBtn">Checkout</AtomsButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '@/helpers/strapi-media';

import { loadStripe } from '@stripe/stripe-js';

export default {
  name: 'Checkout',
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
      // const baseUrl = 'https://hayat-plakater-backend-irztg.ondigitalocean.app/';

      const response = await this.$http.$post(`${process.env.storeUrl}orders`, {
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
      console.log(stripePromise);

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
.forms {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}
.form {
  display: flex;
  justify-content: center;
  width: 500px;
  background-color: #f0f0f0;
  margin: 1rem 0;
  padding: 2rem;
}
label {
  font-weight: 900;
}
input[type='text'],
input[type='number'],
input[type='email'] {
  width: 100%;
  max-width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-size: 1rem;
}
input:focus {
  outline: 3px solid #000;
  -moz-outline-radius: 25px;
}
.ctaBtn {
  margin: 1rem 0;
  width: 100%;
  transition: 0.3s;
  color: #000;
  font-size: 1rem;
  text-transform: uppercase;

  &:hover {
    color: #fff;
    background-color: #000;
  }
}
.GratisFragt {
  margin: 3rem 0;
  text-align: center;
  background-color: #d8d8d8;
}

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
    a {
      cursor: pointer;
    }
  }
}
</style>
