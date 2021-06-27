<template>
    <div class="parrainage">
        <h2 class="compo-title">Parrainage</h2>
        <div class="trame-parrainage">
            <div>
                <h5> Mon Code : </h5>
                <qrcode-vue :value="value" :size="size" level="H" />
                <h6> {{value}} </h6>
            </div>
            <div>
                <h5> Utiliser le code d'un parrain : </h5>
                <input
                    type="text"
                    size="25"
                    placeholder="Type to generate..."
                    v-model="text"
                />
                <h6 class="msg-reduc">Obtenez -10% sur votre prochaine commande !</h6>
            </div>
        </div>
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

  export default {
    data() {
        return {
            value: "JLI27062021",
            size: 300,
        }
    },
    components: {
        QrcodeVue,
    },
  }
</script>

<style>
    .parrainage {
        padding-bottom: 2em;

    }
    .trame-parrainage {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .msg-reduc {
        padding-top: 1em;
        font-weight: bold;
    }
    .compo-title {
        font-weight: bold;
    }
</style>