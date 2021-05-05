<template>
  <div>
    <TopNav />
    <div v-if="shoppingCartVisible">
      <ShoppingCart />
    </div>

    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    shoppingCartVisible() {
      return this.$store.getters.getShoppingCartVisible;
    }
  }
};
</script>

<style lang="scss">
:root {
  --default-background-color: #fff;
  --default-text-color: #101010;
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Ubuntu:wght@300;400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.6;
  &::before,
  &::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.6;
  }
}

html {
  scroll-behavior: smooth;
}
body,
html {
  font-family: "Open Sans", sans-serif;
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
  font-family: "Ubuntu", sans-serif;
}

button {
  cursor: pointer;
}
</style>
