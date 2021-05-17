<template>
  <nav class="top-nav" :style="{ top: showNav ? '0' : '-100px' }">
    <nuxt-link to="/" class="logoSection">
      <img class="logo" src="../assets/Logo.svg" alt="" />
    </nuxt-link>
    <div class="nav-links">
      <nuxt-link
        :to="`/categories/${category.slug}`"
        v-for="category in categories"
        :key="category.slug"
        class="nav-link"
        style="color:white"
      >
        {{ category.name }}
      </nuxt-link>
    </div>
    <div class="buttonsGrid">
      <div @click.prevent="setShoppingCartVisible">
        <i class="fas fa-shopping-cart "></i>
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
      error: null
    };
  },
  async mounted() {
    try {
      this.categories = await this.$strapi.find('categories');
    } catch (error) {
      this.error = error;
    }
    this.prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', () => {
      this.currentScrollPos = window.pageYOffset;
      if (this.prevScrollPos > this.currentScrollPos) {
        this.showNav = true;
      } else {
        this.showNav = false;
      }
      this.prevScrollPos = this.currentScrollPos;
    });
  },

  methods: {
    setShoppingCartVisible() {
      this.$store.commit('setShoppingCartVisible');
    }
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  padding: 1rem;
  position: fixed;
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
  .pages {
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
