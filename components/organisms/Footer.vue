<template>
  <div class="footer">
    <div class="logo footer-element">
      <img src="@/assets/Logo.svg" alt="Hayat Plakater logo" />
    </div>
    <div class="footer-element">
      <h2>Hayat plakater</h2>
      <p>kontakt@hayatplakat.dk</p>

      <p>CVR: 42361542</p>
    </div>
    <div class="footer-element">
      <h2>Information</h2>
      <nuxt-link to="/about" class="nav-link">Om os</nuxt-link>
      <nuxt-link to="/history" class="nav-link">Kalligrafiens historie</nuxt-link>
    </div>
    <!-- <div>
      <h2>Kategorier</h2>
    </div> -->
    <div class="footer-element social-media">
      <a href="https://www.facebook.com/hayatplakater/" target="_blank"> <i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/hayatplakater/" target="_blank"> <i class="fab fa-instagram"></i></a>
      <a href="https://www.pinterest.dk/Hayatplakater/" target="_blank"> <i class="fab fa-pinterest"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  background: #000;
  color: #fff;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100px;
  position: relative;
  p {
    display: flex;
    flex-direction: column;
  }
  .logo {
    width: 250px;
  }
  i {
    margin: 0.5rem;
    font-size: 2rem;
    transition: 1s;
    &:hover {
      color: #489efc;
    }
  }
  .footer-element {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    a {
      color: white;
    }
  }
  .logo,
  .social-media {
    flex-direction: row;
    margin: auto;
  }
}
</style>
