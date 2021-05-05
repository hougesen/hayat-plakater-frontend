<template>
  <Products :products="this.category.products" :error="error" />
</template>

<script>
export default {
  data() {
    return {
      category: {},
      error: null
    };
  },
  async mounted() {
    console.log("id", this.$route.params.slug);
    try {
      this.category = await this.$strapi.$categories.find({
        slug: this.$route.params.slug
      });
      this.category = this.category[0];
    } catch (error) {
      this.error = error;
    }
  }
};
</script>

<style lang="scss" scoped></style>
