<template>
  <div class="cart">
    <div class="card mt-5">
      <div class="card-header">Votre panier</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th>Nom</th>
                <th>Prix unitaire</th>
                <th>Quantité</th>
                <th>Total</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in cart" v-bind:key="product.id">
                <td>{{ product.product_id }}</td>
                <td>{{ product.product_name }}</td>
                <td class="prices">{{ product.product_price }}</td>
                <td>{{ product.product_quantity }}</td>
                <td class="prices">
                  {{ product.product_price * product.product_quantity }}
                </td>
                <td>
                  <v-btn
                    small
                    class="btn btn-danger btn-block"
                    v-on:click="onDelete($index)"
                    ><i class="fa fa-trash"></i
                  ></v-btn>
                </td>
              </tr>
              <tr>
                <td colspan="4"></td>
                <td class="prices">
                  <strong>{{ total }}</strong>
                </td>
                <td>
                  <v-btn small class="btn btn-success btn-block" to="/payment"
                    ><i class="fa fa-shopping-cart"></i
                  ></v-btn>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',

  // Test avec data fictives
  //
  data: () => ({
    cart: [
      {
        product_id: 1,
        product_name: 'toto',
        product_price: 10.99,
        product_quantity: 2,
      },
      {
        product_id: 2,
        product_name: 'titi',
        product_price: 5.99,
        product_quantity: 1,
      },
      {
        product_id: 3,
        product_name: 'tata',
        product_price: 1.99,
        product_quantity: 5,
      },
    ],
  }),
  computed: {
    total() {
      var total = 0
      this.cart.forEach(function (el) {
        total += el.product_price * el.product_quantity
      })
      return total
    },
  },
  methods: {
    onDelete(index) {
      this.cart.splice(index, 1)
    },
  },
}
</script>

<style>
.cart {
  width: 80%;
  margin-top: 15vh;
  margin-left: auto;
  margin-right: auto;
}

.cart td.prices:after {
  content: ' €';
}
</style>
