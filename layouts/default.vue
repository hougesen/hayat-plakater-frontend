<template>
  <div id="container">
    <OrganismsTopNav />

    <Nuxt />

    <OrganismsFooter />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit('initStore');
  },
};
</script>

<style lang="scss">
:root {
  --default-background-color: #fff;
  --default-text-color: #101010;
  --cta-color: #1a722f;
  --highlight-color: rgb(62, 228, 173);
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Raleway&display=swap');

* {
  box-sizing: border-box;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  transition: 0.3s;
  &::before,
  &::after {
    box-sizing: border-box;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }
}
html {
  scroll-behavior: smooth;
}
body,
html {
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
  padding-top: 0;
  width: 100%;
  color: var(--default-text-color);
  background-color: var(--default-background-color);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
button {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  cursor: pointer;
}
.standard-width {
  padding-left: 20rem !important;
  padding-right: 20rem !important;
}
#container {
  min-height: 100%;
  margin-bottom: -330px;
  position: relative;
}
@media only screen and (max-width: 1400px) {
  .standard-width {
    padding-left: 5rem !important;
    padding-right: 5rem !important;
  }
}
@media only screen and (max-width: 1200px) {
  .standard-width {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important;
  }
}
@media only screen and (max-width: 600px) {
  .standard-width {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}
@media only screen and (max-width: 425px) {
  .standard-width {
    padding-left: 0rem !important;
    padding-right: 0rem !important;
  }
}
</style>
