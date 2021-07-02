<template>
  <v-main>
    <histo-commande
      v-if="this.$store.state.user.userRole === 'client'"
    ></histo-commande>
    <take-order
      v-if="this.$store.state.user.userRole === 'livreur'"
    ></take-order>
    <acc-change-user></acc-change-user>
    <acc-supp></acc-supp>
    <qr-code></qr-code>
  </v-main>
</template>

<script>
import AccChangeUser from './AccChangeUser.vue'
import AccSuppression from '../Profil/AccSuppression.vue'
import Qrcode from '../Profil/QRcode.vue'
import takeOrder from '../Commande/takeOrder.vue'
import histoCommande from '../Profil/histoCommande.vue'

export default {
  name: 'Home',
  components: {
    'acc-change-user': AccChangeUser,
    'acc-supp': AccSuppression,
    'qr-code': Qrcode,
    'take-order': takeOrder,
    'histo-commande': histoCommande,
  },
  data() {
    return {
      userClient: false,
      userRestaurant: false,
      userDelivery: true,
    }
  },
}
</script>

<style></style>
