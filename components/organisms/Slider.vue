<template>
  <Swiper class="swiper" :options="swiperOption">
    <SwiperSlide v-for="slide of slides" :key="slide.id">
      <nuxt-link :to="`products/${slide.slug}`">
        <img :src="`${getStrapiMedia(slide.imageUrl)}`" alt="" />

        <h3 v-if="desc">{{ slide.title }}</h3>
      </nuxt-link>
    </SwiperSlide>
    <div slot="pagination" class="swiper-pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
  </Swiper>
</template>

<script>
import { getStrapiMedia } from '@/helpers/strapi-media';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
    slidesEachPage: {
      type: Number,
      default: 3,
    },
    desc: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  methods: {
    getStrapiMedia,
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .swiper-slide {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
