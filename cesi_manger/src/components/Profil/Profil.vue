<template>
  <v-main>
    <acc-change-user v-if="(userClient = true)"></acc-change-user>
    <acc-supp></acc-supp>
    <acc-change-restaurant
      v-if="(userRestaurant = true)"
    ></acc-change-restaurant>
    <acc-change-delivery v-if="(userDelivery = true)"></acc-change-delivery>
    <qr-code></qr-code>
  </v-main>
</template>

<script>
import AccChangeUser from './AccChangeUser.vue'
import AccSuppression from '../Profil/AccSuppression.vue'
import Qrcode from '../Profil/QRcode.vue'
import AccChangeRestaurant from '../Profil/AccChangeRestaurant.vue'
import AccChangeDelivery from '../Profil/AccChangeDelivery.vue'

export default {
  name: 'Home',
  components: {
    'acc-change-user': AccChangeUser,
    'acc-supp': AccSuppression,
    'qr-code': Qrcode,
    'acc-change-restaurant': AccChangeRestaurant,
    'acc-change-delivery': AccChangeDelivery,
  },
  data() {
    return {
      userClient: true,
      userRestaurant: true,
      userDelivery: true,
    }
  },
}
</script>

<style></style>
