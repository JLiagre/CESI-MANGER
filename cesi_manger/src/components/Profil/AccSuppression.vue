<template>
    <div class="container">    
        <h2 class="delete-label">Supprimer ou Geler mon compte</h2>
        <div class="row">    
            <div class="col">
                <div class="delete-btn">
                    <button class="btn btn-primary" @click="notif()">Supprimer</button>
                </div>
            </div>
            <div class="col">
                <div class="freeze-btn">
                    <button class="btn btn-primary" @click="notif()">Geler</button>
                </div>  
            </div> 
        </div> 
    </div>
</template>

<script>
export default {
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
    .delete-label {
        font-weight: bold;
    }
</style>