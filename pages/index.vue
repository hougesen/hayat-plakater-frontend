<template>
  <div>
    <Hero />
    <div class="frontpage-slider standard-width">
      <h2>15:30 Populære plakater</h2>
      <Slider :slides="slides" :slidesEachPage="3" />
    </div>
    <div class="standard-width">
      <Category
        title="Sahara"
        titleColor="#CD9073"
        linkTo="google.com"
        imgSrc="https://images.pexels.com/photos/3889891/pexels-photo-3889891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        text="Udforsk Saharaen"
        textColor="#CD9073"
        infoBoxPos="20px"
      />
      <Category
        title="Nature"
        titleColor="#395E4E"
        linkTo="google.com"
        imgSrc="https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        text="Udforsk Saharaen"
        textColor="#395E4E"
        infoBoxPos="1040px"
      />
      <Category
        title="Sahara"
        titleColor="#A2D2CE"
        linkTo="google.com"
        imgSrc="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        text="Udforsk Saharaen"
        textColor="#A2D2CE"
        infoBoxPos="20px"
      />
    </div>
    <div class="about-us">
      <Accordion class="standard-width">
        <template v-slot:title>Hvad er HAYAT?</template>

        <template v-slot:content>
          <p class="accordion-content">
            Utrolig flot og farverig kunstplakat med Permild & Rosengreen-logo, af den danske maler, skulptør og
            forfatter, Asger Jorn. Plakaten ved navn “Orange samtale” afspejler den smukke, orange farve, der pryder
            plakatens motiv. Udover orange indeholder plakaten også faver som sort og beige. De få farver i mange
            streger, giver plakaten et på samme tid enkelt og ekspressivt udtryk, hvorfor den vil passe ind i de fleste
            stilarter. Står du og mangler en fin plakat i sommerhuset eller i stuen, men er bange for at din
            vægdekoration vil stjæle opmærksomhed fra andet interiør? Så frygt ej! Med denne flotte og varme plakat af
            Asger Jorn, er du garanteret et roligt, men sigende bidrag til dit hjem.
          </p>
        </template>
      </Accordion>

      <Accordion class="standard-width">
        <template v-slot:title>Visioner og værdier</template>

        <template v-slot:content>
          <p class="accordion-content">
            Utrolig flot og farverig kunstplakat med Permild & Rosengreen-logo, af den danske maler, skulptør og
            forfatter, Asger Jorn. Plakaten ved navn “Orange samtale” afspejler den smukke, orange farve, der pryder
            plakatens motiv. Udover orange indeholder plakaten også faver som sort og beige. De få farver i mange
            streger, giver plakaten et på samme tid enkelt og ekspressivt udtryk, hvorfor den vil passe ind i de fleste
            stilarter. Står du og mangler en fin plakat i sommerhuset eller i stuen, men er bange for at din
            vægdekoration vil stjæle opmærksomhed fra andet interiør? Så frygt ej! Med denne flotte og varme plakat af
            Asger Jorn, er du garanteret et roligt, men sigende bidrag til dit hjem.
          </p>
        </template>
      </Accordion>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      error: null,
      slides: [],
      test: null
    };
  },
  async mounted() {
    try {
      this.products = await this.$strapi.$products.find({ featured: true });

      for (const product of this.products) {
        this.slides.push({
          id: product._id,
          imageUrl: product.image[0].url,
          title: product.name
        });
      }
    } catch (error) {
      this.error = error;
    }
  }
};
</script>

<style lang="scss">
.frontpage-slider {
  background-color: rgba(162, 99, 62, 0.2);
  margin-top: -5rem;
  padding: 12rem 0 7rem 0;
}
.about-us {
  margin: 2rem 0;
  .accordion-content {
    font-size: 1.25rem;
  }
}
</style>
