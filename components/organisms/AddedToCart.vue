<template>
  <OrganismsModal :close-button="false" @closeModal="closeModal">
    <template #title class="title"> Plakaten er lagt i kurven </template>

    <template #content>
      <div class="modal-content">
        <img
          :src="`${getStrapiMedia(productImage)}`"
          :alt="`Plakat ${productName} - Hayat Plakater`"
          class="product-image"
        />
        <div class="button-container">
          <button @click="goToCheckout">Til kassen</button>
          <button @click="closeModal">Fortsæt shopping</button>
        </div>
      </div>
    </template>
  </OrganismsModal>
</template>

<script>
import { getStrapiMedia } from '@/helpers/strapi-media';

export default {
  name: 'AddedToCart',
  props: {
    productImage: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
  },
  methods: {
    getStrapiMedia,

    closeModal() {
      this.$emit('closeModal');
    },

    goToCheckout() {
      this.$router.push('/checkout');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  height: 100%;

  img {
    border: 2px solid var(--black);
    max-width: 35%;
    height: auto;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-content: center;

    button {
      margin: 0.5rem;
      padding: 1rem;
      border: 3px solid var(--black);
      outline: none;
      background-color: var(--white);
      transition: 0.3s;

      &:hover {
        color: var(--white);
        background-color: var(--black);
      }
    }
  }
}
@media only screen and (max-width: 1200px) {
  .modal-content {
    img {
      max-width: 50%;
    }
  }
}
@media only screen and (max-width: 800px) {
  .modal-content {
    img {
      max-width: 70%;
    }
  }
}
@media only screen and (max-width: 800px) {
  .modal-content {
    img {
      max-width: 90%;
    }
  }
}
</style>
