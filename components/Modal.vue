<template>
  <div class="modal-container" @click="$emit('closeModal')">
    <div class="modal-inner" @click.stop>
      <div class="modal-header">
        <h1>
          <slot name="title" />
        </h1>
        <button @click="$emit('closeModal')" v-if="closeButton">
          X
        </button>
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
  height: 100%;
  overflow: auto;
  z-index: 100000;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);

  .modal-inner {
    margin: 15% auto;
    width: 50%;
    background-color: white;
    text-align: center;
    padding: 1rem 0;
    .modal-header {
      display: flex;
      text-align: center;
    }
  }
}
</style>
