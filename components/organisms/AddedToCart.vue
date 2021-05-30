<template>
  <OrganismsModal :close-button="false" @closeModal="closeModal">
    <template #title> Plakaten er lagt i kurven </template>

    <template #content>
      <div class="modal-content">
        <img :src="`${getStrapiMedia(productImage)}`" alt="" />

        <button @click="goToCheckout">Til kassen</button>
        <button @click="closeModal">Fortsæt shopping</button>
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
  align-items: center;
  img {
    max-width: 250px;
    height: auto;
  }
}
</style>
