<template>
  <v-main>
    <div class="row">
      <div class="col">
        <span class="border border-dark">
          <create></create>
        </span>
      </div>
      <div class="col">
        <span class="border border-dark">
          <change></change>
        </span>
      </div>
    </div>
  </v-main>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import MenuChangeForm from '../Menu/MenuChange'
import MenuCreateForm from '../Menu/MenuCreate'

export default {
  components: {
    create: MenuCreateForm,
    change: MenuChangeForm,
  },
  name: 'changeMenu',
  computed: {
    ...mapState(['selectedRestaurant']),
  },
  methods: {
    ...mapActions(['createMenu']),
    notif() {
      this.$notify({
        group: 'foo',
        title: 'Validation',
        text: "Votre demande a bien été prise en compte, nos équipes s'en charge le plus rapidement possible.",
      })
    },
  },
}
</script>

<style scoped></style>
