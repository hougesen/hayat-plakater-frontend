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
  height: 100%;
  z-index: 1000;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;

  .modal-inner {
    margin: 2rem auto;
    width: 70%;
    height: fit-content;
    background-color: var(--white);
    text-align: center;
    border-radius: var(--default-border-radius);
    padding: 2rem 0;

    .modal-header {
      overflow: hidden;
      height: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }
}
@media only screen and (max-width: 600px) {
  .modal-container {
    .modal-inner {
      width: 90%;
    }
  }
}
</style>
