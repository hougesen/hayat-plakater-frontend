<template>
  <div>
    <OrganismsCategoryHero
      category-img="https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      category-txt="I Nature kollektionen vil du finde en række idylliske natur inspirerede plakater med ligeledes idylliske
  budskab."
      category-info-box-color="#01291D"
      category-info-box-txt="Nature"
      category-txt-color="#fff"
    />
    <OrganismsProducts :products="currentCategory.products" :error="error" />
  </div>
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
