<template>
  <div class="footer">
    <div class="logo"><img src="../assets/Logo.svg" alt="" /></div>
    <div>
      <h2>Hayat plakater</h2>
      <p>
        Kranvejen 77 <br />
        5000 Odense C <br />+45 20 97 44 30 <br />
        kontakt@hayatplakat.dk
      </p>
    </div>
    <div><h2>Information</h2></div>
    <div>
      <h2>Kategorier</h2>
    </div>
    <div>
      <h2>Følg os her:</h2>
      <i class="fab fa-facebook"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-pinterest"></i>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.footer {
  background: #000;
  color: #fff;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  padding: 1rem;
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
      color: #000;
    }
  }
}
</style>
