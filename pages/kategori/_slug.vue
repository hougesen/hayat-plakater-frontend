<template>
  <div v-if="currentCategory">
    <OrganismsCategoryHero
      category-img="https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      :category-txt="currentCategory.description"
      :category-info-box-color="currentCategory.infoBoxColor"
      :category-info-box-txt="currentCategory.name"
      category-txt-color="#fff"
    />

    <OrganismsProducts :products="currentCategory.products" />
  </div>
</template>

<script>
export default {
  // Get current category page
  async asyncData({ $strapi, route }) {
    const slug = route.params.slug;
    let currentCategory = await $strapi.$categories.find({ slug: slug });
    currentCategory = currentCategory[0];
    return { currentCategory };
  },

  data() {
    return {
      category: {},
      error: null,
    };
  },
  head() {
    return {
      title: `${this.currentCategory.name} Kollektion - Hayat Plakater`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.currentCategory.metaDescription ||
            'Hos Hayat Plakater finder du et udvalg af arabisk kalligrafi plakater med stilfulde rammer. Vi har plakater i forskellige kategorier, uanset stil og smag, kan du finde noget at resonere med',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
