<template>
  <div>
    <h1>Indkøbskurv</h1>
    <div v-if="getShoppingCart.length === 0">
      <p>Din indkøbskurv er tom</p>
    </div>
    <div v-else class="cart-list">
      <div v-for="product in getShoppingCart" :key="product.id">
        <h1>{{ product.name }}</h1>
        <p>{{ product.amount }}</p>
        <p>{{ product.price }}kr</p>
        <p>{{ product.size }}</p>
      </div>

      <p>Pris i alt: {{ getTotalPrice }}</p>
    </div>

    <button type="button" @click="clearShoppingCart">Tøm indkøbskurv</button>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  computed: {
    getShoppingCart() {
      return this.$store.getters.getShoppingCart;
    },
    getTotalPrice() {
      return this.$store.getters.getTotalPrice;
    }
  },
  methods: {
    clearShoppingCart() {
      this.$store.commit("clearShoppingCart");
    }
  }
};
</script>

<style lang="scss" scoped></style>
