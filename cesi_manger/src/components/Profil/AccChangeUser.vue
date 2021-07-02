<template>
  <div class="acc-form">
    <h2 class="change-acc-name">Modifier mon compte</h2>
    <form v-on:submit="EditUser">
      <div>
        <h5>Compte</h5>
        <div class="form-group row ml-1 mr-1 pb-8">
          <!--<label class="form-label" for="username">Pseudo</label>-->
          <input
            type="text"
            class="form-control col mr-1"
            id="username"
            name="username"
            placeholder="Votre pseudo"
            :value="user.user_name"
          />
          <!--<label class="form-label" for="password">Mot de passe</label>-->
          <input
            type="password"
            class="form-control col ml-1"
            id="password"
            autocomplete="off"
            name="password"
            placeholder="Votre mot de passe"
          />
        </div>
        <h5>Nom</h5>
        <div class="form-group row ml-1 mr-1 pb-8">
          <!--<label class="form-label" for="name">Prénom</label>-->
          <input
            type="text"
            class="form-control col mr-1"
            id="name"
            name="name"
            placeholder="Votre prénom"
            :value="user.name"
          />
          <!--<label class="form-label" for="surname">Nom de famille</label>-->
          <input
            type="text"
            class="form-control col ml-1"
            id="surname"
            name="surname"
            placeholder="Votre nom de famille"
            :value="user.surname"
          />
        </div>
        <h5>Coordonees</h5>
        <div class="form-group row ml-1 mr-1 pb-8">
          <!--<label class="form-label" for="telephone">Téléphone</label>-->
          <input
            type="number"
            class="form-control col mr-1"
            id="telephone"
            name="telephone"
            placeholder="Telephone"
            :value="user.telephone"
          />
          <!--<label class="form-label" for="email">Email</label>-->
          <input
            type="email"
            class="form-control col ml-1"
            id="email"
            name="email"
            placeholder="Email"
            :value="user.email"
          />
        </div>
        <h5>Addresse</h5>
        <div class="form-group row ml-1 mr-1 pb-8">
          <!--<label class="form-label" for="address">Adresse</label>-->
          <input
            type="text"
            class="form-control"
            id="address"
            name="address"
            placeholder="Votre adresse postale"
            :value="user.address"
          />
        </div>
        <div class="form-group row ml-1 mr-1 pb-8">
          <!--<label class="form-label" for="zip">Code postal</label>-->
          <input
            type="text"
            class="form-control col mr-1"
            name="zip"
            id="zip"
            :value="user.zip"
          />
          <!--<label class="form-label" for="city">Ville</label>-->
          <input
            type="text"
            class="form-control col ml-1"
            id="city"
            name="city"
            placeholder="Votre commune"
            :value="user.city"
          />
        </div>
        <div class="form-group row ml-1 mr-1 pb-8">
          <!--<label class="form-label" for="country">Pays</label>-->
          <input
            type="text"
            class="form-control"
            id="country"
            name="country"
            placeholder="Votre pays"
            :value="user.country"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click="notif()">
        Envoyer
      </button>
    </form>
  </div>
</template>

<script>
//import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AccChangeUser',
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapActions(['editUser']),
    async EditUser(e) {
      console.log(e)
      e.preventDefault()
      let data = {
        user_name: e.target.elements.username.value,
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
      await this.editUser(data)
    },
    notif() {
      this.$notify({
        group: 'foo',
        title: 'Validation',
        text: "Votre demande a bien été prise en compte, nos équipes s'en chargent le plus rapidement possible.",
      })
    },
  },
}
</script>

<style>
.acc-form {
  text-align: center;
  font-size: 13px;
  padding-top: 10em;
  color: #000000;
  margin: 0;
}

.form-group {
  padding-left: 3em;
  padding-right: 3em;
  padding-bottom: 1em;
}

.form-label {
  font-weight: bold;
}

.change-acc-name {
  font-weight: bold;
}
</style>
