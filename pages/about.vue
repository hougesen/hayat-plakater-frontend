<template>
  <div class="about">
    <div class="txt standard-width">
      <h2>Mission</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam rerum explicabo similique, voluptate sunt facere
        ex. Rem maxime nobis deleniti debitis laborum et minus labore voluptatibus aliquam, itaque nihil quos!
      </p>
      <hr />
      <h2>Vision</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam rerum explicabo similique, voluptate sunt facere
        ex. Rem maxime nobis deleniti debitis laborum et minus labore voluptatibus aliquam, itaque nihil quos!
      </p>
      <hr />
      <h2>Værdier</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam rerum explicabo similique, voluptate sunt facere
        ex. Rem maxime nobis deleniti debitis laborum et minus labore voluptatibus aliquam, itaque nihil quos!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: `Om os - Hayat Plakater`,
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  margin: 3rem 0;
}
.logo-section {
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: #000;
}
.logo {
  height: 150px;
}
.txt {
  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin: 2rem 0rem 0rem;
    transition: 0.3s;
    &:hover {
      font-size: 2rem;
      text-decoration: underline;
    }
  }
  p {
    font-size: 2.5rem;
  }
}
hr {
  margin: 2rem 0;
}
</style>
