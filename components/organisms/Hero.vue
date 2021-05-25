<template>
  <div class="hero">
    <div class="child">
      <h1>{{ heroTxt }}</h1>
      <br />
      <nuxt-link to="categories/plakater">
        <button class="ctaBtn">Se udvalget</button>
      </nuxt-link>
    </div>
    <div class="child1" :style="`background-image: url(${heroImg})`"></div>
  </div>
</template>
<script>
export default {
  name: 'Hero',
  props: {
    heroImg: {
      type: String,
      required: true,
    },
    heroTxt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, auto);
  h1 {
    margin: 3rem;
    font-size: 6rem;
  }
}
.child {
  font-size: 2rem;
  padding: 7rem;
  grid-column: 1 / 3;
  grid-row: 1/ 1;
  height: 70vh;
  width: 100%;
}
.child1 {
  grid-column: 3 / 3;
  grid-row: 1/ 1;
  background: blue;
  height: 90vh;
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.ctaBtn {
  margin: 0 3rem;
  padding: 1rem 3rem;
  transition: 0.3s;
  color: #fff;
  font-size: 2.5rem;
  text-transform: uppercase;
  background: none;
  border: none;
  border: 5px solid #000;
  color: #000;

  &:hover {
    color: #fff;
    background-color: #000;
  }
}
</style>
