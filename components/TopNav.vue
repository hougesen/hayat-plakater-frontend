<template>
  <nav class="top-nav" :style="{ top: showNav ? '0' : '-100px' }">
    <nuxt-link to="/" class="logoSection">
      <img class="logo" src="../assets/haa-hvid.svg" alt="" />
      <h1>Hayat Plakater</h1>
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
    <div class="buttonsGrid">
      <div>
        <i class="fas fa-heart "></i>
        <p>Ønskelister</p>
      </div>
      <div>
        <i class="fas fa-headset "></i>
        <p>Kundeservice</p>
      </div>
      <div>
        <i class="fas fa-user-alt "></i>
        <p>Log ind</p>
      </div>
      <div @click.prevent="setShoppingCartVisible">
        <i class="fas fa-shopping-cart "></i>
        <p>Indkøbsvogn</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNav",

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
      this.categories = await this.$strapi.find("categories");
    } catch (error) {
      this.error = error;
    }
    this.prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", () => {
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
      this.$store.commit("setShoppingCartVisible");
    }
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  width: 100%;
  background: #489efc;
  display: grid;
  text-align: center;
  align-items: center;
  transition: 0.5s;
  grid-template-columns: repeat(3, 1fr);
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
    height: 58px;
    width: 50px;
  }
  .pages {
  }
  .buttonsGrid {
    display: grid;
    text-align: center;
    align-items: center;
    grid-template-columns: repeat(4, 100px);
    padding: 1rem;
    cursor: pointer;
    i {
      display: inline-block;
      font-size: 1.2rem;
      line-height: 50px;
      background-color: #f5f5f5;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      text-align: center;
      vertical-align: bottom;
      transition: 0.3s;
      &:hover {
        color: #489efc;
        background-color: #fff;
      }
    }
    p {
      font-size: 0.9rem;
      color: #fff;
    }
  }
}
</style>
