<template>
    <v-main>
        <acc-change></acc-change>
        <acc-supp></acc-supp>
        <qr-code></qr-code>
    </v-main>        
</template>

<script>
import AccChangeForm from '../Profil/AccChangeForm.vue'
import AccSuppression from '../Profil/AccSuppression.vue'
import Qrcode from '../Profil/QRcode.vue'

export default {
    name: 'Home',
    components: {
        'acc-change': AccChangeForm,
        'acc-supp': AccSuppression,
        'qr-code': Qrcode,
  }
}
</script>

<style>

</style>