<template>
  <div class="checkout-container standard-width">
    <div class="checkout-grid">
      <h1>Indkøbskurv</h1>
      <h2 v-if="getShoppingCart.length < 1">Din indkøbsvogn er tom.</h2>
      <div v-else class="checkout-order-grid">
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

      <div class="form">
        <form @submit.prevent="handleCheckout">
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
.checkout-order-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
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

.form {
  display: flex;

  margin: 2rem 0;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 10px;
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
  outline: 3px solid var(--black);
  -moz-outline-radius: 25px;
}
.ctaBtn {
  margin: 1rem 0;
  width: 100%;
  transition: 0.3s;
  color: var(--black);
  font-size: 1rem;
  text-transform: uppercase;

  &:hover {
    color: var(--white);
    background-color: var(--black);
  }
}

@media only screen and (max-width: 1400px) {
  .checkout-order-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .order-grid {
    grid-auto-rows: minmax(300px, auto);
    grid-template-columns: repeat(3, 1fr);
    .order-image {
      height: auto;
      grid-column: 1 / 3;
      grid-row: 1/ 4;
    }
    .order-info {
      grid-column: 3/ 3;
      grid-row: 1/ 2;
    }
    .order-trash {
      grid-column: 3/ 3;
      grid-row: 2/ 3;
    }
    .order-add-or-remove {
      grid-column: 3 / 3;
      grid-row: 3/ 3;
    }
  }
}

@media only screen and (max-width: 800px) {
  // .order-grid {
  //   grid-auto-rows: minmax(300px, auto);
  //   grid-template-columns: repeat(3, 1fr);
  //   .order-image {
  //     grid-column: 1 / 3;
  //     grid-row: 1/ 4;
  //     background-size: auto;
  //   }
  //   .order-info {
  //     grid-column: 3/ 3;
  //     grid-row: 1/ 2;
  //     font-size: 1rem;
  //   }
  //   .order-trash {
  //     grid-column: 3/ 3;
  //     grid-row: 2/ 3;
  //   }
  //   .order-add-or-remove {
  //     grid-column: 3 / 3;
  //     grid-row: 3/ 3;
  //   }
  // }
  .order-grid {
    grid-auto-rows: minmax(200px, auto);
    grid-template-columns: repeat(3, 1fr);
    .order-image {
      height: auto;
      grid-column: 1 / 4;
      grid-row: 1/ 3;
    }
    .order-info {
      grid-column: 1 / 1;
      grid-row: 3/ 3;
    }
    .order-trash {
      grid-column: 2/ 2;
      grid-row: 3/ 3;
    }
    .order-add-or-remove {
      grid-column: 3 / 3;
      grid-row: 3/ 3;
    }
  }
}
</style>
