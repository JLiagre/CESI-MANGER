<template>
    <div v-if="connectedClient != false" id="histo-to-print">
        <h2>Historique de commande</h2>
        <div>
            <li v-for="item in lastCommandes" :key="item.ref">
                Commande n° {{item.ref}} : {{item.product}} x{{item.quantity}} - {{item.priceTotal}}
            </li>
            <button class="btn btn-primary" @click="getPDF()">Télécharger en PDF</button>
        </div>
    </div>
</template>

<script>
import html2pdf from 'html2pdf.js'

export default {
    name: 'histoCommande',
    data() {
        return {
            lastCommandes: [
                {ref: 'R1', product: 'Hot-Dog classique', quantity: '2', priceTotal: '30'},
                {ref: 'R2', product: 'Burger', quantity: '1', priceTotal: '16'},
                {ref: 'R3', product: 'Le festin africain', quantity: '10', priceTotal: '10'},
                {ref: 'R4', product: 'Pâtes carbonara', quantity: '3', priceTotal: '45'},
            ],
            connectedClient: true,
        }
    },
    components: {
        
    }, 
    methods: {
        getPDF(){
            var element = document.getElementById('histo-to-print');
            html2pdf(element);
        },
    },
}
</script>

<style>

</style>