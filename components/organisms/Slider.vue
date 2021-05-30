<template>
  <Swiper class="swiper" :options="swiperOption">
    <SwiperSlide v-for="slide of slides" :key="slide.id">
      <nuxt-link :to="`/produkt/${slide.slug}`">
        <img :src="`${getStrapiMedia(slide.imageUrl)}`" :alt="slide.title" />

        <h3 v-if="title" class="slide-title">{{ slide.title }}</h3>
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
    title: {
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
        loopFillGroupWithBlank: false,
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
    a {
      text-decoration: none;
    }
    img {
      width: 100%;
      height: auto;
    }

    .slide-title {
      font-size: 1.25rem;
      color: var(--default-text-color);
      text-decoration: none;
    }
  }
}
</style>
