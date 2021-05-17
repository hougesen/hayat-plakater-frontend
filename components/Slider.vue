<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="slide of slides"
      :key="slide.id"
      :style="`background-image:url(${getStrapiMedia(slide.imageUrl)})`"
    >
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>

<script>
import { getStrapiMedia } from '@/helpers/strapi-media';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'swiper-example-loop-group',
  title: 'Loop mode with multiple slides per group',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    slides: Array,
    slidesEachPage: Number
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
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  methods: {
    getStrapiMedia
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 300px;
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
