<template>
  <div class="accordion">
    <h2 @click="showContent = !showContent" class="accordion-title" :class="{ 'accordion-title--open': showContent }">
      <span>
        <i class="fas fa-caret-right arrowIcon" />

        <slot name="title" />
      </span>
    </h2>

    <p v-if="showContent" class="accordion-content">
      <slot name="content" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      showContent: false
    };
  }
};
</script>

<style lang="scss" scoped>
.accordion {
  .accordion-title {
    border: 1px solid #707070;
    font-size: 2rem;
    i {
      margin: 1rem;
    }
    &--open {
      i {
        transform: rotate(90deg);
      }
    }
  }
  .accordion-content {
    background-color: rgba($color: #cccccc, $alpha: 0.15);
    padding: 1rem;
  }
}
</style>
