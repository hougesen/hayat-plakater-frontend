<template>
  <div class="increment-container">
    <button @click="$emit('changeAmount', 'decrement')">-</button>

    <slot class="slot" />

    <button @click="$emit('changeAmount', 'increment')">+</button>
  </div>
</template>

<script>
export default {
  name: 'InputIncrement'
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
