<template>
  <div id="container">
    <div class="logo-section">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 423.606 112.97" class="logo">
        <g>
          <path
            d="M736.919 206.935v55.56h-10.32v-23.8h-28.73v23.8h-10.32v-55.56h10.32v22.94h28.73v-22.94zm48.42 42.7h-25.24l-5.48 12.86h-10.64l25-55.56h10.22l25 55.56h-13zm105.81 0h-25.24l-5.48 12.86h-10.64l25-55.56h10.16l25.08 55.56h-13zm-109.11-8.09-9.08-19.56-9.37 19.56zm106.11 0-9.09-19.56-9.37 19.56zm-56.22 1.34v19.61h-10.32v-19.45l-21.83-36.11h11l16.27 27.06 16.43-27.06h10.16zm93.11-27.19h-18.42v-8.73h47.15v8.73h-18.41v46.8h-10.32zm-215.27 76c0 7-4.95 11.08-13.22 11.08h-9.94v11.17h-1.61v-33.25h11.55c8.27 0 13.22 4.09 13.22 11zm-1.57 0c0-6.08-4.09-9.56-11.55-9.56h-10v19.17h10c7.46.03 11.55-3.45 11.55-9.61zm12.56-11h1.61v31.81h19.5v1.47h-21.11zm50.49 23.54h-19.92l-4.47 9.74h-1.76l15.41-33.28h1.57l15.4 33.28h-1.76zm-.62-1.38-9.31-20.31-9.37 20.31zm25.26-5.85-7.94 8.18v8.79h-1.62v-33.28h1.62v22.4l21.77-22.4h2l-14.74 15.22 15.79 18.06h-2zm45.12 7.23h-19.92l-4.47 9.74h-1.76l15.41-33.28h1.57l15.36 33.28h-1.76zm-.62-1.38-9.31-20.31-9.37 20.31zm20.36-20.69h-12.22v-1.47h26v1.47h-12.21v31.81h-1.57zm44.93 30.34v1.47h-22.48v-33.28h21.83v1.47h-20.22v14.17h18.07v1.48h-18.07v14.69zm35.05 1.47-8.23-11.46a21.378 21.378 0 0 1-3.61.29h-9.94v11.17h-1.61v-33.28h11.55c8.27 0 13.22 4.09 13.22 11 0 5.37-2.9 9-8 10.41l8.51 11.84zm-11.74-12.64c7.46 0 11.55-3.48 11.55-9.61s-4.09-9.56-11.55-9.56h-10v19.17z"
            transform="translate(-530.162 -204.345)"
          />
          <path
            d="M578.759 227.315c-24.82 10.88-44.78 26.65-41.78 50.87 6.88 55.75 115.39 41.61 114.65-40.68v75.44l-121.43.75"
            transform="translate(-530.162 -204.345)"
            style="stroke-width: 7.16px; stroke-miterlimit: 10; fill: none"
          />
          <path
            d="M553.899 232.315a63.62 63.62 0 0 0-17.26 4.87v-29.26h115.73v4.26s-55.24 7-73.61 15.13c-5.8 2.57-24.86 5-24.86 5z"
            transform="translate(-530.162 -204.345)"
            style="stroke-width: 7.16px; stroke-miterlimit: 10"
          />
          <path style="stroke-miterlimit: 10" d="M119.906 106.37h-48.33l31.77-18.93 15.78-26.1.78 45.03z" />
          <path style="stroke-width: 0.5px; stroke-miterlimit: 10" d="M124.846 112.72H.036l124.81-18.36v18.36z" />
        </g>
      </svg>
    </div>

    <div class="nav">
      <div class="desktop">
        <OrganismsTopNav />
      </div>

      <div class="mobile">
        <OrganismsBottomNav />
      </div>
    </div>

    <Nuxt />

    <OrganismsFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      window: {
        width: 0,
      },
    };
  },
  beforeCreate() {
    this.$store.commit('initStore');
  },
  created() {
    if (process.browser) {
      window.addEventListener('resize', this.setWindowWidth);
      this.setWindowWidth();
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.setWindowWidth);
  },
  methods: {
    setWindowWidth() {
      this.window.width = window.innerWidth;
    },
  },
};
</script>

<style lang="scss">
:root {
  --white: #fff;
  --black: #101010;
  --cta-color: #1a722f;
  --highlight-color: rgb(62, 228, 173);
  --default-border-radius: 5px;
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
  color: var(--black);
  background-color: var(--white);
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
  @media only screen and (max-width: 1400px) {
    padding-left: 5rem !important;
    padding-right: 5rem !important;
  }
  @media only screen and (max-width: 1200px) {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}
.flex-center {
  place-items: center;
  place-content: center;
  place-self: center;
}
#container {
  min-height: 100%;
  margin-bottom: -330px;
  position: relative;
}
.logo-section {
  display: none;
  margin: 1rem;
  place-content: center;
  svg {
    width: 170px;
    fill: var(--black);
    stroke: var(--black);
    g {
      fill: inherit;
      stroke: inherit;
      path {
        fill: inherit;
        stroke: inherit;
      }
    }
  }
  @media only screen and (max-width: 1199px) {
    display: flex;
  }
}

.nav {
  /**
   * TODO: Rewrite this
   */
  .desktop {
    display: none;

    @media only screen and (min-width: 1200px) {
      display: block;
    }
  }
  .mobile {
    display: none;

    @media only screen and (max-width: 1199.9px) {
      display: block;
    }
  }
}
</style>
