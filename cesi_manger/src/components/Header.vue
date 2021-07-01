<template>
  <v-card class="overflow-hidden">
    <v-app-bar app color="primary">
      <div class="d-flex justify-start">
        <v-btn class="back2home" to="/">
          <v-img
            alt="CESI'EAT Logo"
            class="shrink-mr-2"
            contain
            src="@/assets/images/cesi-manger-logo.png"
          ></v-img>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-title
        v-if="
          $route.name == 'home' || this.$store.state.user.userRole !== 'client'
        "
        >CESI MANGER
      </v-app-bar-title>
      <v-app-bar-title v-else>
        <v-autocomplete
          v-model="value"
          :items="items"
          dense
          filled
          label="Que voulez-vous manger ?"
        ></v-autocomplete>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="
          this.$store.state.connected === true &&
          this.$store.state.user.userRole === 'client'
        "
        to="/cart"
        >Panier
      </v-btn>
      <v-btn v-if="!this.$store.state.connected" to="/login">Connexion</v-btn>
      <v-btn v-if="!this.$store.state.connected" to="/signup"
        >Créer un compte
      </v-btn>
      <v-btn v-if="this.$store.state.connected === true" to="/profil"
        >Profil
      </v-btn>
      <v-btn
        v-if="
          this.$store.state.connected === true &&
          this.$store.state.user.userRole === 'restaurateur'
        "
        to="/restaurants"
        >Mes Restaurants
      </v-btn>
      <v-btn v-if="this.$store.state.connected === true" @click="Logout"
        >Deconnexion
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['logout']),
    Logout() {
      this.logout()
    },
  },

  data: () => ({
    items: ['foo', 'bar', 'fizz', 'buzz'],
    // Remplacer par les valeurs de la BDD
  }),
}
</script>

<style>
.shrink-mr-2 {
  height: 60px;
  width: 60px;
}

.v-btn.back2home {
  width: 30px;
  min-width: 30px;
  background-color: transparent !important;
  border-color: transparent !important;
}

.v-app-bar-title__content {
  width: auto;
}

.v-app-bar-title .v-input__control {
  margin-top: 20px;
}

.v-app-bar-title__content {
  width: 140px;
}

.app-name {
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
