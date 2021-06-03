<template>
  <div class="hero">
    <div class="text">
      <h1>{{ heroTxt }}</h1>
      <nuxt-link v-if="buttonLink" :to="buttonLink">
        <AtomsButton class="cta-button">Se udvalget</AtomsButton>
      </nuxt-link>
    </div>
    <div class="image"></div>
  </div>
</template>
<script>
export default {
  // Abdul det er jo legit en gang spagetti lol
  name: 'Hero',
  props: {
    buttonLink: {
      type: String,
      default: '',
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

  .text {
    font-size: 2rem;
    padding: 0 7rem;
    grid-column: 1 / 3;
    grid-row: 1/ 1;
    height: 50vh;
    width: 100%;

    h1 {
      margin: 3rem;
      font-size: 6rem;
      @media only screen and (max-width: 1500px) {
        font-size: 3rem;
      }
      @media only screen and (max-width: 1200px) {
        margin: 0.5rem;
        font-size: 2rem;
      }

      @media only screen and (max-width: 600px) {
        margin: 2rem;
        font-size: 1.5rem;
      }
    }

    .cta-button {
      margin: 0 3rem;
      padding: 1rem 3rem;
      transition: 0.3s;
      color: var(--black);
      font-size: 2.5rem;

      &:hover {
        color: var(--white);
        background-color: var(--black);
      }

      @media only screen and (max-width: 1200px) {
        font-size: 1.5rem;
        margin: 0 1rem;
      }
      @media only screen and (max-width: 800px) {
        font-size: 0.8rem;
        margin: 0 0.5rem;
      }
      @media only screen and (max-width: 600px) {
        font-size: 1rem;
        margin: 0 2rem;
      }
    }

    @media only screen and (max-width: 600px) {
      padding: 0;
    }
  }

  .image {
    grid-column: 3 / 3;
    grid-row: 1/ 1;
    height: 90vh;
    width: 100%;
    display: block;
    background-image: url('../../assets/shawka.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media only screen and (max-width: 1200px) {
      height: 50vh;
    }
  }

  @media only screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }
}
</style>
