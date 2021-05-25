<template>
  <div class="category">
    <div class="categoryChild" :style="`background-image: url(${imgSrc})`">
      <a :href="linkTo">
        <div class="infoBox" :style="`left:${infoBoxPos}`">
          <h1 :style="`color:${titleColor}`">{{ title }}</h1>
          <p :style="`color:${textColor}`">{{ text }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Category',
  props: {
    title: {
      type: String,
      required: true,
    },
    titleColor: {
      type: String,
      default: 'black',
    },
    linkTo: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: 'black',
    },
    infoBoxPos: {
      type: String,
      default: '0',
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  height: 350px;
  .categoryChild {
    position: relative;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    .infoBox {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      font-size: 1.5rem;
      text-transform: uppercase;
      text-align: center;
      background: #fff;
      height: 250px;
      width: 200px;
      box-shadow: 0px 5px 15px #000;
      p {
        font-size: 1.2rem;
        margin-top: 2.5rem;
        text-decoration: underline;
      }
    }
  }
}
</style>
