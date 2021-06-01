<template>
  <div class="modal-container" @click="$emit('closeModal')">
    <div class="modal-inner" @click.stop>
      <div class="modal-header">
        <h1>
          <slot name="title" />
        </h1>
        <button v-if="closeButton" @click="$emit('closeModal')">X</button>
      </div>

      <div>
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    closeButton: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  z-index: 100000;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  overflow-y: hidden;
  .modal-inner {
    margin: 15% auto;
    width: 50%;
    background-color: white;
    text-align: center;
    padding: 1rem 0;
    overflow-y: hidden;
    border-radius: 10px;
    .modal-header {
      overflow-y: hidden;
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>
