<template>
    <div class="acc-suppression">    
        <h2 class="delete-label">Supprimer ou Geler mon compte</h2>
        <div class="delete-btn">
            <button class="btn btn-primary" @click="AccDelete()">Supprimer</button>
        </div>
        <div class="freeze-btn">
            <button class="btn btn-primary" @click="AccFreeze()">Geler</button>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'acc-suppression',
    //messageDelete: "Êtes-vous sûr de vouloir supprimer votre compte ? Geler ce dernier désactivera votre compte tout en vous premettant de le récupérer plus tard",
    //messageFreeze: "Êtes-vous sûr de vouloir geler votre comptre ?",

    methods: {
        AccDelete() {
            alert('Votre demande de suppression à bien été reçue.')
        },
        AccFreeze() {
            alert('votre demande de gèle à bien été reçue. Au revoir et à bientôt :)')
        }
    }
}
</script>

<style>
    .delete-label {
        font-weight: bold;
    }
    .acc-suppression {
        padding-bottom: 10em;
    }
    .delete-btn {
        padding: 1em;
    }
</style>