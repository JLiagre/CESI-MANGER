<template>
  <div class="acc-form">
    <div class="row">
      <h2 class="change-acc-name col-10">
        Mes restaurants
      </h2>
      <div class="col">
        <v-btn to="/Restaurants/new">Nouveau</v-btn>
      </div>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th colspan="2">Nom</th>
        <th colspan="2">Ville</th>
        <th>ACCES</th>
      </tr>
      </thead>
      <tbody id="tableRestaurant"></tbody>

      <tr v-for="item in restaurantList" :key="item.message">
        <td
            colspan="2"> {{ item.name }}
        </td>
        <td
            colspan="2"> {{ item.city }}
        </td>
        <td>
          <v-btn to="/products">Acceder</v-btn>
          <v-btn to="/Restaurants/edit">Editer</v-btn>
          <v-btn>Supprimer</v-btn>
        </td>
      </tr>

    </table>
    <input hidden id="test" :value="this.$store.state.user.ID"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'ListRestaurant',
  methods: {},
  computed: {
    ...mapState(['restaurantList'])
  },
  created: {},
}

</script>
