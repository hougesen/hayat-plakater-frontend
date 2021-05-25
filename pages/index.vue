<template>
  <div>
    <OrganismsHero
      hero-txt="Giv dine vægge noget liv"
      hero-img="https://images.pexels.com/photos/4067759/pexels-photo-4067759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />
    <div class="frontpage-slider standard-width">
      <h2>Populære plakater</h2>
      <TemplatesSlider :slides="slides" :slides-each-page="3" />
    </div>
    <div class="standard-width">
      <OrganismsCategory
        title="Sahara"
        title-color="#CD9073"
        link-to="google.com"
        img-src="https://images.pexels.com/photos/3889891/pexels-photo-3889891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        text="Udforsk Saharaen"
        text-color="#CD9073"
        info-box-pos="20px"
      />
      <OrganismsCategory
        title="Nature"
        title-color="#395E4E"
        link-to="google.com"
        img-src="https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        text="Udforsk Saharaen"
        text-color="#395E4E"
        info-box-pos="1040px"
      />
      <OrganismsCategory
        title="Sahara"
        title-color="#A2D2CE"
        link-to="google.com"
        img-src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        text="Udforsk Saharaen"
        text-color="#A2D2CE"
        info-box-pos="20px"
      />
    </div>
    <div class="about-us">
      <OrganismsAccordion class="standard-width">
        <template #title>Hvad er HAYAT?</template>

        <template #content>
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
      </OrganismsAccordion>

      <OrganismsAccordion class="standard-width">
        <template #title>Visioner og værdier</template>

        <template #content>
          <p class="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
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
      products: [],
      error: null,
      slides: [],
      test: null,
    };
  },
  async mounted() {
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
