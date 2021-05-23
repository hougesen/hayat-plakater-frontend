<template>
  <Modal @closeModal="closeModal" :closeButton="false">
    <template v-slot:title>
      Plakaten er lagt i kurven
    </template>

    <template v-slot:content>
      <div class="modal-content">
        <img :src="`${getStrapiMedia(productImage)}`" alt="" />

        <button @click="goToCheckout">Til kassen</button>
        <button @click="closeModal">Fortsæt shopping</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { getStrapiMedia } from '@/helpers/strapi-media';

export default {
  name: 'AddedToCart',

  props: {
    productImage: String
  },

  methods: {
    getStrapiMedia,
    closeModal() {
      this.$emit('closeModal');
    },

    goToCheckout() {
      this.$router.push('/checkout');
    }
  }
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
