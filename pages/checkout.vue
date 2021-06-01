<template>
  <div class="checkout-container standard-width">
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

    <div class="checkout-grid">
      <div class="checkout-order-grid">
        <h1>kassen</h1>
        <div v-for="(product, index) of getShoppingCart" :key="index" class="order-grid">
          <div
            class="order-image"
            :style="`background-image: url(${getStrapiMedia(product.image)})`"
            :alt="product.name"
          ></div>
          <div class="order-info">
            <h2>Navn: {{ product.name }}</h2>
            <h3>Størrelse: {{ product.size }}</h3>
            <h3>Pris: {{ product.price }}</h3>
            <h3>Totalpris: {{ parseInt(product.price) * parseInt(product.amount) }}</h3>
          </div>
          <div class="order-trash">
            <MoleculesInputIncrement @changeAmount="changeAmount(product.productId, product.sizeId, ...arguments)">
              {{ product.amount }}
            </MoleculesInputIncrement>
          </div>
          <div class="order-add-or-remove">
            <a @click="removeProduct(product.productId, product.sizeId)">
              <i class="fas fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>
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
  </div>
</template>

<script>
import { getStrapiMedia } from '@/helpers/strapi-media';

import { loadStripe } from '@stripe/stripe-js';

export default {
  name: 'Checkout',
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
  head() {
    return {
      title: `Indkøbskurv - Hayat Plakater`,
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
      this.$store.commit('changeProductAmount', {
        productId,
        sizeId,
        e,
      });
    },
    removeProduct(productId, sizeId) {
      this.$store.commit('removeProduct', { productId, sizeId });
    },
    async handleCheckout() {
      // Initate Stripe public key
      const stripe = await loadStripe(process.env.STRIPE_PK);

      // Send request to backend
      await this.$http
        .$post(`${process.env.storeUrl}orders`, {
          cartDetail: this.$store.getters.getShoppingCart,
          cartTotal: this.$store.getters.getTotalPrice,
          name: this.name,
          email: this.email,
          address: this.address,
          city: this.city,
          postalCode: this.postalCode,
        })
        .then((response) => {
          // Returns the backend response (Stripe session id)
          return response;
        })
        .then((session) => {
          // Redirect to Stripe checkout
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then((result) => {
          // Alert the customer if an error occurs
          if (result.error) {
            alert(result.error.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.checkout-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.GratisFragt {
  margin: 3rem 0;
  text-align: center;
  background-color: #d8d8d8;
}

.checkout-order-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  padding: 1rem 0;
}
.order-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: minmax(100px, auto);
  .order-image {
    grid-column: 1 / 3;
    grid-row: 1/ 4;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .order-info {
    background-color: #f0f0f0;
    grid-column: 3 / 5;
    grid-row: 1/ 3;
    padding: 1rem;
  }
  .order-trash {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    grid-column: 3 / 3;
    grid-row: 3/ 3;
  }
  .order-add-or-remove {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    grid-column: 4 / 4;
    grid-row: 3/ 3;
    cursor: pointer;
  }
}
.forms {
  display: flex;
  padding: 0 1rem;
}
.form {
  position: fixed;
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
</style>
