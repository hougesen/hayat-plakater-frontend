<template>
  <div class="tabs">
    <div class="tabs-header">
      <button
        v-for="(item, index) of data"
        :key="index"
        class="tabs-button"
        :class="{ selected: activePage == index }"
        @click="activePage = index"
      >
        {{ item.title }}
      </button>
    </div>

    <div class="tabs-body">
      <p>
        {{ data[activePage].text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',

  props: {
    data: {
      /* The data array is expected to look like this:
      [
        {
          title: "Tab title",
          text: "Tab content text",
        },
      ]
      */
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      activePage: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  flex-direction: column;

  .tabs-header {
    display: flex;
    .tabs-button {
      background: none;
      border: none;
      font-size: 2rem;
      margin-right: 1rem;
    }
    .selected {
      text-decoration: underline;
    }
  }
}
</style>
