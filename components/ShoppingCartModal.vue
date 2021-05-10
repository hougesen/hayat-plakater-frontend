<template>
  <Modal @closeModal="closeModal">
    <template v-slot:title>
      Shopping kurv
    </template>

    <template v-slot:content>
      <div v-if="getShoppingCart.length === 0">
        <p>Din indkøbskurv er tom</p>
      </div>
      <div v-else class="cart-list">
        <div
          v-for="product in getShoppingCart"
          :key="product.productId"
          class="cart-product"
        >
          <div class="cart-product-information">
            <h2>{{ product.name }}</h2>
            <p>{{ product.size }}</p>
          </div>

          <div class="cart-product-amount">
            <p>
              <span>
                <InputIncrement
                  @changeAmount="changeAmount(product.productId, ...arguments)"
                >
                  {{ product.amount }}
                </InputIncrement>
              </span>
            </p>
          </div>

          <div class="cart-product-price">
            <p>{{ product.price }}kr</p>
          </div>

          <div>
            <button @click="removeProduct(product.productId)" type="button">
              Fjern
            </button>
          </div>
        </div>

        <p>Pris i alt: {{ getTotalPrice }}</p>
      </div>
    </template>
  </Modal>
</template>

<script>
export default {
  name: "ShoppingCartModal",

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
    },
    closeModal() {
      console.log("CLOASD");
      this.$store.commit("setShoppingCartVisible");
    },
    changeAmount(productId, e) {
      console.log(`changeAmount(${productId})`);
      console.log(e);

      this.$store.commit("changeProductAmount", {
        productId,
        e
      });
    },
    removeProduct(productId) {
      this.$store.commit("removeProduct", { productId });
    }
  }
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
