<template>
    <v-card class="overflow-hidden">
        <v-app-bar app color="primary">
            <div class="d-flex justify-start">
                <v-btn class="back2home" to="/">
                    <v-img 
                    alt="CESI'EAT Logo"
                    class="shrink-mr-2"
                    contain
                    src="@/assets/cesi-manger-logo.png"
                    ></v-img>
                </v-btn>
            </div>
            <v-spacer></v-spacer>
            <v-app-bar-title v-if="$route.name == 'home'">CESI MANGER</v-app-bar-title>
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
            <v-btn v-if="$route.name != 'home' && connectedUser != false" to="/cart">Panier</v-btn>
            <v-btn v-if="$route.name == 'home' && connectedUser != true" to="/login">Connexion</v-btn>
            <v-btn v-if="$route.name == 'home' && connectedUser != true" to="/signup">Créer un compte</v-btn>
        </v-app-bar>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: ['foo', 'bar', 'fizz', 'buzz'], // Remplacer par les valeurs de la BDD
      
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
</style>