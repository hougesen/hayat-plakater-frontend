<template>
  <div class="standard-width">
    <div class="header">
      <h1>Gratis levering på alle produkter</h1>

      <p>
        Hos HAYAT Plakater kan du finde lige den plakat, der passer ind i din bolig. Budskab, design eller tema er her
        rigeligt at finde, så det handler kun om, hvilken du kan resonere mest med.
      </p>
      <p>
        Nedenfor kan du se de seneste nyheder på kryds af alle kollektioner, og længere nede på siden kan du finde de
        individuelle kollektioner.
      </p>
    </div>

    <OrganismsProducts :products="currentCategory" />
  </div>
</template>

<script>
export default {
  // Fetch all products
  async asyncData({ $strapi }) {
    let currentCategory = await $strapi.$products.find({});

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
      title: `Plakater - Hayat Plakater`,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin: 3rem 0;

  h1 {
    font-size: 3rem;
    margin: 0.5rem 0;
  }
  p {
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 1200px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 425px) {
  }
}
</style>
