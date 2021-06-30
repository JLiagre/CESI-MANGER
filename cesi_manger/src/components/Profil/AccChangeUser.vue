<template>
  <div class="acc-form">
    <h2 class="change-acc-name">Modifier mon compte</h2>
    <form v-on:submit.prevent="submitForm">
      <h5>Compte</h5>
      <div class="form-group row ml-1 mr-1 pb-8">
        <!--<label class="form-label" for="username">Pseudo</label>-->
        <input
          type="text"
          class="form-control col mr-1"
          id="username"
          placeholder="Votre pseudo"
          v-model="form.username"
        />
        <!--<label class="form-label" for="password">Mot de passe</label>-->
        <input
          type="password"
          class="form-control col ml-1"
          id="password"
          placeholder="Votre mot de passe"
          v-model="form.password"
        />
      </div>
      <h5>Nom</h5>
      <div class="form-group row ml-1 mr-1 pb-8">
        <!--<label class="form-label" for="name">Prénom</label>-->
        <input
          type="text"
          class="form-control col mr-1"
          id="name"
          placeholder="Votre prénom"
          v-model="form.name"
        />
        <!--<label class="form-label" for="surname">Nom de famille</label>-->
        <input
          type="text"
          class="form-control col ml-1"
          id="surname"
          placeholder="Votre nom de famille"
          v-model="form.surname"
        />
      </div>
      <h5>Coordonees</h5>
      <div class="form-group row ml-1 mr-1 pb-8">
        <!--<label class="form-label" for="telephone">Téléphone</label>-->
        <input
          type="email"
          class="form-control col mr-1"
          id="telephone"
          placeholder="Telephone"
          v-model="form.telephone"
        />
        <!--<label class="form-label" for="email">Email</label>-->
        <input
          type="email"
          class="form-control col ml-1"
          id="email"
          placeholder="Email"
          v-model="form.email"
        />
      </div>
      <h5>Addresse</h5>
      <div class="form-group row ml-1 mr-1 pb-8">
        <!--<label class="form-label" for="address">Adresse</label>-->
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Votre adresse postale"
          v-model="form.address"
        />
      </div>
      <div class="form-group row ml-1 mr-1 pb-8">
        <!--<label class="form-label" for="zip">Code postal</label>-->
        <input
          type="text"
          class="form-control col mr-1"
          id="zip"
          placeholder="Code Postal"
          v-model="form.zip"
        />
        <!--<label class="form-label" for="city">Ville</label>-->
        <input
          type="text"
          class="form-control col ml-1"
          id="city"
          placeholder="Votre commune"
          v-model="form.city"
        />
      </div>
      <div class="form-group row ml-1 mr-1 pb-8">
        <!--<label class="form-label" for="country">Pays</label>-->
        <input
          type="text"
          class="form-control"
          id="country"
          placeholder="Votre pays"
          v-model="form.country"
        />
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="notif()">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  name: 'AccChangeUser',
  data() {
    return {
      form: {
        username: '',
        password: '',
        name: '',
        surname: '',
        telephone: '',
        email: '',
        address: '',
        zip: '',
        city: '',
        country: '',
      },
    }
  },
  methods: {
    notif() {
      this.$notify({
        group: 'foo',
        title: 'Validation',
        text: "Votre demande a bien été prise en compte, nos équipes s'en charge le plus rapidement possible.",
      })
    },
    /*submitForm(){
            axios.post('/contact', this.form)
                 .then((res) => {
                     //Perform Success Action
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
        }*/
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
