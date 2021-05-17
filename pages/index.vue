<template>
  <div class="container">
    <!--     <Products :products="products" :error="error" />
 -->

    <Slider :slides="slides" :slidesEachPage="4" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      error: null,
      slides: []
    };
  },
  async mounted() {
    try {
      this.products = await this.$strapi.$products.find({ featured: true });

      for (const product of this.products) {
        this.slides.push({
          id: product._id,
          imageUrl: product.image[0].url
        });
      }
    } catch (error) {
      this.error = error;
    }
  }
};
</script>

<style lang="scss"></style>
