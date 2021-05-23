<template>
  <button @click="$emit('buttonClick')" class="button" :class="`button--${buttonType}`">
    <slot />
    {{ buttonType }}
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
    background-color: black;
    color: white;
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
