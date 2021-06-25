
<template>
    <div class="acc-form">
            <h2 class="change-acc-name"> Modifier mon compte </h2>
            <form v-on:submit.prevent="submitForm">
                <div class="form-group">
                    <label class="form-label" for="name">Nom</label>
                    <input type="text" class="form-control" id="name" placeholder="Your name" v-model="form.name">
                </div>
                <div class="form-group">
                    <label class="form-label" for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com"
                        v-model="form.email">
                </div>
                <div class="form-group">
                    <label class="form-label" for="formControlRange">Genre</label><br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="gender-male" value="male"
                            v-model="form.gender">
                        <label class="form-check-label" for="gender">Homme</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="gender-female" value="female"
                            v-model="form.gender">
                        <label class="form-check-label" for="gender">Femme</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label" for="address">Adresse</label>
                    <input type="text" class="form-control" id="address" 
                        placeholder="Numéro de rue, Avenue, Code postal, Ville" 
                        v-model="form.address">
                </div>
                <div class="form-group">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="terms" value="yes" v-model="form.terms">
                        <label class="form-check-label" for="inlineCheckbox3">J'accepte les termes et conditions d'utilisation</label>
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" @click="sendForm()">Envoyer</button>
                </div>
            </form>
    </div>
</template>

<script>
export default {
    name: 'AccChangeForm',
    data(){
        return{
            form: {
                name: '',
                email: '',
                gender: '',
                address: '',
                terms: false
            }
        }
    },
    methods: {
        sendForm() {
            alert('Modifications bien prises en compte.')
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