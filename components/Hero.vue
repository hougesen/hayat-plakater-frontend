<template>
  <div class="hero">
    <div class="child">
      <h1>
        Pynt væggen ekstra godt op med <strong>arabisk</strong> kalligrafi
      </h1>
      <br />
      <button class="ctaBtn">se udvalget</button>
    </div>
    <div class="child1"></div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, auto);
}
.child {
  font-size: 2rem;
  padding: 7rem;
  grid-column: 1 / 3;
  grid-row: 1/ 1;
  height: 70vh;
  width: 100%;
}
.child1 {
  grid-column: 3 / 3;
  grid-row: 1/ 1;
  background: blue;
  height: 90vh;
  width: 100%;
  display: block;
  background-image: url("https://images.pexels.com/photos/4067759/pexels-photo-4067759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.ctaBtn {
  background-color: #000;
  height: 95px;
  width: 350px;
  transition: 0.3s;
  color: #fff;
  font-size: 2.5rem;
  text-transform: uppercase;
  border: none;

  &:hover {
    background-color: blue;
  }
}
</style>
