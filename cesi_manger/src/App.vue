<template>
  <v-app>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
    <notifications group="foo" />
  </v-app>
</template>

<script>
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'

export default {
  name: 'App',
  components: {
    'my-header': Header,
    'my-footer': Footer,
  },
  data: () => ({
    connectedUser: true,
  }),
}
</script>

<style lang="scss">

  // Homepage
  //
  .btn-group {
    display: flex;
    align-items: center;
    text-align: center;

    margin-top: 20vh;
    //margin-left: auto;
    //margin-right: auto;
    //width: 6em;
  };

  #app {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%
  };

  // Login page
  .login-form-group {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 30vh;
    width: 100%;
  }

  .login-form-group form {
    margin-left: auto;
    margin-right: auto;
  }

  // Register page
  .register-form-group {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 30vh;
    width: 100%;
  }

  .register-form-group form {
    margin-left: auto;
    margin-right: auto;
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