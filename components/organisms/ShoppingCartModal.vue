<template>
  <OrganismsModal @closeModal="closeModal">
    <template #title> Shopping kurv </template>

    <template #content>
      <div v-if="getShoppingCart.length === 0">
        <p>Din indkøbskurv er tom</p>
      </div>
      <div v-else class="cart-list">
        <div v-for="(product, index) in getShoppingCart" :key="index" class="cart-product">
          <div>
            <h2>{{ product.name }}</h2>
            <p>{{ product.size }}</p>
          </div>

          <div>
            <p>
              <span>
                <MoleculesInputIncrement @changeAmount="changeAmount(product.productId, ...arguments)">
                  {{ product.amount }}
                </MoleculesInputIncrement>
              </span>
            </p>
          </div>

          <div>
            <p>{{ product.price }}kr</p>
          </div>

          <div>
            <button type="button" @click="removeProduct(product.productId)">Fjern</button>
          </div>
        </div>

        <p>Pris i alt: {{ getTotalPrice }}</p>
        <button name="button" @click="goToCheckout">Gå til checkout</button>
      </div>
    </template>
  </OrganismsModal>
</template>

<script>
export default {
  name: 'ShoppingCartModal',
  computed: {
    getShoppingCart() {
      return this.$store.getters.getShoppingCart;
    },
    getTotalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },
  methods: {
    clearShoppingCart() {
      this.$store.commit('clearShoppingCart');
    },
    closeModal() {
      this.$store.commit('setShoppingCartVisible');
    },
    changeAmount(productId, e) {
      this.$store.commit('changeProductAmount', {
        productId,
        e,
      });
    },
    removeProduct(productId) {
      this.$store.commit('removeProduct', { productId });
    },
    goToCheckout() {
      this.$router.push('/checkout');
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-list {
  .cart-product {
    display: flex;

    div {
      margin: 1rem;
    }
  }
}
</style>
