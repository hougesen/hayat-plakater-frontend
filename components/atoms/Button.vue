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
    border: 5px solid #000;
    background-color: #fff;
    color: #000;
  }

  &--secondary {
    background-color: lighten(black, 90);
  }

  &--nordic {
    background-color: #157fec;
    color: white;
  }
  &--nature {
    background-color: greenyellow;
    color: white;
  }
}
</style>
