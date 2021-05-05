<template>
  <nav class="top-nav">
    <nuxt-link to="/">
      <h1 class="logo">Hayat Plakater</h1>
    </nuxt-link>
    <div class="nav-links">
      <nuxt-link
        :to="`/categories/${category.slug}`"
        v-for="category in categories"
        :key="category.slug"
        class="nav-link"
      >
        {{ category.name }}
      </nuxt-link>
    </div>

    <div class="buttons">
      <div class="button" @click.prevent="setShoppingCartVisible">
        <i class="fas fa-shopping-cart"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNav",

  data() {
    return {
      categories: null,
      error: null
    };
  },
  async mounted() {
    try {
      this.categories = await this.$strapi.find("categories");
    } catch (error) {
      this.error = error;
    }
  },

  methods: {
    setShoppingCartVisible() {
      this.$store.commit("setShoppingCartVisible");
    }
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  display: flex;
  flex-direction: row;
  .logo {
  }

  .pages {
  }
}
</style>
