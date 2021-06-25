<template>
    <div class="product">
        <div v-if="loaded">
            <h3>Détails du produit</h3>
            <div class="card">
                <div class="card-header">header</div>
                <div class="card-body">
                    <p>ID: 1</p>
                    <p>Nom: Test</p>
                    <p>Prix (€): 10</p>
                    <!-- ******************************************* -->
                    <!-- Ici j'ai préparé le code pour lier à la BDD -->
                    <!-- ******************************************* -->
                    <!-- 
                    <p>ID: {{ productId }}</p>
                    <p>Product Name: {{ productName }}</p>
                    <p>Product Price: ${{ productPrice }}</p>
                    -->
                    <button class="btn btn-success"><i class="fa fa-shopping-cart"></i> Ajouter au panier </button>
                    <router-link :to="'/products'" class="btn btn-primary"> Retour </router-link>
                </div>
            </div>
        </div>
        <div v-else>
            <h3>Loading...</h3>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
      return {
          productId: '',
          productName: '',
          productPrice: '',
          loaded: true
        }
    },
}
</script>

<style>
    .product {
        width: 50%;
        margin-top: 15vh;
        margin-left: auto;
        margin-right: auto;
    }
</style>