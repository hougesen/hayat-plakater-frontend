<template>
  <div class="categoryGrid">
    <div class="child">
      <div class="categoryInfoBox" :style="`color:${categoryTxtColor}; background-color:${categoryInfoBoxColor}`">
        <h2>{{ categoryInfoBoxTxt }}</h2>
      </div>
      <p>
        {{ categoryTxt }}
      </p>
    </div>
    <div class="child1" :style="`background-image: url(${categoryImg})`"></div>
  </div>
</template>

<script>
export default {
  name: 'Project',

  props: {
    categoryImg: String,
    categoryTxt: String,
    categoryInfoBoxColor: String,
    categoryInfoBoxTxt: String,
    categoryTxtColor: String,
  },
};
</script>

<style lang="scss" scoped>
.categoryGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(600px, auto);
}
.child {
  grid-column: 1 / 3;
  background-color: #fff;
  p {
    padding: 5rem 16rem;
    font-size: 2rem;
  }
}
.child1 {
  grid-column: 3 / 3;
  display: block;
  background-image: url('https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.categoryInfoBox {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: relative;
  left: 200px;
  height: 280px;
  width: 400px;
  h2 {
    padding-top: 2rem;
    font-size: 6.5rem;
  }
}
</style>
