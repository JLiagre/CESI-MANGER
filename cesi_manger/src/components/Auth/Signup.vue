<template>
  <div class="register-form-group">
    <form v-on:submit="signup">
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Surname</label>
        <input
          type="text"
          name="surname"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Phone number</label>
        <input
          type="tel"
          name="telephone"
          class="form-control form-control-lg"
          required
        />
      </div>
      <div class="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          class="form-control form-control-lg"
          required
        />
      </div>
      <div class="form-group">
        <label>Country</label>
        <input
          type="text"
          name="country"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>City</label>
        <input type="text" name="city" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Zip</label>
        <input type="text" name="zip" class="form-control form-control-lg" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign Up
      </button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../../router'

export default {
  name: 'signup',
  methods: {
    signup: (e) => {
      e.preventDefault()
      console.log(e.target.elements)
      let signup = () => {
        let data = {
          username: e.target.elements.username.value,
          password: e.target.elements.password.value,
          email: e.target.elements.email.value,
          city: e.target.elements.city.value,
          zip: e.target.elements.zip.value,
          telephone: e.target.elements.telephone.value,
          country: e.target.elements.country.value,
          surname: e.target.elements.surname.value,
          name: e.target.elements.name.value,
          address: e.target.elements.address.value,
        }
        axios
          .post('api/auth/signup', data)
          .then(() => {
            console.log('User created ')
            router.push({ name: 'login' })
          })
          .catch()
        {
          console.log('e')
        }
      }
      signup()
    },
  },
}
</script>
