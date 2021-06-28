<template>
    <div>
        <div v-if="connectedDelivery != false">
            <h2 class="take-title">Prise en charge de commande</h2>
            <div class="row">
                <h4>Liste commandes :</h4>
                <div class="col">
                    <p>
                        Commande n° : {{references[0]}}
                    </p>
                    <button class="btn btn-primary" @click="notify()">Prendre en charge</button>
                </div>
                <div class="col">
                    <p>
                        Commande n° : {{references[1]}}
                    </p>
                    <button class="btn btn-primary" @click="notify()">Prendre en charge</button>
                </div>
                <div class="col">
                    <p>
                        Commande n° : {{references[2]}}
                    </p>
                    <button class="btn btn-primary" @click="notify()">Prendre en charge</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>
                        Commande n° : {{references[3]}}
                    </p>
                    <button class="btn btn-primary" @click="notify()">Prendre en charge</button>
                </div>  
                <div class="col">
                    <p>
                        Commande n° : {{references[4]}}
                    </p>
                    <button class="btn btn-primary" @click="notify()">Prendre en charge</button>
                </div>
                <div class="col">
                    <p>
                        Commande n° : {{references[5]}}
                    </p>
                    <button class="btn btn-primary" @click="notify()">Prendre en charge</button>
                </div>
            </div>
        </div>
        <div v-if="connectedRestaurant != false">
            <h4 class="Qr-take-title">QR pour commandes en attentes de prise en charge :</h4>
            <div class="row">
                <div class="col">
                    <p>Commande n° : {{referencesRestaurant[0]}}</p>
                    <qrcode-vue :value="referencesRestaurant[0]" :size="size" level="H" />
                </div>
                <div class="col">
                    <p>Commande n° : {{referencesRestaurant[1]}}</p>
                    <qrcode-vue :value="referencesRestaurant[1]" :size="size" level="H" />
                </div>
                <div class="col">
                    <p>Commande n° : {{referencesRestaurant[2]}}</p>
                    <qrcode-vue :value="referencesRestaurant[2]" :size="size" level="H" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Commande n° : {{referencesRestaurant[3]}}</p>
                    <qrcode-vue :value="referencesRestaurant[3]" :size="size" level="H" />
                </div>
                <div class="col">
                    <p>Commande n° : {{referencesRestaurant[4]}}</p>
                    <qrcode-vue :value="referencesRestaurant[4]" :size="size" level="H" />
                </div>
                <div class="col">
                    <p>Commande n° : {{referencesRestaurant[5]}}</p>
                    <qrcode-vue :value="referencesRestaurant[5]" :size="size" level="H" />
                </div>
            </div>
        </div>
        <div v-if="connectedClient != false">
                <h4 class="Qr-take-title">QR pour reception de commande :</h4>
                <div class="row">
                    <div class="col">
                        <p>Commande n° : {{referencesClient[0]}}</p>
                        <qrcode-vue :value="referencesClient[0]" :size="size" level="H" />
                    </div>
                    <div class="col">
                        <p>Commande n° : {{referencesClient[1]}}</p>
                        <qrcode-vue :value="referencesClient[1]" :size="size" level="H" />
                    </div>
                    <div class="col">
                        <p>Commande n° : {{referencesClient[2]}}</p>
                        <qrcode-vue :value="referencesClient[2]" :size="size" level="H" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>Commande n° : {{referencesClient[3]}}</p>
                    <qrcode-vue :value="referencesClient[3]" :size="size" level="H" />
                    </div>
                    <div class="col">
                        <p>Commande n° : {{referencesClient[4]}}</p>
                        <qrcode-vue :value="referencesClient[4]" :size="size" level="H" />
                    </div>
                    <div class="col">
                        <p>Commande n° : {{referencesClient[5]}}</p>
                        <qrcode-vue :value="referencesClient[5]" :size="size" level="H" />
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
    name:'takeOrder',
    data(){
        return{
            references: ["R1","R2","R3","R4","R5","R6"],
            referencesClient: ["R1cl","R2cl","R3cl","R4cl","R5cl","R6cl"],
            referencesRestaurant: ["R1ra","R2ra","R3ra","R4ra","R5ra","R6ra"],
            size: 100,
            connectedRestaurant: true,
            connectedDelivery: true,
            connectedClient: true,
        }
    },
    components:{
        QrcodeVue,
    },
    methods:{
        notif() {
            this.$notify({
                group: 'foo',
                title: 'Association de commande',
                text: "Vous avez bien été associé à la commande. Nous vous souhaitons un bon trajet et vous demandons de rester prudentlors de votre livraison",
            })
        },
    },
}
</script>

<style>
    .take-title{
        font-weight: bold;
    }
    .Qr-take-title{
        padding-top: 2em;
        
    }
</style>