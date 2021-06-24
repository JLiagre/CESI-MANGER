<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex justify-start">
        <v-img
          alt="CESI'EAT Logo"
          class="shrink mr-2"
          contain
          src="@/assets/cesi-manger.jpg"
          height="60"
          width="60"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
      <div class="login-button">
        <v-btn size="lg" height="60" width="200">
          <v-icon>mdi-login</v-icon>
          <span>Client</span>
        </v-btn>

        <v-btn size="lg" height="60" width="200">
          <v-icon>mdi-login</v-icon>
          <span>Restaurent</span>
        </v-btn>
    
        <v-btn size="lg" height="60" width="200">
          <v-icon>mdi-login</v-icon>
          <span>Livreur</span>
        </v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
  .login-button {
    margin-left: auto;
    margin-right: auto;
    width: 6em;
  };
</style>