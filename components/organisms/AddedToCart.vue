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
        <div class="btns">
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
    max-width: 80%;
    height: auto;
    @media only screen and (min-width: 1200px) {
      max-width: 350px;
    }
  }
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
  .btns {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
