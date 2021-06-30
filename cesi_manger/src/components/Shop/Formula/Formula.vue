<template>
  <div class="product">
    <div v-if="loaded">
      <h3>Détails du menu</h3>
      <div class="card">
        <div class="card-header">C'est Caci parfait</div>
        <div class="card-body">
          <p>ID: 1</p>
          <p>Nom: Pasta Formula</p>
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
                <td>Pâte</td>
                <td>1</td>
                <td><del>10€</del>  8€</td>
              </tr>
              <tr>
                <td>Boisson</td>
                <td>1</td>
                <td><del>5€</del>  4€</td>
              </tr>
              <tr>
                <td>Dessert</td>
                <td>1</td>
                <td><del>5€</del>  4€</td>
              </tr>
              <tr>
                <td>TOTAL</td>
                <td>---</td>
                <td>16€</td>
              </tr>
            </tbody>
          </table>
          <!-- ******************************************* -->
          <!-- Ici j'ai préparé le code pour lier à la BDD -->
          <!-- ******************************************* -->
          <!--  <div class="card-header">{{restaurantName}}</div>
                ...
                    <p>ID: {{ productId }}</p>
                    <p>Product Name: {{ productName }}</p>
                    <p>Product Price: ${{ productPrice }}</p>
                    -->

          <!-- AJOUTER UN FOREACH PRODUCTS ICI-->
          <button class="btn btn-success">
            <i class="fa fa-shopping-cart"></i> Ajouter au panier
          </button>
          <router-link :to="'/shop'" class="btn btn-primary">
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
  name: 'Formula',
  data() {
    return {
      restaurantName: '',
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
