<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex justify-start">
        <v-img
          alt="CESI'EAT Logo"
          class="shrink mr-2"
          contain
          src="@/assets/cesi-manger-logo.png"
          height="60"
          width="60"
        />
      </div>

      <div class="app-name-bar">
        <h1>CESI-MANGER</h1>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
      <div>
        <carousel-3d>
          <slide :index="0">
              <img style=" width:100%; height: 300px !important;" class="d-block w-100" src="@/assets/carousel1.jpg" alt="first slide">
          </slide>
          <slide :index="1">
              <img style=" width:100%; height: 300px !important;" class="d-block w-100" src="@/assets/carousel2.jpg" alt="second slide">
          </slide>
          <slide :index="2">
              <img style=" width:100%; height: 300px !important;" class="d-block w-100" src="@/assets/carousel3.jpg" alt="third slide">
          </slide>
          <slide :index="3">
              <img style=" width:100%; height: 300px !important;" class="d-block w-100" src="@/assets/carousel4.jpg" alt="fourth slide">
          </slide>
          <slide :index="4">
              <img style=" width:100%; height: 300px !important;" class="d-block w-100" src="@/assets/carousel5.jpg" alt="fifth slide">
          </slide>
          <slide :index="5">
              <img style=" width:100%; height: 300px !important;" class="d-block w-100" src="@/assets/carousel6.jpg" alt="sixth slide">
          </slide>
          <slide :index="6">
              <img style=" width:100%; height: 300px !important;" class="d-block w-100" src="@/assets/carousel7.jpg" alt="seventh slide">
          </slide>
          <slide :index="7">
              <img style=" width:100%; height: 300px !important;" class="d-block w-100" src="@/assets/carousel8.jpg" alt="eighth slide">
          </slide>
        </carousel-3d>
      </div>

      <div class="login-button">
        <v-btn size="lg" height="60" width="200">
          <v-icon>mdi-login</v-icon>
          <span>Client</span>
        </v-btn>

        <v-btn size="lg" height="60" width="200">
          <v-icon>mdi-login</v-icon>
          <span>Restaurant</span>
        </v-btn>
    
        <v-btn size="lg" height="60" width="200">
          <v-icon>mdi-login</v-icon>
          <span>Livreur</span>
        </v-btn>
      </div>

      <div class="footer-copyright">  
        <p> {{copyright}} </p>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: 'App',

  components: {
    Carousel3d,
    Slide
  },

  data: () => ({
    appName: "CESI-MANGER",
  }),

  computed: {
			copyright() {
				const currentYear = new Date().getFullYear()

			return `Copyright ${this.appName} ${currentYear}`
		}
	},
}
</script>

<style lang="scss">
  .login-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15em;
  };
  .footer-copyright {
    display: flex;
    align-items: center;
    justify-content: center;
  };
  .app-name-bar {
    margin-left: auto;
    margin-right: auto;
<<<<<<< Updated upstream
  };
</style>
=======
  }

  // Forgot password group
  .forgot-password-group {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 30vh;
    width: 100%;
  }

  .forgot-password-group form {
    margin-left: auto;
    margin-right: auto;
  }

</style>
>>>>>>> Stashed changes
