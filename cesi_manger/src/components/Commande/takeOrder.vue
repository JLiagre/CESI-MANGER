<template>
  <div>
    <div v-if="connectedDelivery != false">
      <h2 class="take-title">
        Prise en charge de commande pour {{ user.name }}
      </h2>
      <p>Votre ID : {{ delivery_id }}</p>
      <div class="row">
        <div class="col">
          <form v-on:submit.prevent="submitForm">
            <div>
              <p>Commande n° : {{ references[0] }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="username">ID livreur</label>
              <input
                type="text"
                class="form-control"
                id="deliveryID"
                placeholder="ID livreur"
                v-model="form.username"
              />
            </div>
            <div class="form-group">
              <p>Votre ID : {{ delivery_id }}</p>
              <button class="btn btn-primary" @click="notif()">
                Prendre en charge
              </button>
            </div>
          </form>
        </div>
        <div class="col">
          <form v-on:submit.prevent="submitForm">
            <div>
              <p>Commande n° : {{ references[1] }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="username">ID livreur</label>
              <input
                type="text"
                class="form-control"
                id="deliveryID"
                placeholder="ID livreur"
                v-model="form.username"
              />
            </div>
            <div class="form-group">
              <p>Votre ID : {{ delivery_id }}</p>
              <button class="btn btn-primary" @click="notif()">
                Prendre en charge
              </button>
            </div>
          </form>
        </div>
        <div class="col">
          <form v-on:submit.prevent="submitForm">
            <div>
              <p>Commande n° : {{ references[2] }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="username">ID livreur</label>
              <input
                type="text"
                class="form-control"
                id="deliveryID"
                placeholder="ID livreur"
                v-model="form.username"
              />
            </div>
            <div class="form-group">
              <p>Votre ID : {{ delivery_id }}</p>
              <button class="btn btn-primary" @click="notif()">
                Prendre en charge
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form v-on:submit.prevent="submitForm">
            <div>
              <p>Commande n° : {{ references[3] }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="username">ID livreur</label>
              <input
                type="text"
                class="form-control"
                id="deliveryID"
                placeholder="ID livreur"
                v-model="form.username"
              />
            </div>
            <div class="form-group">
              <p>Votre ID : {{ delivery_id }}</p>
              <button class="btn btn-primary" @click="notif()">
                Prendre en charge
              </button>
            </div>
          </form>
        </div>
        <div class="col">
          <form v-on:submit.prevent="submitForm">
            <div>
              <p>Commande n° : {{ references[4] }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="username">ID livreur</label>
              <input
                type="text"
                class="form-control"
                id="deliveryID"
                placeholder="ID livreur"
                v-model="form.username"
              />
            </div>
            <div class="form-group">
              <p>Votre ID : {{ delivery_id }}</p>
              <button class="btn btn-primary" @click="notif()">
                Prendre en charge
              </button>
            </div>
          </form>
        </div>
        <div class="col">
          <form v-on:submit.prevent="submitForm">
            <div>
              <p>Commande n° : {{ references[5] }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="username">ID livreur</label>
              <input
                type="text"
                class="form-control"
                id="deliveryID"
                placeholder="ID livreur"
                v-model="form.username"
              />
            </div>
            <div class="form-group">
              <p>Votre ID : {{ delivery_id }}</p>
              <button class="btn btn-primary" @click="notif()">
                Prendre en charge
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-if="connectedRestaurant != false">
      <h2 class="Qr-take-title">
        QR pour commandes en attentes de prise en charge :
      </h2>
      <div class="row">
        <div class="col">
          <p>Commande n° : {{ referencesRestaurant[0] }}</p>
          <qrcode-vue :value="referencesRestaurant[0]" :size="size" level="H" />
        </div>
        <div class="col">
          <p>Commande n° : {{ referencesRestaurant[1] }}</p>
          <qrcode-vue :value="referencesRestaurant[1]" :size="size" level="H" />
        </div>
        <div class="col">
          <p>Commande n° : {{ referencesRestaurant[2] }}</p>
          <qrcode-vue :value="referencesRestaurant[2]" :size="size" level="H" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>Commande n° : {{ referencesRestaurant[3] }}</p>
          <qrcode-vue :value="referencesRestaurant[3]" :size="size" level="H" />
        </div>
        <div class="col">
          <p>Commande n° : {{ referencesRestaurant[4] }}</p>
          <qrcode-vue :value="referencesRestaurant[4]" :size="size" level="H" />
        </div>
        <div class="col">
          <p>Commande n° : {{ referencesRestaurant[5] }}</p>
          <qrcode-vue :value="referencesRestaurant[5]" :size="size" level="H" />
        </div>
      </div>
    </div>
    <div v-if="connectedClient != false">
      <h2 class="Qr-take-title">QR pour reception de commande :</h2>
      <div class="row">
        <div class="col">
          <p>Commande n° : {{ referencesClient[0] }}</p>
          <qrcode-vue :value="referencesClient[0]" :size="size" level="H" />
        </div>
        <div class="col">
          <p>Commande n° : {{ referencesClient[1] }}</p>
          <qrcode-vue :value="referencesClient[1]" :size="size" level="H" />
        </div>
        <div class="col">
          <p>Commande n° : {{ referencesClient[2] }}</p>
          <qrcode-vue :value="referencesClient[2]" :size="size" level="H" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>Commande n° : {{ referencesClient[3] }}</p>
          <qrcode-vue :value="referencesClient[3]" :size="size" level="H" />
        </div>
        <div class="col">
          <p>Commande n° : {{ referencesClient[4] }}</p>
          <qrcode-vue :value="referencesClient[4]" :size="size" level="H" />
        </div>
        <div class="col">
          <p>Commande n° : {{ referencesClient[5] }}</p>
          <qrcode-vue :value="referencesClient[5]" :size="size" level="H" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import { mapState } from 'vuex'
//import axios from 'axios'

export default {
  name: 'takeOrder',
  computed: mapState(['user']),
  data() {
    return {
      references: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6'],
      referencesClient: ['R1cl', 'R2cl', 'R3cl', 'R4cl', 'R5cl', 'R6cl'],
      referencesRestaurant: ['R1ra', 'R2ra', 'R3ra', 'R4ra', 'R5ra', 'R6ra'],
      size: 100,
      connectedRestaurant: false,
      connectedDelivery: true,
      connectedClient: false,
      delivery_id: 'JDOE01012000',
      form: {
        delivery_id: 'JDOE01012000',
        references: '',
      },
    }
  },
  components: {
    QrcodeVue,
  },
  methods: {
    getUser() {
      console.log(this.user)
    },
    notif() {
      this.$notify({
        group: 'foo',
        title: 'Association de commande',
        text: 'Vous avez bien été associé à la commande. Nous vous souhaitons un bon trajet et vous demandons de rester prudent lors de votre livraison',
      })
    },
    /*submitForm(){
            axios.post('/contact', this.form)
                 .then((res) => {
                     //Perform Success Action
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
        }*/
  },
}
</script>

<style>
.take-title {
  padding-top: 2em;
  font-weight: bold;
}
.Qr-take-title {
  padding-top: 1em;
}
</style>
