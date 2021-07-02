<template>
  <v-main>
    <vue-splash
      v-if="!this.$store.state.connected"
      :show="true"
      :logo="logo"
      color="#fff"
      :size="200"
      :fixed="true"
      background-color="#fff"
      class="splash"
    />
    <div class="titre">
      <h1>Un petit creux ? Vous êtes au bon endroit !</h1>
      <div class="adresse">
        <v-text-field
          label="Saisissez l'adresse de livraison"
          :rules="rules"
          hide-details="auto"
          prepend-icon="mdi-map-marker"
        ></v-text-field>
        <div class="boutonCmd">
          <v-btn @click="getRestaurantsClient">Shop</v-btn>
        </div>
      </div>
    </div>
    <div class="carrousel">
      <carousel3d-home></carousel3d-home>
    </div>
  </v-main>
</template>

<script>
import Carousel3dHome from '../components/Carousel/Carousel3dHome.vue'
import YourLogo from '../assets/images/final.gif'

import { mapActions } from 'vuex'
export default {
  name: 'Home',
  //
  components: {
    'carousel3d-home': Carousel3dHome,
  },
  //
  data: () => ({
    rules: [
      (value) => !!value || 'Requis.',
      (value) => (value && value.length >= 3) || 'Min 3 caractères',
    ],
  }),
  methods: {
    ...mapActions(['getRestaurantsClient']),
  },
  computed: {
    logo() {
      return YourLogo
    },
  },
}
</script>

<style>
.titre {
  margin-top: 20vh;
}

.adresse .v-text-field {
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}

.boutonCmd {
  margin-top: 10px;
}

.splash {
  z-index: 1000;
  -webkit-animation: cssAnimation 4s forwards;
  animation: cssAnimation 4s forwards;
}
@keyframes cssAnimation {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    z-index: 0;
  }
}
@-webkit-keyframes cssAnimation {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    z-index: 0;
  }
}
</style>
