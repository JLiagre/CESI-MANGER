
<template>
    <div class="acc-form" v-if="userClient = true">
            <h2 class="change-acc-name"> Modifier mon compte </h2>
            <form v-on:submit.prevent="submitForm">
                <div class="form-group">
                    <label class="form-label" for="username">Pseudo</label>
                    <input type="text" class="form-control" id="username" placeholder="Votre pseudo" v-model="form.username">
                </div>
                <div class="form-group">
                    <label class="form-label" for="password">Mot de passe</label>
                    <input type="text" class="form-control" id="password" placeholder="Votre mot de passe" v-model="form.password">
                </div>
                <div class="form-group">
                    <label class="form-label" for="name">Prénom</label>
                    <input type="text" class="form-control" id="name" placeholder="Votre prénom" v-model="form.name">
                </div>
                <div class="form-group">
                    <label class="form-label" for="description">Description</label>
                    <input type="email" class="form-control" id="description" placeholder="Description du restaurant"
                        v-model="form.description">
                </div>
                <div class="form-group">
                    <label class="form-label" for="address">Adresse</label>
                    <input type="text" class="form-control" id="address" 
                        placeholder="Votre adresse" 
                        v-model="form.address">
                </div>
                <div class="form-group">
                    <label class="form-label" for="zip">Code postal</label>
                    <input type="text" class="form-control" id="zip" 
                        placeholder="Votre adresse" 
                        v-model="form.zip">
                </div>
                <div class="form-group">
                    <label class="form-label" for="city">Ville</label>
                    <input type="text" class="form-control" id="city" 
                        placeholder="Votre ville" 
                        v-model="form.city">
                </div>
                <div class="form-group">
                    <label class="form-label" for="country">Pays</label>
                    <input type="text" class="form-control" id="country" 
                        placeholder="Votre pays" 
                        v-model="form.country">
                </div>
                <div class="form-group">
                    <label class="form-label" for="dayopen">Jours d'ouverture</label>
                    <div>
                        <div>
                            <input type="checkbox" id="lundi" value="lundi" v-model="form.dayopen">
                            <label for="lundi">Lundi</label>
                        </div>
                        <div>
                            <input type="checkbox" id="mardi" value="mardi" v-model="form.dayopen">
                            <label for="mardi">Mardi</label>                            
                        </div>
                        <div>
                            <input type="checkbox" id="mercredi" value="mercredi" v-model="form.dayopen">
                            <label for="mercredi">Mercredi</label>
                        </div>
                        <div>
                            <input type="checkbox" id="jeudi" value="jeudi" v-model="form.dayopen">
                            <label for="jeudi">Jeudi</label>
                        </div>
                        <div>
                            <input type="checkbox" id="vendredi" value="vendredi" v-model="form.dayopen">
                            <label for="vendredi">Vendredi</label>
                        </div>
                        <div>
                            <input type="checkbox" id="samedi" value="samedi" v-model="form.dayopen">
                            <label for="samedi">Samedi</label>
                        </div>
                        <div>
                            <input type="checkbox" id="dimanche" value="dimanche" v-model="form.dayopen">
                            <label for="dimanche">Dimanche</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label" for="houropen">Heures d'ouverture</label>
                    <div>
                        <div class="form-group">
                            <label class="form-label" for="ouverture">Ouverture</label>
                            <input class="form-control" type="text" id="ouverture" value="ouverture" placeholder="Vos heures d'ouverture" v-model="houropen">
                        </div>
                        <div>
                            <label class="form-label" for="fermeture">Fermeture</label> 
                            <input class="form-control" type="text" id="fermeture" value="fermeture" placeholder="Vos heures de fermeture" v-model="houropen">                           
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" @click="notif()">Envoyer</button>
                </div>
            </form>
    </div>
</template>

<script>
//import axios from 'axios'
export default {
    name: 'AccChangeRestaurant',
    data(){
        return{
            form: {
                username: '',
                password:'',
                name: '',
                description: '',
                address: '',
                zip: '',
                city: '',
                country: '',
                dayopen: [],
                houropen: [],
            }
        }
    },
    methods: {
        notif () {
            this.$notify({
                group: 'foo',
                title: 'Validation',
                text: 'Votre demande a bien été prise en compte, nos équipes s\'en charge le plus rapidement possible.',
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
    }
}
</script>

<style>
    .acc-form {
        text-align: center;
        font-size: 13px;
        padding-top: 10em;
        color: #000000;
        margin: 0;
    }
    .form-group {
        padding-left: 3em;
        padding-right: 3em;
        padding-bottom: 1em;
    }
    .form-label {
        font-weight: bold;
    }
    .change-acc-name {
        font-weight: bold;
    }
</style>