<template>
  <div>
    <OrganismsHero
      hero-txt="Kalligrafiens historie"
      hero-img="https://st2.depositphotos.com/1012125/5597/v/950/depositphotos_55972649-stock-illustration-egyptian-hieroglyphics.jpg"
    />
    <div class="history-grid standard-width">
      <div
        class="child1"
        :style="`background-image: url('https://collectionapi.metmuseum.org/api/collection/v1/iiif/452417/1294352/main-image');`"
      ></div>
      <div class="child bgcg">
        <h2>Hvor det hele startede</h2>
        <p>
          From holy texts to royal decrees, Chaucer to Shakespeare and Greek to Latin, all writing was passed down from
          generation to generation – strange to think about in this technological age!1
        </p>
      </div>
      <div class="child bgcb">
        <h2>Oprindelse og anvendelse</h2>
        <p>
          From holy texts to royal decrees, Chaucer to Shakespeare and Greek to Latin, all writing was passed down from
          generation to generation – strange to think about in this technological age!2
        </p>
      </div>
      <div
        class="child1"
        :style="`background-image: url('https://mk0kaleelao979sb1ktf.kinstacdn.com/wp-content/uploads/2020/04/Arabic-Calligraphy.jpg');`"
      ></div>
      <div
        class="child1"
        :style="`background-image: url('https://www.rosettatype.com/blog/assets/2016-Arabic-calligraphic-styles/acs_easternkufi.jpg');`"
      ></div>
      <div class="child bgcg">
        <h2>De forskellige stilarter</h2>
        <p>
          From holy texts to royal decrees, Chaucer to Shakespeare and Greek to Latin, all writing was passed down from
          generation to generation – strange to think about in this technological age!3
        </p>
      </div>
      <div class="child bgcb">
        <h2>Moderne kalligrafi</h2>
        <p>
          From holy texts to royal decrees, Chaucer to Shakespeare and Greek to Latin, all writing was passed down from
          generation to generation – strange to think about in this technological age!4
        </p>
      </div>
      <div
        class="child1"
        :style="`background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/96ce0028903061.55d7df8880c8e.jpg');`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  head() {
    return {
      title: `Kalligrafiens Historie - Hayat Plakater`,
    };
  },
};
</script>

<style lang="scss" scoped>
.bgcg {
  background-color: #f0f0f0;
}
.bgcb {
  background-color: #fffaf4;
}
.history-grid {
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(500px, auto);
}
.child {
  padding: 2rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
  h2 {
    padding: 1rem 0rem;
  }
}
.child1 {
  margin: 3rem 0;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
