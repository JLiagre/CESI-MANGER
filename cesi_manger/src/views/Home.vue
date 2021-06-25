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

    <div class="btn-group">
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
  </v-main>
</template>

<script>
export default {
  name: 'Home',
  //
  data: () => ({
      rules: [
        value => !!value || 'Requis.',
        value => (value && value.length >= 3) || 'Min 3 caractères',
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
