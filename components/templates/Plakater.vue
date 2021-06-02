<template>
  <div>
    <h1>Plakater</h1>
    <OrganismsProducts :products="data.products" />
  </div>
</template>

<script>
export default {
  name: 'Plakater',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
