<template>
  <div class="increment-container">
    <button @click="$emit('changeAmount', 'decrement')"><i class="fas fa-minus-circle"></i></button>

    <slot class="slot" />

    <button @click="$emit('changeAmount', 'increment')"><i class="fas fa-plus-circle"></i></button>
  </div>
</template>

<script>
export default {
  name: 'InputIncrement',
};
</script>

<style lang="scss" scoped>
.increment-container {
  display: flex;
  flex-direction: row;
  font-size: 1.25rem;
  font-weight: 700;
  button {
    background: none;
    border: none;
    font-size: inherit;
    font-weight: inherit;
    margin: 0 1rem;
  }
}
</style>
