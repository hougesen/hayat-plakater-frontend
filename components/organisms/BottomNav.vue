<template>
  <nav class="bottom-nav">
    <nuxt-link to="/">
      <i class="fas fa-home"></i>
      <p>Forside</p>
    </nuxt-link>

    <nuxt-link to="/plakater">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon">
        <path
          d="m282.664 192-48.906 85.594-25.766-42.93-64 106.664h224L282.664 192zm-73.141 128H181.68l26.312-43.875 13.625 22.703L209.523 320zm24.563 0 48.578-85.008L331.227 320h-97.141z"
        />
        <path
          d="M415.992 85.328h-21.328V64h-21.328V0h-21.344v64h-21.328v21.328H181.336V64h-21.344V0h-21.328v64h-21.328v21.328H74.664V512h362.672V85.328h-21.344zm-64 0h21.344v21.336h-21.344V85.328zm-213.328 0h21.328v21.336h-21.328V85.328zm277.328 405.328h-320V106.664h21.344V128h64v-21.336h149.328V128h64v-21.336h21.328v383.992z"
        />
        <path
          d="M298.664 426.656h-85.328c-5.891 0-10.672 4.781-10.672 10.672S207.445 448 213.336 448h85.328c5.891 0 10.672-4.781 10.672-10.672s-4.781-10.672-10.672-10.672zM341.336 384H170.664c-5.891 0-10.672 4.781-10.672 10.656 0 5.906 4.781 10.672 10.672 10.672h170.672c5.891 0 10.656-4.766 10.656-10.672 0-5.875-4.765-10.656-10.656-10.656z"
        />
      </svg>

      <p class="category-link">Plakater</p>
    </nuxt-link>

    <nuxt-link to="/checkout">
      <i class="fas fa-shopping-cart"></i>
      <p>Kurv</p>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',
};
</script>

<style lang="scss" scoped>
.bottom-nav {
  z-index: 100;
  position: fixed;
  display: grid;
  bottom: 0;
  background-color: var(--black);
  padding: 0.75rem 0;
  width: 100vw;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-end;

  i {
    font-size: 1.25rem;
  }

  .icon {
    fill: var(--white);
    height: 24px;
  }

  a,
  i {
    text-align: center;
    color: var(--white);
    text-decoration: none;
  }
}
</style>
