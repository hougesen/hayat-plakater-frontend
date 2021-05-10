<template>
  <button
    @click="$emit('buttonClick')"
    class="button"
    :class="`button--${buttonType}`"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    buttonType: {
      type: String,
      default: "secondary"
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  font-weight: 700;
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
}
</style>
