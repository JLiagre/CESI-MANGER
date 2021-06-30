<template>
  <div class="acc-form">
    <div class="row">
      <h2 class="change-acc-name col-10">Mes restaurants</h2>
      <div class="col">
        <v-btn to="/Restaurants/new">Nouveau</v-btn>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th colspan="2">Nom</th>
          <th colspan="2">Date D'ouverture</th>
          <th>ACCES</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="2">CHEZ JOJO</td>
          <td colspan="2">10/12/2021</td>
          <td>
            <v-btn to="/products">Acceder</v-btn>
            <v-btn to="/Restaurants/edit">Editer</v-btn>
            <v-btn>Supprimer</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
