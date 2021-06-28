<template>
  <div class="acc-form" v-if="(userClient = true)">
    <h2 class="change-acc-name">Modifier mon compte</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-label" for="username">Pseudo</label>
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Votre pseudo"
          v-model="form.username"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Mot de passe</label>
        <input
          type="text"
          class="form-control"
          id="password"
          placeholder="Votre mot de passe"
          v-model="form.password"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="name">Prénom</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Votre prénom"
          v-model="form.name"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="description">Description</label>
        <input
          type="email"
          class="form-control"
          id="description"
          placeholder="Description du restaurant"
          v-model="form.description"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="country">Pays</label>
        <input
          type="text"
          class="form-control"
          id="country"
          placeholder="Votre pays"
          v-model="form.country"
        />
      </div>
        <label class="form-label" for="formControlRange">Status</label><br />
      <div class="form-group row">
        <div class="col">
          <input
            class="form-check-input btn-check"
            type="radio"
            id="standby"
            name="status"
            value="standby"
            v-model="form.status"
          />
          <label class="form-check-label btn btn-outline-secondary" for="standby"><i class="fas fa-hourglass-half"></i> En attente</label>
        </div>
        <div class="col">
          <input
            class="form-check-input btn-check"
            type="radio"
            id="ondelivery"
            name="status"
            value="ondelivery"
            v-model="form.status"
          />
          <label class="form-check-label btn btn-outline-secondary" for="ondelivery"><i class="fas fa-motorcycle"></i> En livraison</label>
        </div>
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
  name: 'AccChangeRestaurant',
  data() {
    return {
      form: {
        username: '',
        password: '',
        name: '',
        description: '',
        country: '',
        status: '',
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
