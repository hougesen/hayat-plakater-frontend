<template>
  <div>
    <div class="standard-width">
      <p>
        <nuxt-link to="/"> Forside </nuxt-link>
        >
        <nuxt-link to="/categories/plakater"> Plakater </nuxt-link>
        >
        {{ currentProduct.name }}
      </p>
    </div>

    <div class="product-page--grid standard-width">
      <div class="product-image">
        <img :src="`${getStrapiMedia(currentProduct.image[0].url)}`" alt="" />
      </div>
      <div class="product-information">
        <h1 class="product-title">
          {{ currentProduct.name }}
        </h1>
        <h2 v-if="priceInfo">{{ priceInfo.price }}kr</h2>

        <form class="product-form">
          <div>
            <label for="size">Størrelse</label>
            <select v-model="priceInfo" name="size">
              <option
                v-for="size in currentProduct.poster_price_sizes"
                :key="size._id"
                :value="{
                  sizeId: size._id,
                  price: size.price,
                  size: size.size,
                }"
              >
                {{ size.size }}
              </option>
            </select>
          </div>
        </form>

        <button class="button" @click="addToShoppingCart">Læg i kurv</button>
      </div>
    </div>

    <div class="product-description standard-width">
      <OrganismsTabs :data="getProductTabs" />
    </div>

    <div class="standard-width">
      <h2>Relaterede produkter</h2>

      <OrganismsSlider v-if="slides" :slides="slides" :slides-each-page="3" :title="false" />
    </div>
    <OrganismsAddedToCart v-if="showModal" :product-image="currentProduct.image[0].url" @closeModal="closeModal" />
  </div>
</template>

<script>
import { getStrapiMedia } from '@/helpers/strapi-media';

export default {
  async asyncData({ $strapi, route }) {
    const id = route.params.slug;
    let currentProduct = await $strapi.$products.find({ slug: id });
    currentProduct = currentProduct[0];
    return { currentProduct };
  },
  data() {
    return {
      //  currentProduct: {},
      showModal: false,
      product: null,
      error: null,
      amount: 1,
      priceInfo: {
        // Hardcoded to be the first element
        sizeId: '609033df6f5a97b74a65f520',
        size: '12x18',
        price: 100,
      },
      slides: [],
    };
  },

  computed: {
    totalPrice() {
      return this.amount * this.priceInfo.price;
    },
    getTheme() {
      return this.theme;
    },
    getProductTabs() {
      return [
        {
          title: 'Beskrivelse',
          text: this.currentProduct.description,
        },
        {
          title: 'Forsendelse og levering',
          text: `
          Vi trykker og sender samme dag på første arbejdsdag. 
          Dvs., at hvis du bestiller i weekenden, sender vi din vare allerede mandag. 
          For at sikre at plakaten ankommer i perfekt stand, pakker vi den rullet op i en papkasse med kassefyld.
          En plakat er mere end bare farve på papir. 
          En minimalistisk plakat passer lige så godt til et soveværelse, 
          som til en stue eller en entré. 
          Plakaten kan også bruges som en personlig gave til din partner, dit barn eller en ven. 
          Alle vores produkter trykkes på et nøje udvalgt 200 g semi-mat, premium papir af høj kvalitet, 
          specielt udviklet til fotorealistiske plakater og prints. 
          Papiret har en mat bestrøget overflade som er yderst holdbar, og dette resulterer i et ekslusivt look.
          Vi sender dagligt, så din nye plakat hurtigt kan komme op og hænge. 
          Så snart vi har pakket din ordre, kan du følge den. 
          Prisen er uden ramme.
          `,
        },
      ];
    },
  },

  async mounted() {
    try {
      let featuredProducts = await this.$strapi.$products.find({ featured: true });

      for (const product of featuredProducts) {
        this.slides.push({
          id: product._id,
          imageUrl: product.image[0].url,
          title: product.name,
          slug: product.slug,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    getStrapiMedia,
    addToShoppingCart() {
      const item = {
        amount: this.amount,
        productId: this.currentProduct.id,
        name: this.currentProduct.name,
        sizeId: this.priceInfo.sizeId,
        size: this.priceInfo.size,
        price: this.priceInfo.price,
        image: this.currentProduct.image[0].url,
      };

      console.log(item);

      this.$store.commit('addToShoppingCart', item);

      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-page--grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .product-information {
    display: flex;
    flex-direction: column;
  }
}
.button {
  border: none;
  font-weight: 700;
  padding: 1rem;
  max-width: 200px;

  background-color: var(--cta-color);
  color: white;
}
.product-image {
  img {
    max-height: 600px;
  }
}
</style>
