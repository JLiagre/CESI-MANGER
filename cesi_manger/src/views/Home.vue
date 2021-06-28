<template>
  <v-main>
    <div class="titre">
      <h1>Un petit creux ? Vous êtes au bon endroit !</h1>
      <div class="adresse">
        <v-text-field
          label="Saisissez l'adresse de livraison"
          :rules="rules"
          hide-details="auto"
          prepend-icon="mdi-map-marker"
        ></v-text-field>
      </div>
      <div class="boutonCmd"><v-btn to="/products">Passer commande</v-btn></div>
    </div>
    <div class="carrousel">
      <carousel3d-home></carousel3d-home>
      <menu-1></menu-1>
    </div>
  </v-main>
</template>

<script>
import Carousel3dHome from '../components/Carousel/Carousel3dHome.vue'
import Menu1 from '../components/Menu/Menu1.vue'

export default {
  name: 'Home',
  //
  components: {
    'carousel3d-home': Carousel3dHome,
    'menu-1': Menu1,
  },
  //
  data: () => ({
    rules: [
      (value) => !!value || 'Requis.',
      (value) => (value && value.length >= 3) || 'Min 3 caractères',
    ],
  }),
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
</style>
