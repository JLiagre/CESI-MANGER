<template>
  <div class="row">
    <div class="col">
      <span
        style="font-size: 10em; color: green"
        v-if="
          orderPrepare != false || orderDelivery != false || orderGiven != false
        "
      >
        <i class="fas fa-fire-alt"></i>
      </span>
      <span style="font-size: 10em; color: red" v-else>
        <i class="fas fa-fire-alt"></i>
      </span>
    </div>
    <div class="col">
      <span style="font-size: 10em; color: black">
        <i class="fas fa-long-arrow-alt-right"></i>
      </span>
    </div>
    <div class="col">
      <span
        style="font-size: 10em; color: green"
        v-if="orderDelivery != false || orderGiven != false"
      >
        <i class="fas fa-motorcycle"></i>
      </span>
      <span style="font-size: 10em; color: red" v-else>
        <i class="fas fa-motorcycle"></i>
      </span>
    </div>
    <div class="col">
      <span style="font-size: 10em; color: black">
        <i class="fas fa-long-arrow-alt-right"></i>
      </span>
    </div>
    <div class="col">
      <span style="font-size: 10em; color: green" v-if="orderGiven != false">
        <i class="fas fa-utensils"></i>
      </span>
      <span style="font-size: 10em; color: red" v-else>
        <i class="fas fa-utensils"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
  data() {
    return {
      orderPrepare: false,
      orderDelivery: true,
      orderGiven: false,
    }
  },
})
</script>

<style>
i.fas {
  border: 5px solid red;
}
</style>
