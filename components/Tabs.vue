<template>
  <div class="tabs">
    <div class="tabs-header">
      <button
        class="tabs-button"
        v-for="(item, index) of data"
        :key="index"
        @click="activePage = index"
        :class="{ selected: activePage == index }"
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
  name: "Tabs",

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
      default: []
    }
  },

  data() {
    return {
      activePage: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  flex-direction: column;

  .tabs-header {
    display: flex;

    .tabs-button {
      border: none;
      background: none;
      margin-right: 1rem;

      font-size: 2rem;
    }
    .selected {
      text-decoration: underline;
    }
  }
}
</style>
