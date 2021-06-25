<template>
  <v-main>
    <carousel3d-home></carousel3d-home>

  </v-main>
</template>

<script>
import Carousel3dHome from '../components/Carousel3dHome.vue'

export default {
  name: 'Home',
  components: {
    'carousel3d-home': Carousel3dHome,
  }
}
</script>