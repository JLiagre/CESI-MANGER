<template>
  <v-main>
    <carousel3d-home></carousel3d-home>
    <menu-1></menu-1>
  </v-main>
</template>

<script>
import Carousel3dHome from '../components/Carousel3dHome.vue'
import Menu1 from '../components/Menu1.vue'

export default {
  name: 'Home',
  components: {
    'carousel3d-home': Carousel3dHome,
    'menu-1': Menu1,
  }
}
</script>