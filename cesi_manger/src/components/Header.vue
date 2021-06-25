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
            <v-app-bar-title class="app-name">CESI MANGER</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="connectedUser =  true" to="/login">Se connecter</v-btn>
            <v-btn v-if="connectedUser =  true" to="/signup">S'enregistrer</v-btn>
            <v-btn v-if="connectedUser = true" to="/profil">Profil</v-btn>
        </v-app-bar>
    </v-card>
</template>

<style>
    .shrink-mr-2 {
        height: 60px;
        width: 60px;
    }

    .v-btn.back2home {
        width: 30px;
        min-width: 30px;
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