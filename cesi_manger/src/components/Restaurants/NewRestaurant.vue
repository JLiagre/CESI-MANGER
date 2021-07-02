<template>
  <div class="acc-form">
    <h2 class="change-acc-name">Creer un restaurant</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-label" for="name">Nom du restaurant</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Nom du restaurant"
          name="name"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="description">Description</label>
        <input
          type="text"
          name="description"
          class="form-control"
          id="description"
          placeholder="Description du restaurant"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="address">Adresse</label>
        <input
          type="text"
          class="form-control"
          name="address"
          id="address"
          placeholder="Votre adresse"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="zip">Code postal</label>
        <input
          type="text"
          name="zip"
          class="form-control"
          id="zip"
          placeholder="Code postal"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="city">Ville</label>
        <input
          name="city"
          type="text"
          class="form-control"
          id="city"
          placeholder="Votre ville"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="country">Pays</label>
        <input
          type="text"
          class="form-control"
          id="country"
          name="country"
          placeholder="Votre pays"
        />
      </div>

      <div class="form-group">
        <label class="form-label">Jours d'ouverture</label>
        <div class="row">
          <div class="col">
            <input type="checkbox" id="lundi" name="lundi" class="btn-check" />
            <label class="btn btn-outline-success" for="lundi">Lundi</label>
          </div>
          <div class="col">
            <input type="checkbox" id="mardi" name="mardi" class="btn-check" />
            <label class="btn btn-outline-success" for="mardi">Mardi</label>
          </div>
          <div class="col">
            <input
              type="checkbox"
              id="mercredi"
              name="mercredi"
              class="btn-check"
            />
            <label class="btn btn-outline-success" for="mercredi"
              >Mercredi</label
            >
          </div>
          <div class="col">
            <input
              type="checkbox"
              id="jeudi"
              value="jeudi"
              name="jeudi"
              class="btn-check"
            />
            <label class="btn btn-outline-success" for="jeudi">Jeudi</label>
          </div>
          <div class="col">
            <input
              type="checkbox"
              id="vendredi"
              name="vendredi"
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
              name="samedi"
              class="btn-check"
            />
            <label class="btn btn-outline-success" for="samedi">Samedi</label>
          </div>
          <div class="col">
            <input
              type="checkbox"
              id="dimanche"
              name="dimanche"
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
            name="heure_ouverture"
          />
        </div>
        <div class="form-group col">
          <!--<label class="form-label" for="fermeture">Fermeture</label>-->
          <input
            class="form-control"
            type="text"
            id="fermeture"
            placeholder="Vos heures de fermeture"
            name="heure_fermeture"
          />
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="notif()">Envoyer</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'EditRestaurant',

  methods: {
    ...mapGetters(['getID']),
    ...mapActions(['createRestaurant']),
    notif() {
      this.$notify({
        group: 'foo',
        title: 'Validation',
        text: "Votre demande a bien été prise en compte, nos équipes s'en charge le plus rapidement possible.",
      })
    },
    async submitForm(e) {
      let data = {
        name: e.target.elements.name.value,
        city: e.target.elements.city.value,
        zip: e.target.elements.zip.value,
        country: e.target.elements.country.value,
        address: e.target.elements.address.value,
        opening_days: [
          e.target.elements.lundi.checked,
          e.target.elements.mardi.checked,
          e.target.elements.mercredi.checked,
          e.target.elements.jeudi.checked,
          e.target.elements.vendredi.checked,
          e.target.elements.samedi.checked,
          e.target.elements.dimanche.checked,
        ],
        opening_hours: [
          e.target.elements.heure_ouverture.value,
          e.target.elements.heure_fermeture.value,
        ],
        userID: this.getID(),
      }
      console.log(this.getID())
      console.log(data)
      await this.createRestaurant(data)
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
