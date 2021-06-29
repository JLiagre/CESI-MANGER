<template>
  <div class="login-form-group">
    <ul v-if="errors && errors.length">
      {{
        errors
      }}
    </ul>
    <form v-on:submit="logUser">
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Username</label>
        <input
            type="string"
            name="username"
            class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
            type="password"
            name="password"
            class="form-control form-control-lg"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Login',

  methods: {
    ...mapActions(['login']),
    async logUser(e) {
      e.preventDefault();
      console.log(e.target.elements.username.value);
      console.log(e.target.elements.password.value);
      let data = {
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      };
     await this.login(data);
      }
    },
}
</script>
