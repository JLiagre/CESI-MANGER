<template>
  <div class="acc-form">
    <div class="row">
      <h2 class="change-acc-name col-10">Mes restaurants</h2>
      <div class="col">
        <v-btn to="/Restaurants/new">Nouveau</v-btn>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th colspan="2">Nom</th>
          <th colspan="2">Ville</th>
          <th colspan="2">Ventes aujourd'hui</th>
          <th>ACCES</th>
        </tr>
      </thead>
      <tbody id="tableRestaurant"></tbody>

      <tr
        v-for="item in restaurantList"
        name="selectedRestaurant"
        :key="item.id"
      >
        <td colspan="2">{{ item.name }}</td>
        <td colspan="2">{{ item.city }}</td>
        <td colspan="2">{{ randomStat() }}</td>

        <td>
          <v-btn @click="EditMenu(item._id)">Menu</v-btn>
          <v-btn @click="Edit(item._id)">Restaurant</v-btn>
          <v-btn @click="Delete(item._id)">Supprimer</v-btn>
        </td>
      </tr>
    </table>
    <input hidden id="test" :value="this.$store.state.user.ID" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'ListRestaurant',
  methods: {
    ...mapActions(['deleteRestaurant', 'selectRestaurant', 'editMenu']),
    randomStat() {
      return Math.floor(Math.random() * 150)
    },
    async Delete(e) {
      await this.deleteRestaurant(e)
    },
    async Edit(e) {
      console.log(e)
      await this.selectRestaurant(e)
    },
    async EditMenu(e) {
      console.log(e)
      await this.editMenu(e)
    },
  },
  computed: {
    ...mapState(['restaurantList']),
  },
  created: {},
}
</script>
