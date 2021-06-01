<template>
  <div class="accordion">
    <h2 class="accordion-title" :class="{ 'accordion-title--open': showContent }" @click="showContent = !showContent">
      <span>
        <i class="fas fa-caret-right arrowIcon" />

        <slot name="title" />
      </span>
    </h2>

    <div v-if="showContent" class="accordion-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showContent: true,
    };
  },
  created() {
    this.showContent = this.open;
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  .accordion-title {
    font-size: 2rem;
    i {
      margin-right: 1rem;
    }
    &--open {
      i {
        transform: rotate(90deg);
      }
    }
  }
  .accordion-content {
    padding: 0.5rem 0;
  }
}
</style>
