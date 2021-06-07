<template>
  <div>
    <OrganismsHero hero-txt="Giv dine vægge noget liv" button-link="/plakater" />
    <div class="frontpage-slider standard-width">
      <h2>Populære plakater</h2>
      <OrganismsSlider :slides="slides" :slides-each-page="3" />
    </div>

    <div class="about-us standard-width">
      <OrganismsAccordion :open="true">
        <template #title>Hvad er HAYAT?</template>

        <template #content>
          <p class="accordion-content">
            Hos Hayat Plakater finder du moderne og stilrene plakat designs i forskellige stilarter! Vores unikke
            posters er af høj kvalitet og er kendetegnet ved at indeholde arabisk kalligrafi. Vores mål er at bringe liv
            i hjemmet med flotte plakater, som kan skabe stemning og give et unikt udtryk! Hos os kan du være sikker på
            at finde en plakat, som du resonerer med. Vi har forskellige kategorier, som indeholder plakat til enhver
            naturig stemning kan byde på. Vores eget designteam udvikler plakaterne og derfor sælges de kun hos Hayat
            Plakater.
          </p>
        </template>
      </OrganismsAccordion>

      <OrganismsAccordion :open="true">
        <template #title>Visioner og værdier</template>

        <template #content>
          <p class="accordion-content">
            Vores vision er at skabe mere liv til dine vægge, samt inspirerer og supplere med indretningen og designet i
            hjemmet, uanset om det er soveværelset, gangen, kontoret eller hele hjemmet der kræver et komplet og
            stilrent udtryk! Vi respekterer diversitet - respeket for at tænke i andre kreative baner, kulturer og
            facetter af samfundet.
          </p>
        </template>
      </OrganismsAccordion>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      products: [],
      slides: [],
      test: null,
    };
  },
  async mounted() {
    // Fetch featured products for slider
    try {
      this.products = await this.$strapi.$products.find({ featured: true });

      for (const product of this.products) {
        this.slides.push({
          id: product._id,
          imageUrl: product.image[0].url,
          title: product.name,
          slug: product.slug,
        });
      }
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style lang="scss">
body {
  background-color: rgba(162, 99, 62, 0.2);
}
.frontpage-slider {
  background-color: rgba(162, 99, 62, 0.2);
  margin-top: -5rem;
  margin-bottom: 3rem;
  padding: 10rem 0 5rem 0;
  h2 {
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
}
.category-banners {
  margin: 3rem 0;
}
.about-us {
  margin: 3rem 0;
  .accordion-content {
    @media only screen and (min-width: 1200px) {
      font-size: 1.25rem;
    }
  }
}
</style>
