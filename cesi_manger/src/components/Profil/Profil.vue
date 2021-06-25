<template>
    <v-main>
        <acc-change></acc-change>
        <acc-supp></acc-supp>
    </v-main>        
</template>

<script>
import AccChangeForm from '../Profil/AccChangeForm.vue'
import AccSuppression from '../Profil/AccSuppression.vue'

export default {
    name: 'Home',
    components: {
        'acc-change': AccChangeForm,
        'acc-supp': AccSuppression,
  }
}
</script>

<style>

</style>