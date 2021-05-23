<template>
  <div>
    <TopNav />

    <div v-if="shoppingCartVisible">
      <ShoppingCartModal />
    </div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit('initStore');
  },
  computed: {
    shoppingCartVisible() {
      return this.$store.getters.getShoppingCartVisible;
    },
  },
};
</script>

<style lang="scss">
:root {
  --default-background-color: #fff;
  --default-text-color: #101010;
  --cta-color: #1a722f;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Raleway&display=swap');

* {
  box-sizing: border-box;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  &::before,
  &::after {
    box-sizing: border-box;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }
}
html {
  scroll-behavior: smooth;
}
body,
html {
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
  padding-top: 0;
  width: 100%;
  color: var(--default-text-color);
  background-color: var(--default-background-color);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
button {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  cursor: pointer;
}
.standard-width {
  padding-left: 20rem !important;
  padding-right: 20rem !important;
}
</style>
