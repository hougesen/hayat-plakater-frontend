<template>
  <div class="container">
    <Products :products="products" :error="error" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      error: null
    };
  },
  async mounted() {
    try {
      this.products = await this.$strapi.$products.find({ featured: true });
    } catch (error) {
      this.error = error;
    }
  }
};
</script>

<style lang="scss"></style>
