
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
                    <label class="form-label" for="surname">Nom de famille</label>
                    <input type="text" class="form-control" id="surname" placeholder="Votre nom de famille" v-model="form.surname">
                </div>
                <div class="form-group">
                    <label class="form-label" for="telephone">Téléphone</label>
                    <input type="email" class="form-control" id="telephone" placeholder="name@example.com"
                        v-model="form.telephone">
                </div>
                <div class="form-group">
                    <label class="form-label" for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com"
                        v-model="form.email">
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
                    <button class="btn btn-primary" @click="notif()">Envoyer</button>
                </div>
            </form>
    </div>
</template>

<script>
export default {
    name: 'AccChangeUser',
    data(){
        return{
            form: {
                username: '',
                password:'',
                name: '',
                surname: '',
                telephone: '',
                email: '',
                address: '',
                zip: '',
                city: '',
                country: '',
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
        }
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