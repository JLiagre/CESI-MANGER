<template>
  <div class="acc-form">
    <div class="row">
      <h2 class="change-acc-name">Les restaurants a proximite</h2>
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

      <tr
        v-for="item in restaurantListUser"
        name="selectedRestaurant"
        :key="item.id"
      >
        <td colspan="2">{{ item.name }}</td>
        <td colspan="2">{{ item.city }}</td>

        <td>
          <v-btn @click="getMenus(item._id)">Visionner Menu</v-btn>
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
    ...mapActions([
      'deleteRestaurant',
      'selectRestaurant',
      'menuGesture',
      'getMenus',
    ]),
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
      await this.menuGesture(e)
    },
  },
  computed: {
    ...mapState(['restaurantList']),
    ...mapState(['restaurantListUser']),
  },
  created: {},
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
