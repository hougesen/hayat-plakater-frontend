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
    let path = window.location.pathname.replace('/categories/', '');

    try {
      this.category = await this.$strapi.$categories.find({
        slug: path
      });
      this.category = this.category[0];
    } catch (error) {
      this.error = error;
    }
  }
};
</script>

<style lang="scss" scoped></style>
