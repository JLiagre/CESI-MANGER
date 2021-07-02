<template>
  <div class="acc-form">
    <h2 class="change-acc-name">Créer mon menu</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-label" for="name">Nom du produit</label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          placeholder="Le nom du produit"
          v-model="form.name"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          name="description"
          placeholder="Description du produit"
          v-model="form.description"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="prix">Prix du produit</label>
        <input
          type="number"
          class="form-control"
          id="prix"
          name="prix"
          placeholder="00€"
          v-model="form.prix"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="formControlRange">Status</label><br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="status"
            id="status-new"
            value="new"
            v-model="form.staus"
          />
          <label class="form-check-label" for="status">Nouveau</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="status"
            id="status-orderable"
            value="orderable"
            v-model="form.status"
          />
          <label class="form-check-label" for="status">Commandable</label>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="notif()">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MenuCreateForm',
  data() {
    return {
      form: {
        name: '',
        description: '',
        prix: '',
        status: '',
      },
    }
  },
  computed: {
    ...mapState(['selectedRestaurant']),
  },
  methods: {
    ...mapActions(['createMenu']),
    notif() {
      this.$notify({
        group: 'foo',
        title: 'Menu créé',
      })
    },

    async submitForm(e) {
      let data = {
        name: e.target.elements.name.value,
        description: e.target.elements.description.value,
        prix: e.target.elements.prix.value,
        status: e.target.elements.status.value,
        id: this.selectedRestaurant._id,
      }
      console.log(data)
      await this.createMenu(data)
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
