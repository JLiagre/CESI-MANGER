<template>
  <div class="acc-form">
    <h2 class="change-acc-name">
      Modifier mon menu {{ selectedRestaurant.menu }}
    </h2>
    <select
      name="userRole"
      style="
        width: 100%;
        margin-top: 4%;
        margin-bottom: 4%;
        padding-top: 4%;
        padding-bottom: 4%;
        justify-content: center;
        border: 2px solid cadetblue;
      "
      v-model="selectP"
      :key="test"
    >
      <option
        v-for="(product, n) in selectedRestaurant.menu"
        :value="selectedRestaurant.menu"
        :key="n"
      >
        {{ product.name }}
      </option>
    </select>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-label" for="name"
          >Nom du produit pour le restaurant
          {{ selectedRestaurant.name }}</label
        >
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Le nom du produit"
          :value="selectedROProduct.name"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          placeholder="Description du produit"
          :value="selectedROProduct.description"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="prix">Prix du produit</label>
        <input
          type="number"
          class="form-control"
          id="prix"
          placeholder="00€"
          :value="selectedROProduct.price"
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
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'MenuChangeForm',
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
    ...mapState(['selectedROProduct', 'selectedRestaurant']),
    ...mapMutations(['selectedROProductT']),
  },
  methods: {
    ...mapActions(['']),

    async EditMenu(e) {
      console.log(this.selectedRestaurant.name)
      console.log(e)
      e.preventDefault()
      let data = {
        name: e.target.elements.name.value,
        description: e.target.elements.description.value,
        prix: e.target.elements.prix.value,
        status: e.target.elements.status.value,
        id: this.selectedRestaurant._id,
      }
      await this.edit(data)
    },
  },
  notif() {
    this.$notify({
      group: 'foo',
      title: 'Menu modifié',
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
