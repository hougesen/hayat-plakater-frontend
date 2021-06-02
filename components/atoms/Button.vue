<template>
  <button class="button" :class="`button--${buttonType}`" @click="$emit('buttonClick')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonType: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  padding: 1rem;
  &--primary {
    border: 5px solid var(--black);
    background-color: var(--white);
    color: var(--black);
  }

  &--secondary {
    background-color: lighten(black, 90);
  }
}
</style>
