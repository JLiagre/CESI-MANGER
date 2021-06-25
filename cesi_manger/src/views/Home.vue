<template>
    <v-main>
      <div class="btn-group">
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
      </div>
    </v-main>
</template>

<script>
export default {
  name: 'Home',
}
</script>
