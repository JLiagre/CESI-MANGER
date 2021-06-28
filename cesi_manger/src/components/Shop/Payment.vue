<template>
  <div id="payment">
    <vue-c-card
      :number="cc.number"
      :holder="cc.holder"
      :exp="cc.exp"
      :cvc="cc.cvc"
      :is-typing-cvc="isTypingCvc"
    />
    <label for="number">Number</label>
    <br />
    <input type="text" v-model="cc.number" id="number" />
    <br />
    <label for="holder">Holder</label>
    <br />
    <input type="text" v-model="cc.holder" id="holder" />
    <br />
    <label for="exp">Expiration Date</label>
    <br />
    <input type="text" v-model="cc.exp" id="exp" />
    <br />
    <label for="cvc">CVC</label>
    <br />
    <input
      type="text"
      v-model="cc.cvc"
      @focus="isTypingCvc = true"
      @blur="isTypingCvc = false"
      id="cvc"
    />
    <br />
    <v-btn small class="btn btn-success btn-block">Valider</v-btn>
  </div>
</template>

<script>
import VueCCard from 'vue-ccard'

export default {
  name: 'payment',
  components: {
    VueCCard,
  },
  data() {
    return {
      isTypingCvc: false,
      cc: {
        number: '',
        holder: '',
        exp: '',
        cvc: '',
      },
    }
  },
}
</script>

<style>
#payment {
  margin-top: 15vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

#payment .credit-card {
  margin-left: auto;
  margin-right: auto;
}

#payment input {
  border: 1px solid black;
}
</style>
