<template>
  <Products :products="currentCategory.products" :error="error" />
</template>

<script>
export default {
  async asyncData({ $strapi, route }) {
    const id = route.params.slug;
    let currentCategory = await $strapi.$categories.find({ slug: id });
    currentCategory = currentCategory[0];
    return { currentCategory };
  },

  data() {
    return {
      category: {},
      error: null,
    };
  },
  /*   async mounted() {
    let path = window.location.pathname.replace('/categories/', '');

    try {
      this.category = await this.$strapi.$categories.find({
        slug: path
      });
      this.category = this.category[0];
    } catch (error) {
      this.error = error;
    }
  } */
};
</script>

<style lang="scss" scoped></style>
