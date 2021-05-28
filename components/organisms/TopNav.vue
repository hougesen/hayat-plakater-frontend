<template>
  <nav class="top-nav">
    <nuxt-link to="/" class="logoSection">
      <img class="logo" src="@/assets/Logo.svg" alt="" />
    </nuxt-link>
    <div class="nav-links">
      <nuxt-link to="/" class="nav-link">Forside</nuxt-link>
      <nuxt-link to="/plakater" class="nav-link">Plakater</nuxt-link>
      <nuxt-link
        v-for="category in categories"
        :key="category.slug"
        :to="`/categories/${category.slug}`"
        class="nav-link"
      >
        {{ category.name }}
      </nuxt-link>
      <nuxt-link to="/about" class="nav-link">About</nuxt-link>
    </div>
    <div class="buttonsGrid">
      <div @click.prevent="goToCheckout">
        <i class="fas fa-shopping-cart"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNav',

  data() {
    return {
      showNav: true,
      prevScrollPos: 0,
      currentScrollPos: 0,
      categories: null,
      error: null,
    };
  },
  async mounted() {
    try {
      this.categories = await this.$strapi.find('categories');
    } catch (error) {
      this.error = error;
    }
  },

  methods: {
    setShoppingCartVisible() {
      this.$store.commit('setShoppingCartVisible');
    },
    goToCheckout() {
      this.$router.push('/checkout');
    },
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  padding: 1.5rem 0;
  width: 100%;
  background: #000;
  display: grid;
  text-align: center;
  align-items: center;
  transition: 0.5s;
  grid-template-columns: repeat(3, 1fr);
  color: #fff;
  text-decoration: none;
  .logoSection {
    display: flex;
    justify-content: center;
    align-content: center;
    color: #fff;
    text-decoration: none;
    font-weight: lighter;
  }
  .logo {
    stroke: #fff;
    width: 170px;
  }
  .buttonsGrid {
    i {
      font-size: 1.5rem;
      color: #fff;
      transition: 0.3s;
      &:hover {
        color: #489efc;
        cursor: pointer;
      }
    }
    p {
      font-size: 0.9rem;
      color: #fff;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.nav-link {
  text-transform: capitalize;
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  margin: 0 1rem;
}
.fa-stack[data-count]:after {
  position: absolute;
  right: 0%;
  top: 0%;
  content: attr(data-count);
  font-size: 40%;
  padding: 0.6em;
  border-radius: 999px;
  line-height: 0.75em;
  color: white;
  text-align: center;
  min-width: 2em;
  font-weight: bold;
  background: white;
  border-style: solid;
}
</style>
