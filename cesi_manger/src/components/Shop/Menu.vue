<template>
  <div class="product">
    <div v-if="loaded">
      <h3>Détails du menu</h3>
      <div class="card">
        <div class="card-header">header</div>
        <div class="card-body">
          <p>ID: 1</p>
          <p>Nom: Test</p>
          <p>Prix (€): 10</p>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Produit</th>
                <th scope="col">Quantite</th>
                <th scope="col">Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pate</td>
                <td>1</td>
                <td><del>10€</del> 8€</td>
              </tr>
              <tr>
                <td>Boisson</td>
                <td>2</td>
                <td><del>5€</del> 4€</td>
              </tr>
              <tr>
                <td>Dessert</td>
                <td>2</td>
                <td><del>5€</del> 4€</td>
              </tr>
              <tr>
                <td>TOTAL</td>
                <td>---</td>
                <td>24€</td>
              </tr>
            </tbody>
          </table>
          <!-- ******************************************* -->
          <!-- Ici j'ai préparé le code pour lier à la BDD -->
          <!-- ******************************************* -->
          <!-- 
                    <p>ID: {{ productId }}</p>
                    <p>Product Name: {{ productName }}</p>
                    <p>Product Price: ${{ productPrice }}</p>
                    -->

          <!-- AJOUTER UN FOREACH PRODUCTS ICI-->
          <button class="btn btn-success">
            <i class="fa fa-shopping-cart"></i> Ajouter au panier
          </button>
          <router-link :to="'/products'" class="btn btn-primary">
            Retour
          </router-link>
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
      loaded: true,
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
