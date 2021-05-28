<template>
  <div>
    <OrganismsCategoryHero
      category-img="https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      :category-txt="data.description"
      :category-info-box-color="data.infoBoxColor"
      :category-info-box-txt="data.name"
      category-txt-color="#fff"
    />

    <OrganismsProducts :products="data.products" />
  </div>
</template>

<script>
export default {
  name: 'StandardCategory',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
