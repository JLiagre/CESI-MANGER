<template>
  <v-main><menuChange></menuChange></v-main>
</template>
<script>

import {mapActions, mapState} from "vuex";
import MenuChangeForm from "../Menu/MenuChange";

export default {
  components:{
    'menuChange' : MenuChangeForm
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