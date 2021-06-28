<template>
  <v-main>
    <take-order></take-order>
    <acc-change-user v-if="(userClient != false)"></acc-change-user>
    <acc-supp></acc-supp>
    <acc-change-restaurant
      v-if="(userRestaurant != false)"
    ></acc-change-restaurant>
    <acc-change-delivery v-if="(userDelivery != false)"></acc-change-delivery>
    <qr-code></qr-code>
  </v-main>
</template>

<script>
import AccChangeUser from './AccChangeUser.vue'
import AccSuppression from '../Profil/AccSuppression.vue'
import Qrcode from '../Profil/QRcode.vue'
import AccChangeRestaurant from '../Profil/AccChangeRestaurant.vue'
import AccChangeDelivery from '../Profil/AccChangeDelivery.vue'
import takeOrder from '../Commande/takeOrder.vue'

export default {
  name: 'Home',
  components: {
    'acc-change-user': AccChangeUser,
    'acc-supp': AccSuppression,
    'qr-code': Qrcode,
    'acc-change-restaurant': AccChangeRestaurant,
    'acc-change-delivery': AccChangeDelivery,
    'take-order': takeOrder,
  },
  data() {
    return {
      userClient: true,
      userRestaurant: false,
      userDelivery: false,
    }
  },
}
</script>

<style></style>
