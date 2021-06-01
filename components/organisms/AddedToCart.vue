<template>
  <OrganismsModal :close-button="false" @closeModal="closeModal">
    <template #title class="title"> Plakaten er lagt i kurven </template>

    <template #content>
      <div class="modal-content">
        <img :src="`${getStrapiMedia(productImage)}`" :alt="`Plakat ${productName} - Hayat Plakater`" />
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
    border: 2px solid #000;
    max-width: 350px;
    height: auto;
  }
  button {
    margin: 0.5rem;
    padding: 1rem;
    border: 3px solid #000;
    outline: none;
    background-color: #fff;
    transition: 0.3s;
    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
  .btns {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
