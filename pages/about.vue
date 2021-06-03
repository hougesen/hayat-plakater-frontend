<template>
  <div class="about">
    <div class="txt standard-width">
      <h2>Mission</h2>
      <p>
        Hos Hayat Plakater finder du moderne og stilrene plakat designs i forskellige stilarter! Vores unikke posters er
        af høj kvalitet og er kendetegnet ved at indeholde arabisk kalligrafi. Vores mål er at bringe liv i hjemmet med
        flotte plakater, som kan skabe stemning og give et unikt udtryk! Hos os kan du være sikker på at finde en
        plakat, som du resonerer med. Vi har forskellige kategorier, som indeholder plakat til enhver naturig stemning
        kan byde på. Vores eget designteam udvikler plakaterne og derfor sælges de kun hos Hayat Plakater.
      </p>
      <hr />
      <h2>Vision</h2>
      <p>
        Vores vision er at skabe mere liv til dine vægge, samt inspirerer og supplere med indretningen og designet i
        hjemmet, uanset om det er soveværelset, gangen, kontoret eller hele hjemmet der kræver et komplet og stilrent
        udtryk! Vi respekterer diversitet - respeket for at tænke i andre kreative baner, kulturer og facetter af
        samfundet.
      </p>
      <hr />
      <h2>Værdier</h2>
      <p>
        Vores kerneværdier består af respekt for diversitet og hertil ønsker vi at agere med integritet og autencitet.
        Vi er opmærksomme på hvad der bliver lovet og sikrer en vis kvalitet for vores produkter, brand og alt vi
        foretager os.
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
hr {
  margin: 2rem 0;
}
.about {
  margin: 3rem 0;
}
.logo-section {
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: var(--black);
}
.logo {
  height: 150px;
}
.txt {
  h2 {
    font-size: 2.5rem;

    text-align: center;
    margin: 2rem 0rem 0rem;
    transition: 0.3s;
    /*     &:hover {
      font-size: 2rem;
      text-decoration: underline;
      @media only screen and (max-width: 1200px) {
        font-size: 1.6rem;
        text-decoration: underline;
      }
    } */
    @media only screen and (max-width: 1200px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
  p {
    font-size: 2rem;
    @media only screen and (max-width: 1200px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
}
</style>
