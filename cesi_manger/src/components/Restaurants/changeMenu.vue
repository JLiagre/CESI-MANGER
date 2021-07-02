<template>
  <v-main>
    <div class="row">
      <div class="col">
        <span class="border border-dark">
          <menuChange></menuChange>
        </span>
      </div>
    </div>  
    <div class="row">
      <div class="col">
        <span class="border border-dark">
          <menu-create></menu-create>
        </span>
      </div>
    </div>   
  </v-main>
</template>
<script>

import {mapActions, mapState} from "vuex";
import MenuChangeForm from "../Menu/MenuChange";
import MenuCreateForm from '../Menu/MenuCreate.vue'

export default {
  components:{
    'menuChange' : MenuChangeForm,
    'menuCreate' : MenuCreateForm,
  },
  name: "changeMenu",
  computed: {
    ...mapState(['selectedRestaurant']),
  },
  methods: {
    ...mapActions(['editRestaurant']),

    notif() {
      this.$notify({
        group: 'foo',
        title: 'Validation',
        text: "Votre demande a bien été prise en compte, nos équipes s'en charge le plus rapidement possible.",
      })
    },
  }
}
</script>

<style scoped>

</style>