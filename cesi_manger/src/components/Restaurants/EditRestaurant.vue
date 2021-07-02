<template>
  <div class="acc-form">
    <h2 class="change-acc-name">Editer un restaurant</h2>
    <form v-on:submit.prevent="EditRestaurant">
      <div class="form-group">
        <label class="form-label" for="name">Nom du restaurant</label>
        <input
          type="text"
          class="form-control"
          id="name"
          :value="selectedRestaurant.name"
          placeholder="Nom du restaurant"
        />
      </div>

      <div class="form-group">
        <label class="form-label" for="description"
          >Description {{ selectedRestaurant.name }}</label
        >
        <input
          type="text"
          :value="selectedRestaurant.description"
          class="form-control"
          id="description"
          placeholder="Description du restaurant"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="address">Adresse</label>
        <input
          type="text"
          :value="selectedRestaurant.address"
          class="form-control"
          id="address"
          placeholder="Votre adresse"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="zip">Code postal</label>
        <input
          :value="selectedRestaurant.zip"
          type="text"
          class="form-control"
          id="zip"
          placeholder="Code postal"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="city">Ville</label>
        <input
          :value="selectedRestaurant.city"
          type="text"
          class="form-control"
          id="city"
          placeholder="Votre ville"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="country">Pays</label>
        <input
          :value="selectedRestaurant.country"
          type="text"
          class="form-control"
          id="country"
          placeholder="Votre pays"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="dayopen">Jours d'ouverture</label>
        <div class="row">
          <div class="col">
            <input type="checkbox" id="lundi" value="lundi" class="btn-check" />
            <label class="btn btn-outline-success" for="lundi">Lundi</label>
          </div>
          <div class="col">
            <input type="checkbox" id="mardi" value="mardi" class="btn-check" />
            <label class="btn btn-outline-success" for="mardi">Mardi</label>
          </div>
          <div class="col">
            <input
              type="checkbox"
              id="mercredi"
              value="mercredi"
              class="btn-check"
            />
            <label class="btn btn-outline-success" for="mercredi"
              >Mercredi</label
            >
          </div>
          <div class="col">
            <input type="checkbox" id="jeudi" value="jeudi" class="btn-check" />
            <label class="btn btn-outline-success" for="jeudi">Jeudi</label>
          </div>
          <div class="col">
            <input
              type="checkbox"
              id="vendredi"
              value="vendredi"
              class="btn-check"
            />
            <label class="btn btn-outline-success" for="vendredi"
              >Vendredi</label
            >
          </div>
          <div class="col">
            <input
              type="checkbox"
              id="samedi"
              value="samedi"
              class="btn-check"
            />
            <label class="btn btn-outline-success" for="samedi">Samedi</label>
          </div>
          <div class="col">
            <input
              type="checkbox"
              id="dimanche"
              value="dimanche"
              class="btn-check"
            />
            <label class="btn btn-outline-success" for="dimanche"
              >Dimanche</label
            >
          </div>
        </div>
      </div>
      <label class="form-label" for="houropen">Heures d'ouverture</label>
      <div class="form-group row">
        <div class="form-group col">
          <!--<label class="form-label" for="ouverture">Ouverture</label>-->
          <input
            class="form-control"
            type="text"
            id="ouverture"
            placeholder="Vos heures d'ouverture"
            :value="selectedRestaurant.opening_hours[0]"
          />
        </div>
        <div class="form-group col">
          <input
            class="form-control"
            type="text"
            id="fermeture"
            placeholder="Vos heures de fermeture"
            :value="selectedRestaurant.opening_hours[1]"
          />
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="notif()">Sauvegarder</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'EditRestaurant',
  computed: {
    ...mapState(['selectedRestaurant']),
  },
  methods: {
    ...mapActions(['editRestaurant']),
    async EditRestaurant(e) {
      console.log(this.selectedRestaurant.name)
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
      await this.editRestaurant(data)
    },
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
